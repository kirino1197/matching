import "@/assets/scss/style.scss";

export const metadata = {
  title: "너 내 겜친이 되어라!",
  description: "원하는 유형의 사람들과 재밌고 즐거운 게임 플레이!, 유저들과 대화를 할 수 있는 커뮤니티 공간까지!",
  keywords: ["게임같이할사람 , 게임매칭사이트, 게임"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.ico" />
      <body>{children}</body>
    </html>
  )
}
