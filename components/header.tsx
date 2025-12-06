"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X, Phone } from "lucide-react"

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
    <>
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
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.09967 0C8.21901 0 8.33346 0.0474078 8.41785 0.131794C8.50223 0.216181 8.54964 0.330633 8.54964 0.449973C8.54964 0.569314 8.50223 0.683766 8.41785 0.768153C8.33346 0.852539 8.21901 0.899947 8.09967 0.899947C6.19085 0.902106 4.36083 1.66134 3.0111 3.01108C1.66136 4.36082 0.902125 6.19084 0.899965 8.09966C0.899965 8.219 0.852562 8.33346 0.768175 8.41784C0.683787 8.50224 0.569333 8.54965 0.44999 8.54965C0.330647 8.54965 0.216191 8.50224 0.131802 8.41785C0.0474129 8.33347 1.7163e-06 8.21901 0 8.09967C0.0024333 5.95225 0.856571 3.89348 2.37503 2.37503C3.89348 0.856571 5.95225 0.00243352 8.09967 0Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M4.14216 9.00098C4.14216 9.12032 4.09475 9.2348 4.01036 9.31913C3.92597 9.40355 3.81152 9.45098 3.69218 9.45098C3.57283 9.45098 3.45838 9.40355 3.37399 9.31913C3.2896 9.2348 3.24219 9.12032 3.24219 9.00098C3.24391 7.47392 3.85129 6.0099 4.93108 4.93011C6.01088 3.8503 7.4749 3.24293 9.00194 3.24121C9.12128 3.24121 9.23576 3.28862 9.32018 3.37301C9.40451 3.4574 9.45194 3.57185 9.45194 3.69119C9.45194 3.81053 9.40451 3.92499 9.32018 4.00938C9.23576 4.09376 9.12128 4.14117 9.00194 4.14117C7.7135 4.14264 6.47825 4.65512 5.56718 5.5662C4.65611 6.47727 4.14363 7.71253 4.14216 9.00098Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.349 6.2221C11.35 5.90315 11.4154 5.5877 11.5415 5.29473C11.6676 5.00176 11.8516 4.73734 12.0827 4.51738L14.0618 2.53823C14.3023 2.28177 14.5982 2.08349 14.9268 1.95844C15.2554 1.83339 15.6082 1.78486 15.9584 1.81654C16.1877 1.84202 16.4077 1.92116 16.6007 2.04755C16.7936 2.17392 16.9542 2.34399 17.0691 2.54396C17.8897 3.97833 18.1744 5.73085 17.8924 7.61206C17.5325 10.0092 16.2685 12.3968 14.3326 14.3356C12.3944 16.2709 10.0068 17.535 7.60959 17.8946C5.7284 18.1769 3.97589 17.8922 2.54126 17.0715C2.34135 16.9565 2.17134 16.796 2.045 16.603C1.91867 16.4101 1.83956 16.1901 1.8141 15.9609C1.78242 15.6107 1.83096 15.2579 1.95602 14.9292C2.08108 14.6005 2.27937 14.3047 2.53585 14.0642L4.51495 12.0851C4.73489 11.8541 4.9993 11.67 5.29225 11.544C5.58521 11.4179 5.90065 11.3523 6.21958 11.3514C6.43206 11.353 6.64194 11.3983 6.83616 11.4845C7.03038 11.5707 7.20479 11.696 7.34852 11.8524L8.53866 13.1817C10.5308 12.1555 12.1531 10.5332 13.1792 8.54113L11.8501 7.35116C11.6936 7.20742 11.5683 7.033 11.4822 6.83876C11.396 6.64451 11.3506 6.4346 11.349 6.2221ZM12.4503 6.68055L14.278 8.31696L14.1401 8.61837C13.5783 9.82648 12.8077 10.926 11.8638 11.8662C10.9235 12.8102 9.82404 13.5807 8.61592 14.1425L8.31451 14.2805L6.67792 12.4526C6.61533 12.3878 6.54018 12.3365 6.45706 12.3018C6.37396 12.2672 6.28463 12.2499 6.19459 12.251C5.99824 12.2566 5.80492 12.301 5.62584 12.3818C5.44677 12.4625 5.28548 12.578 5.15131 12.7215L3.17223 14.7005C3.01474 14.8443 2.89121 15.0213 2.8106 15.2187C2.72998 15.4161 2.6943 15.629 2.70614 15.8419C2.71359 15.9339 2.74313 16.0227 2.79226 16.1007C2.8414 16.1789 2.90865 16.2439 2.98833 16.2905C4.24535 17.0095 5.79719 17.2565 7.47604 17.0047C9.68445 16.6733 11.8937 15.4992 13.6963 13.6992C15.4968 11.896 16.6709 9.6868 17.0023 7.4785C17.254 5.79956 17.007 4.2478 16.2881 2.99102C16.2416 2.91128 16.1765 2.84396 16.0984 2.79477C16.0203 2.74559 15.9314 2.71599 15.8394 2.70851C15.6265 2.6967 15.4137 2.73239 15.2163 2.813C15.0189 2.8936 14.8634 2.9962 14.7472 3.1276C14.631 3.259 14.5499 3.41996 14.4974 3.59944C14.4449 3.77891 14.4266 3.96777 14.4449 4.14725C14.4632 4.32672 14.5106 4.50068 14.6144 4.64441C14.7182 4.78814 14.8792 4.90259 15.0686 4.95508C15.258 5.00757 15.4599 4.9999 15.6494 4.94741C15.8389 4.89492 16.0099 4.78726 16.1472 4.64441C16.2845 4.50156 16.4089 4.3276 16.4872 4.14725C16.5655 3.96689 16.5472 3.77803 16.4449 3.59944C16.3426 3.42085 16.2509 3.259 16.1347 3.1276C16.0185 2.9962 15.863 2.8936 15.7468 2.813C15.6306 2.73239 15.4751 2.6967 15.3056 2.7492C15.1361 2.8017 14.9906 2.95266 15.0331 3.13214C15.0756 3.31162 15.2266 3.43607 15.4061 3.48856C15.5856 3.54105 15.7744 3.53338 15.9539 3.48089C16.1334 3.4284 16.2843 3.31162 16.3268 3.13214C16.3693 2.95266 16.2238 2.8017 16.0543 2.7492C15.8848 2.6967 15.7293 2.73239 15.6131 2.813C15.4968 2.9962 15.3413 3.1276 15.2251 3.259C15.1089 3.3904 14.9912 3.55136 14.9387 3.73084C14.8862 3.91031 14.9336 4.09917 15.0374 4.2329C15.1412 4.36663 15.3022 4.48108 15.4817 4.53357C15.6612 4.58606 15.85 4.57839 16.0295 4.5259C16.209 4.47341 16.36 4.35663 16.4025 4.17705C16.445 3.99747 16.3976 3.80861 16.2714 3.67717C16.1452 3.54573 16.0285 3.42995 15.9441 3.34556C15.8597 3.26117 15.7453 3.21376 15.6259 3.24544C15.5065 3.27712 15.3921 3.35626 15.3077 3.44165C15.2233 3.52704 15.1759 3.64149 15.1759 3.76083C15.1759 3.88017 15.2233 3.99462 15.3077 4.07901C15.3921 4.1634 15.5065 4.24254 15.6259 4.27422C15.7453 4.3059 15.8597 4.35331 15.9441 4.4377C16.0285 4.52209 16.1452 4.60123 16.2714 4.68562C16.3976 4.77001 16.445 4.88446 16.4025 4.96885C16.36 4.98993 16.209 4.98226 15.9539 4.93357C15.6988 4.88488 15.4817 4.7681 15.3061 4.64441C15.1305 4.52072 14.975 4.35986 14.8588 4.17705C14.7426 3.99424 14.6582 3.78538 14.6582 3.5659Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  onClick={openChat}
                  variant="outline"
                  className="border-[#a8996e] text-[#a8996e] hover:bg-[#a8996e] hover:text-white transition-colors font-light tracking-wide bg-transparent"
                >
                  Написать
                </Button>
                <Button
                  asChild
                  className="bg-[#a8996e] hover:bg-[#9d8f5f] text-white transition-colors font-light tracking-wide"
                >
                  <a href="tel:+78126605650">Позвонить</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <nav className="fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-[#a8996e]/20">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-[#a8996e] transition-colors duration-200 font-light tracking-wide py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+78126605650"
                className="block text-white hover:text-[#a8996e] transition-colors duration-200 font-light tracking-wide py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-[16px] h-[16px] inline mr-2" />7 812 660 56 50
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
