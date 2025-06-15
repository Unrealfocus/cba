"use client"

import Hero from "./welcome/components/section/hero/hero";
import Category from "./welcome/components/section/category/catergory";
import CustomerSection from "./welcome/components/section/feature/feature";
import Ads from "./welcome/components/section/ads/ads";
import Blog from "./welcome/components/section/blog/blog";
import Faq from "./welcome/components/section/faq/faq";
import { AdsBanner } from "./welcome/components/section/ads_banner/adsBanner";
import Nav from "./home/component/nav/nav";
// import Footer from "./welcome/components/section/footer/footer";

export default function Home() {

  const cateredByAfricaFaqs = [
    {
      id: 1,
      question: "What types of African cuisine does CateredByAfrica offer?",
      answer: "We specialize in authentic African dishes from across the continent, including Nigerian jollof rice, Ghanaian banku, Ethiopian injera, South African bunny chow, and Senegalese thieboudienne. Our menu rotates seasonally to showcase diverse flavors."
    },
    {
      id: 2,
      question: "How does CateredByAfrica ensure food authenticity?",
      answer: "We work directly with African chefs and source authentic ingredients from specialty importers. All our recipes are developed in consultation with culinary experts from each region we represent."
    },
    {
      id: 3,
      question: "What dietary restrictions can CateredByAfrica accommodate?",
      answer: "We offer vegetarian, vegan, gluten-free, and halal options. Many of our dishes are naturally dairy-free. Please specify dietary needs when ordering so we can recommend suitable dishes."
    },
    {
      id: 4,
      question: "How far in advance should I place catering orders?",
      answer: "We recommend ordering at least 72 hours in advance for small events (under 50 people) and 1-2 weeks for larger events. For last-minute requests (24-48 hours), please call us directly as we'll accommodate when possible."
    },
    {
      id: 5,
      question: "Does CateredByAfrica offer cooking classes or culinary experiences?",
      answer: "Yes! We host monthly African cooking workshops and private group classes. Follow us on social media @CateredByAfrica for upcoming events or contact us to arrange a custom team-building culinary experience."
    }
  ];

  return (
    <div>
      <Nav/>
      <Hero />
      <Category />
      <CustomerSection />
      <Ads />
      <Blog />
      <Faq data={cateredByAfricaFaqs} />
      <AdsBanner />
    </div>
  );
}
