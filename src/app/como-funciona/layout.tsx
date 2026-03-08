import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo funciona | Creewe",
  description: "Descubre cómo crear tu pack personalizado en 3 simples pasos. Diseño fácil, presupuesto en 24h y entrega garantizada.",
};

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
