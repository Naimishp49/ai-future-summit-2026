import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import SessionsSection from "@/components/sections/SessionsSection";
import ExpertsSection from "@/components/sections/ExpertsSection";
import VenueSection from "@/components/sections/VenueSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <HighlightsSection />
            <SessionsSection />
            <ExpertsSection />
            <VenueSection />
            <RegistrationSection />
            <AboutSection />
        </>
    );
}
