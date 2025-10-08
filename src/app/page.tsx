import React from 'react';
import { getHomepageData } from '@/lib/sanity';
import HeroSection from '@/components/homepage/HeroSection';
import StatsSection from '@/components/homepage/StatsSection';
import ManagementSection from '@/components/homepage/ManagementSection';
import SectorsSection from '@/components/homepage/SectorsSection';
import WhyChooseSection from '@/components/homepage/WhyChooseSection';
import ClientsSection from '@/components/homepage/ClientsSection';
import MethodologySection from '@/components/homepage/MethodologySection';
import ArchitectsSection from '@/components/homepage/ArchitectsSection';
import AboutSection from '@/components/homepage/AboutSection';
import ContactFormSection from '@/components/homepage/ContactFormSection';
import ContactInfoSection from '@/components/homepage/ContactInfoSection';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
    const data = await getHomepageData();

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Conteúdo não encontrado. Configure o conteúdo no Sanity Studio.</p>
            </div>
        );
    }

    return (
        <>
            <HeroSection data={data.heroSection} />
            <StatsSection data={data.statsSection} />
            <ManagementSection data={data.managementSection} />
            <SectorsSection data={data.sectorsSection} />
            <WhyChooseSection data={data.whyChooseSection} />
            <ClientsSection data={data.clientsSection} />
            <MethodologySection data={data.methodologySection} />
            <ArchitectsSection data={data.architectsSection} />
            <AboutSection data={data.aboutSection} />
            <ContactFormSection data={data.contactFormSection} />
            <ContactInfoSection data={data.contactInfoSection} />
        </>
    );
}