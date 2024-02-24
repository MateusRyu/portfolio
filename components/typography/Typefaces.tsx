import { VT323, Press_Start_2P } from "next/font/google";

export const Primary = Press_Start_2P({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  display: "auto",
  variable: "--font-primary",
});

export const Secondary = VT323({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  display: "auto",
  variable: "--font-secondary",
});
