import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Creewe",
  description:
    "¿Tienes preguntas sobre packs personalizados? Contacta con nosotros. Respuesta en menos de 24 horas.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
