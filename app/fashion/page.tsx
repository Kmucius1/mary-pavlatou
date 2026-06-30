import type { Metadata } from "next";
import FashionWorldClient from "@/components/FashionWorldClient";

export const metadata: Metadata = {
  title: "Fashion World — Mary Pavlatou Memorial Archive",
  description:
    "Mary Pavlatou's world of haute couture — Christian Dior, Givenchy, Jacques Fath, Pierre Balmain, Nina Ricci, and the golden era of Parisian fashion in postwar Athens.",
};

export default function FashionPage() {
  return <FashionWorldClient />;
}
