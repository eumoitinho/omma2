# Analytics & GTM Specification (LP Corporativos)

## 1. Overview
This document defines the event taxonomy, payload schema, consent model, timing metrics and GTM container blueprint for the "LP Corporativos" landing page. Goal: provide clean, privacy‑aware, low‑latency instrumentation mappable to GA4 + conversion platforms.

## 2. Data Layer Conventions
- Global array: `window.dataLayer` (push only; no mutation of historical objects)
- Event key: `event` (snake_case)
- Common optional fields: `event_category`, `event_label`, `value`, `location`, `form_id`, `slide_index`, `section_id`, `scroll_percent`
- Custom user identifier: (only post consent + form success) `email_hash` (SHA‑256 lowercase email) emitted in `user_identify` event.
- Timing metric: `first_cta_click_time` carries `ms_since_page_view`.

## 3. Consent Model
Events fire immediately; sensitive identification (email_hash) only after user action (successful form submit). If future granular consent states are stored, gate user_identify and any marketing pixels behind analytics/storage=granted.

Consent events (from banner):
- `consent_accept_all`
- `consent_save_preferences`
- `consent_banner_dismiss`
(All include: event_category=consent, event_label=banner)

## 4. Event Taxonomy
| Event | Category | Label Example | Purpose | Key Params |
|-------|----------|---------------|---------|------------|
| page_view | engagement | corporativos_lp | Initial page display | none |
| section_view | engagement | hero / impacto / setores ... | Impression of major section (first time 35% visible) | section_id |
| scroll_depth | engagement | corporativos_lp | Scroll progress thresholds | scroll_percent |
| cta_click | engagement | hero_quero_iniciar_projeto | All primary CTA clicks | location |
| sector_card_cta | engagement | setor_nome | Sector card CTA | sector_name |
| slide_view | engagement | projects_carousel | Carousel slide impression | slide_index |
| carousel_prev / carousel_next / carousel_dot | engagement | projects_carousel | Carousel navigation | slide_index (target) |
| form_view | engagement | Contact Form View | Form seen | form_id |
| form_submit_attempt | lead | Contact Form Submit Attempt | Intent to submit | form_id |
| form_submit_success | lead | Contact Form Success | Valid submission | form_id |
| lead_submit (alias) | lead | Contact Form Success | Alias of success for external mapping | form_id |
| form_submit_error | lead | Contact Form Error | Submission failure | form_id, error_type |
| user_identify | user | contact_form | Hashed user identity | email_hash, source |
| first_cta_click_time | performance | corporativos_lp | Time to first CTA interaction | ms_since_page_view |

## 5. Aliasing Strategy
`trackWithAliases(baseEvent, [aliasA, aliasB])` pushes the original then clones with each alias name preserving payload. Used to generate `lead_submit` from `form_submit_success` keeping mapping clean for ad platforms or GA4 conversions without duplicating business logic.

## 6. Timing Metric
- PageAnalytics sets page view timestamp via `markPageViewTimestamp()` on mount.
- First call to any CTA using `trackCtaWithTiming()` records elapsed ms and emits `first_cta_click_time` (once only), then the original CTA event.

## 7. Hashed Identification
On successful form submit (after alias push):
1. Lowercase + trim email.
2. SHA-256 via Web Crypto -> hex string.
3. Emit `user_identify` with `email_hash` only (no raw email stored in dataLayer).
Consumers (GTM / server) can map this to audience features or hashed matching.

## 8. GA4 Mapping Suggestions
| Internal Event | GA4 Event | Notes |
|----------------|-----------|-------|
| page_view | page_view | Native (let GTM block duplicate push if using config tag) |
| section_view | view_section | Custom event (register in GA4 UI) |
| scroll_depth | scroll_depth | Could also use GA4's built-in enhanced measurement; choose one to avoid duplication |
| cta_click | select_content | set content_type=cta, item_id=event_label |
| form_submit_attempt | begin_form_fill | Optional custom |
| form_submit_success | generate_lead | Mark as conversion |
| lead_submit | generate_lead | Alternate mapping (choose either original or alias) |
| form_submit_error | form_error | Custom |
| user_identify | user_property_update | Use tag to set user properties (if allowed) |
| slide_view | view_promotion | Or custom: carousel_slide_view |
| carousel_prev/next/dot | carousel_navigation | Custom consolidated mapping in GTM |
| first_cta_click_time | first_cta_interaction | Custom; parameter ms_since_page_view as numeric |

Recommended GA4 parameters added via GTM tag:
- event_label -> event_label
- location -> location
- section_id -> section_id
- scroll_percent -> scroll_percent (integer)
- ms_since_page_view -> ms_since_page_view

## 9. GTM Container Blueprint
Variables:
- DLV - event_label (Data Layer Variable)
- DLV - location
- DLV - section_id
- DLV - scroll_percent
- DLV - ms_since_page_view
- DLV - email_hash

Triggers (Custom Event):
- page_view (Some Events) event equals page_view
- section_view
- scroll_depth
- cta_click
- sector_card_cta
- slide_view
- carousel_prev
- carousel_next
- carousel_dot
- form_submit_attempt
- form_submit_success
- lead_submit
- form_submit_error
- user_identify
- first_cta_click_time
- consent_* (pattern match if needed)

Tags (GA4):
1. GA4 Config (fires once; optionally ignore internal page_view if duplicating) 
2. GA4 Event - Section View (trigger: section_view)
3. GA4 Event - Scroll Depth
4. GA4 Event - CTA Click
5. GA4 Event - Lead Submit (trigger: lead_submit) marked as conversion
6. GA4 Event - Form Error
7. GA4 Event - Carousel Slide View
8. GA4 Event - Carousel Nav (prev/next/dot) unify via trigger group or three tags each
9. GA4 Event - First CTA Click Time
10. GA4 Event - User Identify -> use to set user properties (parameter email_hash)
11. Consent Events -> optionally for audit or CMP integration

## 10. Data Quality / Guardrails
- Section impressions only fire once per section.
- Scroll depth thresholds fire once each (25/50/75/100).
- first_cta_click_time strictly single emission.
- Alias duplication prevention handled via explicit design (only applied on success path).

## 11. Privacy Notes
- No raw PII added to dataLayer.
- Hashing uses SHA-256, deterministic, no salt (align with most ad platform match requirements). If higher privacy needed, consider keyed HMAC separately for internal analytics.
- Easy to disable `user_identify` by gating behind future consent flag.

## 12. Future Enhancements
- Debounce carousel slide view (skip duplicate when rapid autoplay or same index).
- Add performance marks (TTI, LCP) via PerformanceObserver and push as events.
- Server-side event forwarding (SSR proxy -> Measurement Protocol) for higher reliability.
- Implement granular consent storage and conditional firing logic.

## 13. Change Log
- v1.0 Initial spec (infrastructure + alias + timing + hashing)  

---
Owner: Analytics Engineering
Status: Active
