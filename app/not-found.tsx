import NotFoundClient from "./not-found-client"

export const metadata = {
  title: "Страница не найдена — ЖК «Коллекционер»",
  description: "Запрашиваемая страница не найдена. Вернитесь на главную страницу ЖК «Коллекционер».",
  robots: "noindex, nofollow",
}

export default function NotFound() {
  return <NotFoundClient />
}
