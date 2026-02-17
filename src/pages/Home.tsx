import { useEffect } from "react";
import api from "../services/api";
import BlaunkStoreSection from "../sections/home/BlaunkStoreSection";
import CategorySection from "../sections/home/CategorySection";
import CountryServiceSection from "../sections/home/CountryServiceSection";
import CTASection from "../sections/home/CTASection";
import CuratedCollectionsSection from "../sections/home/CuratedCollectionsSection";
import GourmetPatisserieSection from "../sections/home/GourmetPatisserieSection";
import HeroSection from "../sections/home/HeroSection";
import HospitalitySliderSection from "../sections/home/HospitalitySliderSection";
import LimitedEdition from "../sections/home/LimitedEdition";
import LogisticsExcellenceSection from "../sections/home/LogisticsExcellenceSection";
import LogisticsHeroSection from "../sections/home/LogisticsHeroSection";
import MarketInsightsSection from "../sections/home/MarketInsightsSection";
import SustainabilitySection from "../sections/home/SustainabilitySection";
import TestimonialSection from "../sections/home/TestimonialSection";

export default function Home() {
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await api.get("/homepage");
        console.log("✅ Backend Connected:", response.data);
      } catch (error) {
        console.error("❌ Backend Connection Failed:", error);
      }
    };
    checkConnection();
  }, []);

  return (
    <>
      <HeroSection />
      <CTASection />
      <MarketInsightsSection />
      <CategorySection />
      <LogisticsHeroSection />
      <LogisticsExcellenceSection />
      <CuratedCollectionsSection />
      <BlaunkStoreSection />
      <SustainabilitySection />
      <LimitedEdition />
      <GourmetPatisserieSection />
      <HospitalitySliderSection />
      <TestimonialSection />
      <CountryServiceSection />
    </>
  );
}
