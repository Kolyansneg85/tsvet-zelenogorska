"use client"

import Image from "next/image"
import { useState } from "react"
import PaymentOptionsModal from "./payment-options-modal"

export default function ProjectIntro() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Жилой комплекс «Цвет Зеленогорска»",
    alternateName: "Цвет Зеленогорска — камерная резиденция в стиле северного модерна",
    description:
      "Камерная резиденция в окружении хвойного леса и у Жемчужного ручья в Зеленогорске. Архитектура — современное прочтение северного модерна с терракотовым кирпичом и лазурными элементами. 94 квартиры в четырёхэтажном доме, закрытый двор без машин, wellness-центр с хаммамом и массажным кабинетом, фитнес-зал, йога-рум и элегантное лобби с капельными водопадами. 20 минут пешком до «Золотого пляжа» и Финского залива.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Чапыгина, д. 4",
      addressLocality: "Зеленогорск",
      addressRegion: "Санкт-Петербург, Курортный район",
      postalCode: "197110",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "60.235357",
      longitude: "29.759538",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "94 квартиры площадью 24–111 м²", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "4 этажа, камерный формат проживания",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Квартиры с террасами, высокие потолки до 3,6 м", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wellness-центр с хаммамом (3 режима), массажным кабинетом и зоной отдыха",
        value: true,
      },
      { "@type": "LocationFeatureSpecification", name: "Приватный фитнес-зал и йога-рум", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Лобби с капельными водопадами и витражной переговорной",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Закрытый двор без машин с беседками и детской площадкой Richter Rus",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Подземный паркинг на 56 мест",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "4 места для электромобилей",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Многоступенчатая система очистки воды",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Приточно-вытяжная вентиляция с индивидуальными клапанами",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Звукоизоляция по технологии «плавающий пол»",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Собственная крышная газовая котельная",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Система «Цифровой дом»",
        value: true,
      },
    ],
    hasMap: "https://yandex.ru/maps/?text=Зеленогорск%2C%20просп.%20Ленина%2C%2038",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="py-16 bg-stone-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-light text-[#a8996e] leading-tight font-history-pro">
                Камерная резиденция в стиле северного модерна у Жемчужного ручья
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  «Цвет Зеленогорска» продолжает традиции курортного отдыха петербургской интеллигенции начала XX века.
                  Дом расположен в тихой части Зеленогорска, в окружении хвойного леса и в двух шагах от живописного
                  Жемчужного ручья. Архитектура проекта — это современное прочтение северного модерна: терракотовый
                  кирпич, повторяющий оттенки закатного неба, и лазурные декоративные элементы, созвучные течению воды.
                </p>

                <p>
                  Это по-настоящему камерный проект: всего 4 этажа и 94 квартиры, распределённые по четырём уютным
                  секциям. Здесь создана атмосфера полной приватности: закрытый двор без машин, собственные террасы для
                  неспешных завтраков и виды на лес, которые становятся частью интерьера.
                </p>

                <p>
                  Внутренняя инфраструктура дома позволяет наслаждаться курортным ритмом, не покидая территории:
                  собственный wellness-центр с хаммамом и массажным кабинетом, фитнес-зал, йога-рум и элегантное лобби с
                  капельными водопадами. А до «Золотого пляжа» и Финского залива — всего 20 минут неспешной прогулки по
                  зеленому проспекту Ленина.
                </p>
              </div>

              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors"
                data-action="payment-options"
                data-section="project-intro"
              >
                Как купить
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tsvet-zelenogorska-intro.webp"
                  alt="Жилой комплекс «Цвет Зеленогорска» — вид на здание с терракотовым кирпичом и современной архитектурой в стиле северного модерна"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentOptionsModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  )
}
