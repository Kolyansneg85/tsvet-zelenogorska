import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectIntro from "@/components/project-intro"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Apartments from "@/components/apartments"
import Location from "@/components/location"
import Infrastructure from "@/components/infrastructure"
import IntelligentCourtyard from "@/components/intelligent-courtyard"
import LifeScenarios from "@/components/life-scenarios"
import Documents from "@/components/documents"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export const metadata = {
  title: "Купить квартиру в ЖК «Коллекционер» — Цены и планировки | Петроградская сторона",
  description:
    "Камерный дом с 69 коллекционными лотами: европланировки, мансарды и двухуровневые квартиры, лобби‑пинакотека, приватный двор‑патио и подземный паркинг. Выбор площадей от 43 до 222 м² — уточняйте наличие и условия!",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectIntro />
      <About />
      <Gallery />
      <Apartments />
      <Location />
      <Infrastructure />
      <IntelligentCourtyard />
      <LifeScenarios />
      <Documents />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
