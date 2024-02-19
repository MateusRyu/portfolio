import "./globals.css";
import type { Metadata } from "next";
import { Primary, Secondary } from "@/components/typography/Typefaces";
import MainNavbar from "@/components/navbar/Header";
import MainFooter from "@/components/footer/MainFooter";

const navItems = [
  {
    label: "Página inicial",
    link: "/",
  },
  {
    label: "Aprendizado",
    link: "/aprendizado",
  },
  {
    label: "Projetos",
    link: "/projetos",
  },
  {
    label: "Sobre",
    link: "/sobre",
  },
  {
    label: "Contato",
    link: "Contato",
  },
];

export const metadata: Metadata = {
  title: "Portfólio do Ryu",
  description:
    "Ryu é um desenvolvedor Full-Stack ansioso para solucionar problemas!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="synthwave">
      <body
        className={`flex flex-col ${Primary.variable} ${Secondary.variable}`}
      >
        <MainNavbar brandName="Ryu" navItems={navItems} />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
