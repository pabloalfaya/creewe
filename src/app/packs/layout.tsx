import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packs | Creewe",
  description: "Descubre nuestros packs personalizados para escuelas de verano, guarderías, campus deportivos y clubs infantiles.",
};

export default function PacksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
