import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Roboto } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import ChatWidget from "../components/chat-widget"
import Script from "next/script"

// Подключение Google Fonts
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
})

// Подключение локального шрифта HistoryPro-Two для заголовков
const historyPro = localFont({
  src: "../public/fonts/HistoryPro-Two.ttf",
  variable: "--font-history-pro",
  display: "swap",
})

// Подключение локального шрифта CeraPro-Regular для основного текста
const ceraPro = localFont({
  src: "../public/fonts/CeraPro-Regular.woff",
  variable: "--font-cera-pro",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1a1a1a",
}

export const metadata: Metadata = {
  title: 'Купить квартиру в ЖК "Коллекционер" | Цены и планировки на Петроградской стороне',
  description:
    "Клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Чапыгина 4. Квартиры от 42.8 м². Срок сдачи III кв. 2028.",
  authors: [{ name: "Клубный дом Коллекционер" }],
  creator: "Клубный дом Коллекционер",
  publisher: "Клубный дом Коллекционер",
  other: {
    "content-language": "ru",
    language: "Russian",
    "geo.region": "RU-SPE",
    "geo.placename": "Saint Petersburg",
    "geo.position": "59.9311;30.3609",
    ICBM: "59.9311, 30.3609",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: 'Купить квартиру в ЖК "Коллекционер" | Цены и планировки на Петроградской',
    description:
      "Клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Чапыгина 4. Квартиры от 42.8 м². Срок сдачи III кв. 2028.",
    url: "https://kollektsioner-dom.ru",
    siteName: "Клубный дом Коллекционер",
    images: [
      {
        url: "https://kollektsioner-dom.ru/images/hero-building-light.webp",
        width: 1200,
        height: 630,
        alt: "Клубный дом Коллекционер на Петроградской стороне",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Купить квартиру в ЖК "Коллекционер" | Цены и планировки на Петроградской',
    description:
      "Клубный дом премиум-класса в Петроградском районе Санкт-Петербурга на улице Чапыгина 4. Квартиры от 42.8 м². Срок сдачи III кв. 2028.",
    images: ["https://kollektsioner-dom.ru/images/hero-building-light.webp"],
  },
  alternates: {
    canonical: "https://kollektsioner-dom.ru",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const apartmentComplexJsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": "https://kollektsioner-dom.ru/#complex",
    name: "Клубный дом «Коллекционер»",
    description:
      "Воплощение изысканной архитектуры, приватности и арт-атмосферы для ценителей культурной жизни в центре Петроградского района. Каждый элемент дома отражает эстетику коллекционного произведения искусства: воздушные фасады из натурального камня, итальянская площадь у входа, приватный зеленый двор-патио, авторское лобби с пинакотекой и современными технологиями комфорта.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "улица Чапыгина 4",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Санкт-Петербург",
      postalCode: "197046",
      addressCountry: "RU",
    },
    numberOfBuildings: 2,
    numberOfAccommodationUnits: 69,
    numberOfRooms: 69,
    floorSize: {
      "@type": "QuantitativeValue",
      minValue: 42.8,
      maxValue: 222,
      unitCode: "MTK",
    },
    url: "https://kollektsioner-dom.ru",
    telephone: "+7 (812) 660-56-50",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Подземный паркинг",
        value: true,
        description: "57 машино-мест с лифтом и кладовыми",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Консьерж-сервис",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Пинакотека",
        value: true,
        description: "Авторское лобби с пинакотекой",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Приватный двор",
        value: true,
        description: "Закрытый двор-патио с ландшафтным садом",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Современная архитектура",
        description: "Панорамные окна",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Эксклюзивные квартиры",
        description: "Мансардные, двухуровневые и с террасами",
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Зелёная зона",
        description: "Закрытый двор-патио с ландшафтным садом, зоной отдыха, детской и work-территорией с Wi-Fi",
      },
    ],
  }

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ЖК Коллекционер",
    description: "Клубный дом «Коллекционер» в Петроградском районе Санкт-Петербурга",
    address: {
      "@type": "PostalAddress",
      streetAddress: "улица Чапыгина 4",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Санкт-Петербург",
      addressCountry: "RU",
    },
    url: "https://kollektsioner-dom.ru",
    telephone: "+7 (812) 660-56-50",
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://kollektsioner-dom.ru",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Квартиры",
        item: "https://kollektsioner-dom.ru#apartments",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Локация",
        item: "https://kollektsioner-dom.ru#location",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Новости",
        item: "https://kollektsioner-dom.ru/news",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Контакты",
        item: "https://kollektsioner-dom.ru#contacts",
      },
    ],
  }

  return (
    <html lang="ru" className={`${inter.variable} ${historyPro.variable} ${ceraPro.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(apartmentComplexJsonLd) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </head>
      <body className="overflow-x-hidden">
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
            ym(56852935, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/56852935" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
