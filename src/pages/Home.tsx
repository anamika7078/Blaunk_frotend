import LazySection from "../components/LazySection";

import HeroSection from "../sections/home/HeroSection";
import AdvertisementBanner from "../components/AdvertisementBanner";
import CTASection from "../sections/home/CTASection";
import MarketInsightsSection from "../sections/home/MarketInsightsSection";
import CategorySection from "../sections/home/CategorySection";
import LogisticsHeroSection from "../sections/home/LogisticsHeroSection";
import LogisticsContactForm from "../sections/home/LogisticsContactForm";
import CuratedCollectionsSection from "../sections/home/CuratedCollectionsSection";
import BlaunkStoreSection from "../sections/home/BlaunkStoreSection";
import SustainabilitySection from "../sections/home/SustainabilitySection";
import LimitedEdition from "../sections/home/LimitedEdition";
import GourmetPatisserieSection from "../sections/home/GourmetPatisserieSection";

import TestimonialSection from "../sections/home/TestimonialSection";
import CountryServiceSection from "../sections/home/CountryServiceSection";
import StatsSection from "../sections/home/StatsSection";
import HospitalitySliderSection from "../sections/home/HospitalitySliderSection";
import HotelShowcaseSection from "../sections/home/HotelShowcaseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdvertisementBanner variant="accent" animation="scroll" />

      <LazySection minHeight="400px">
        <CTASection />
      </LazySection>

      <LazySection minHeight="500px">
        <MarketInsightsSection />
      </LazySection>

      <AdvertisementBanner variant="orange" animation="scroll" />

      <LazySection minHeight="400px">
        <CategorySection />
      </LazySection>

      <LazySection minHeight="300px">
        <LogisticsHeroSection />
      </LazySection>

      <LazySection minHeight="900px">
        <LogisticsContactForm />
      </LazySection>

      <AdvertisementBanner variant="secondary" animation="scroll" />

      <LazySection minHeight="500px">
        <CuratedCollectionsSection />
      </LazySection>

      <LazySection minHeight="1200px">
        <BlaunkStoreSection />
      </LazySection>

      <AdvertisementBanner variant="primary" animation="scroll" />

      <LazySection minHeight="500px">
        <SustainabilitySection />
      </LazySection>

      <LazySection minHeight="500px">
        <LimitedEdition />
      </LazySection>
      <LazySection minHeight="500px">
        <HotelShowcaseSection />
      </LazySection>
      <LazySection minHeight="700px">
        <GourmetPatisserieSection />
      </LazySection>

      <AdvertisementBanner variant="accent" animation="scroll" />
      <LazySection minHeight="800px">
        <TestimonialSection />
      </LazySection>

      <LazySection minHeight="700px">
        <CountryServiceSection />
      </LazySection>

      <LazySection minHeight="400px">
        <StatsSection />
      </LazySection>

      <AdvertisementBanner variant="orange" animation="scroll" />
    </>
  );
}
