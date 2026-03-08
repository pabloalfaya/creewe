"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";

const PRODUCTS = [
  {
    id: "pulsera",
    title: "Pulsera",
    category: "accesorios",
    categoryLabel: "Accesorios",
    categoryColor: "bg-amber-500",
    price: "2.5",
    description: "Pulsera de identificación personalizada",
    image: "/pulsera.jpg",
    placeholderColor: "bg-amber-100",
  },
  {
    id: "botella",
    title: "Botella",
    category: "hidratacion",
    categoryLabel: "Hidratación",
    categoryColor: "bg-sky-500",
    price: "6.5",
    description: "Botella de aluminio de 500ml, libre de BPA",
    image: "/botella.jpg",
    placeholderColor: "bg-sky-50",
  },
  {
    id: "gorra",
    title: "Gorra",
    category: "accesorios",
    categoryLabel: "Accesorios",
    categoryColor: "bg-amber-500",
    price: "7.5",
    description: "Gorra ajustable con protección UV",
    image: "/gorra.jpg",
    placeholderColor: "bg-stone-100",
  },
  {
    id: "camiseta",
    title: "Camiseta",
    category: "textil",
    categoryLabel: "Textil",
    categoryColor: "bg-blue-600",
    price: "8.5",
    description: "Camiseta de algodón 100% personalizable con logo y nombre",
    image: "/camiseta.jpg",
    placeholderColor: "bg-blue-50",
  },
  {
    id: "mochila",
    title: "Mochila",
    category: "bolsas",
    categoryLabel: "Bolsas",
    categoryColor: "bg-violet-500",
    price: "12.9",
    description: "Mochila resistente con compartimentos, perfecta para el día a día",
    image: "/mochila.jpg",
    placeholderColor: "bg-violet-50",
  },
  {
    id: "toalla",
    title: "Toalla",
    category: "textil",
    categoryLabel: "Textil",
    categoryColor: "bg-blue-600",
    price: "9.9",
    description: "Toalla de microfibra de secado rápido",
    image: "/toalla.jpg",
    placeholderColor: "bg-blue-50",
  },
  {
    id: "babi",
    title: "Babi",
    category: "textil",
    categoryLabel: "Textil",
    categoryColor: "bg-blue-600",
    price: "11.9",
    description: "Babi infantil lavable y personalizable",
    image: "/babi.jpg",
    placeholderColor: "bg-rose-50",
  },
  {
    id: "bolsa",
    title: "Bolsa",
    category: "bolsas",
    categoryLabel: "Bolsas",
    categoryColor: "bg-violet-500",
    price: "5.5",
    description: "Bolsa de tela ecológica para guardar y transportar",
    image: "/bolsa.jpg",
    placeholderColor: "bg-violet-50",
  },
  {
    id: "cuaderno",
    title: "Cuaderno",
    category: "extras",
    categoryLabel: "Extras",
    categoryColor: "bg-stone-600",
    price: "4.5",
    description: "Cuaderno personalizado con portada a tu medida",
    image: "/cuaderno.jpg",
    placeholderColor: "bg-stone-100",
  },
];

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "textil", label: "Textil" },
  { id: "bolsas", label: "Bolsas" },
  { id: "hidratacion", label: "Hidratación" },
  { id: "accesorios", label: "Accesorios" },
  { id: "extras", label: "Extras" },
];

const FILTER_ICONS: Record<string, React.ReactNode> = {
  todos: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  ),
  textil: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10M7 21V7l5-5 5 5v14M7 21h10" />
    </svg>
  ),
  bolsas: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  hidratacion: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  accesorios: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  extras: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
};

function ProductosContent() {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") || "todos";

  const filteredProducts = useMemo(() => {
    if (categoria === "todos") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === categoria);
  }, [categoria]);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <main className="px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-6">
            {FILTERS.map((filter) => {
              const isActive = categoria === filter.id;
              const href = filter.id === "todos" ? "/productos" : `/productos?categoria=${filter.id}`;
              return (
                <Link
                  key={filter.id}
                  href={href}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-stone-800 text-white [&_svg]:text-stone-300"
                      : "bg-stone-100 text-stone-700 [&_svg]:text-stone-500 hover:bg-stone-200"
                  }`}
                >
                  {filter.label}
                  {FILTER_ICONS[filter.id]}
                </Link>
              );
            })}
          </div>

          {/* Grid de productos */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden bg-stone-50">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center ${product.placeholderColor}`}
                    >
                      <svg
                        className="h-20 w-20 text-stone-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  <span
                    className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-medium text-white ${product.categoryColor}`}
                  >
                    {product.categoryLabel}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-stone-900">{product.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm text-stone-600">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-stone-900">
                      {product.price} €/ud
                    </span>
                    <Link
                      href={`/contacto?producto=${product.id}`}
                      className="rounded-lg border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100"
                    >
                      Añadir
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
      <ProductosContent />
    </Suspense>
  );
}
