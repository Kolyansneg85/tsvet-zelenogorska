"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X } from "lucide-react"

const navigation = [
  { name: "О доме", href: "#about" },
  { name: "Планировки", href: "#apartments" },
  { name: "Локация", href: "#location" },
  { name: "Галерея", href: "#gallery" },
  { name: "Новости", href: "/news" },
  { name: "Контакты", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Закрываем мобильное меню при клике на якорную ссылку
    const handleHashChange = () => {
      setIsMobileMenuOpen(false)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const openChat = () => {
    const chatButton = document.querySelector("[data-chat-widget-button]") as HTMLButtonElement
    if (chatButton) {
      chatButton.click()
    }
  }

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Custom Domfy Logo */}
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-lg font-cera-pro">
                  D<span className="text-[#a8996e]">o</span>
                  mfy<span className="text-[#a8996e]">.</span>ru
                </div>
                <div className="text-[6px] lg:text-[7px] text-white/60 font-extralight tracking-[0.15em] uppercase drop-shadow-sm -mt-0.5 font-cera-pro">
                  Агентство недвижимости
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#a8996e] transition-colors duration-200 font-light tracking-wide drop-shadow-md font-cera-pro"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+78126605650"
                className="text-white hover:text-[#a8996e] transition-colors duration-200 font-light tracking-wide drop-shadow-md font-cera-pro"
              >
                7 812 660 56 50
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {/* Messenger Button */}
                <Button
                  onClick={openChat}
                  className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors lg:hidden"
                >
                  <MessageCircle className="w-[18px] h-[18px]" />
                </Button>

                {/* Phone Button */}
                <Button
                  asChild
                  className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white px-6 py-3 rounded-[22px] font-light tracking-wide transition-colors lg:hidden"
                >
                  <a href="tel:+78126605650">
                    <svg
                      className="w-[18px] h-[18px]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Button>
              </div>

              {/* Hamburger Menu Button for Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
