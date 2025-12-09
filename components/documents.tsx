"use client"

import { useState } from "react"
import { Download, ChevronDown, ChevronUp } from "lucide-react"

const documentsData = [
  {
    category: "РАЗРЕШЕНИЕ НА СТРОИТЕЛЬСТВО",
    documents: [
      {
        name: "Разрешение на строительство от 19.08.2025 г.",
        url: "#",
        date: "19.08.2025",
      },
    ],
  },
  {
    category: "ПРОЕКТНАЯ ДЕКЛАРАЦИЯ",
    documents: [
      {
        name: "Проектная декларация от 07.10.2025 г.",
        url: "https://6ce3ab7d-ca19-4563-89f5-bf0d195953bc.selstorage.ru/PD_Kollektsioner.pdf",
        date: "07.10.2025",
      },
    ],
  },
  {
    category: "ДОГОВОР УЧАСТИЯ В ДОЛЕВОМ СТРОИТЕЛЬСТВЕ",
    documents: [
      {
        name: "Образец договора долевого участия",
        url: "#",
        date: "01.08.2025",
      },
    ],
  },
  {
    category: "ЗАКЛЮЧЕНИЕ ЭКСПЕРТИЗЫ",
    documents: [
      {
        name: "Положительное заключение экспертизы проекта",
        url: "#",
        date: "10.07.2025",
      },
    ],
  },
]

export default function Documents() {
  const [openSections, setOpenSections] = useState<number[]>([])

  const toggleSection = (index: number) => {
    setOpenSections((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section id="documents" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-history-pro text-[#a8996e]">
            ДОКУМЕНТЫ КОЛЛЕКЦИОНЕР
          </h2>
          <div className="w-24 h-px bg-[#a8996e] mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Developer Info */}
          <div className="mb-8 text-gray-700">
            <p className="text-lg font-semibold mb-3">ООО «Специализированный застройщик «ЭРБИАЙ-3»</p>
            <p className="text-base leading-relaxed">
              Юридический адрес: 197110, Российская Федерация, Санкт-Петербург, вн.тер.г. Муниципальный округ
              Чкаловское, Барочная ул., д. 4а, строение 1, офис 3, помещение 303, Р.М. 1
            </p>
          </div>

          {/* Documents Sections */}
          <div className="space-y-1 border-t border-gray-200">
            {documentsData.map((section, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left py-6 hover:bg-gray-50 transition-colors flex justify-between items-center group"
                  aria-expanded={openSections.includes(index)}
                >
                  <h3 className="text-base md:text-lg font-medium text-[#a8996e] font-history-pro pr-4">
                    {section.category}
                  </h3>
                  <div className="flex-shrink-0">
                    {openSections.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-[#a8996e]" width={20} height={20} />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#a8996e]" width={20} height={20} />
                    )}
                  </div>
                </button>

                {openSections.includes(index) && (
                  <div className="pb-6 px-4">
                    <div className="space-y-3">
                      {section.documents.map((doc, docIndex) => (
                        <a
                          key={docIndex}
                          href={doc.url}
                          className="flex items-center gap-3 p-4 rounded-lg transition-colors group"
                          download
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a8996e]/10 flex items-center justify-center">
                            <Download className="h-5 w-5 text-[#a8996e]" width={20} height={20} />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium group-hover:text-[#a8996e] transition-colors">
                              {doc.name}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">от {doc.date}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Все документы предоставлены в соответствии с требованиями законодательства РФ о долевом строительстве</p>
          </div>
        </div>
      </div>
    </section>
  )
}
