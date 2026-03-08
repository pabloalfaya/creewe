import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | Creewe",
  description: "Descubre nuestros productos personalizables: textil, bolsas, hidratación, accesorios. Todo para tu escuela, guardería o club.",
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
