"use client";
import React, { useEffect } from "react";

declare global {
  interface Window {
    Feed2Dev?: {
      init: (config: Record<string, any>) => void;
    };
  }
}

type Props = {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  primaryColor?: string;
  title?: string;
  subtitle?: string;
};

export default function FeedbackWidget({
  position = "bottom-right",
  primaryColor = "#667eea",
  title = "Enviar Feedback",
  subtitle = "Adoraríamos ouvir sua opinião!",
}: Props) {
  useEffect(() => {
    // If already available, just initialize.
    const maybeInit = () => {
      if (window.Feed2Dev) {
        try {
          window.Feed2Dev.init({
            projectId: "68d2f6720002e0a23941",
            appwriteEndpoint: "https://sfo.cloud.appwrite.io/v1",
            appwriteProjectId: "68d2f6720002e0a23941",
            position,
            primaryColor,
            title,
            subtitle,
          });
        } catch (e) {
          console.error("Feed2Dev.init failed:", e);
        }
        return true;
      }
      return false;
    };

    if (maybeInit()) return;

    // Inject script only once
    const existing = document.getElementById("feed2dev-widget-script") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => {
        maybeInit();
      }, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "feed2dev-widget-script";
    script.src = "https://68d30b3900346b9d2c00.sfo.appwrite.run/widget.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      maybeInit();
    };
    script.onerror = () => {
      console.error("Failed to load Feed2Dev widget script");
    };
    document.body.appendChild(script);
  }, [position, primaryColor, title, subtitle]);

  return null;
}
