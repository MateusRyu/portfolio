import { VT323, Press_Start_2P } from "next/font/google";

export const Body = Press_Start_2P({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  display: "auto",
  variable: "--font-body",
});

export const Heading = VT323({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  display: "auto",
  variable: "--font-heading",
});
