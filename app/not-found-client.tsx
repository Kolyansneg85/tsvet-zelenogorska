"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

const Header = dynamic(() => import("@/components/header"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })

export default function NotFoundClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center py-20">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-[#a8996e] opacity-20 leading-none">404</h1>
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Страница не найдена</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                К сожалению, запрашиваемая страница не существует или была перемещена.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-8 py-4 rounded-[22px] transition-all hover:scale-[1.02]"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  На главную
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white px-8 py-4 rounded-[22px] transition-all hover:scale-[1.02] bg-transparent"
              >
                <Link href="/news" className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />К новостям
                </Link>
              </Button>
            </div>

            <div className="mt-16 p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Дом «Коллекционер»</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#apartments" className="text-[#a8996e] hover:text-[#9d8f5f] transition-colors font-medium">
                  Планировки
                </Link>
                <Link href="/#gallery" className="text-[#a8996e] hover:text-[#9d8f5f] transition-colors font-medium">
                  Галерея
                </Link>
                <Link href="/#contact" className="text-[#a8996e] hover:text-[#9d8f5f] transition-colors font-medium">
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
