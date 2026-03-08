"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";

const PACKS = [
  {
    id: "completo",
    title: "Pack Completo",
    category: "campus-deportivo",
    categoryLabel: "Campus deportivo",
    price: "18.9",
    description: "Todo lo necesario para el campus: camiseta, mochila y botella",
    items: ["Camiseta técnica", "Mochila", "Botella"],
    minUnits: 15,
    image: "/pack completo.jpg",
    imageColor: null,
  },
  {
    id: "guarderia",
    title: "Pack Guardería",
    category: "guarderia",
    categoryLabel: "Guardería",
    price: "14.9",
    description: "Diseñado especialmente para los más pequeños",
    items: ["Babi", "Mochila infantil"],
    minUnits: 15,
    image: "/pack guarderia.jpg",
    imageColor: null,
  },
  {
    id: "premium",
    title: "Pack Premium",
    category: "club-infantil",
    categoryLabel: "Club infantil",
    price: "24.5",
    description: "Pack completo con extras premium para tu club",
    items: ["Camiseta", "Mochila", "Botella"],
    minUnits: 10,
    image: "/pack premium.jpg",
    imageColor: null,
  },
  {
    id: "esencial",
    title: "Pack Esencial",
    category: "escuela-de-verano",
    categoryLabel: "Escuela de verano",
    price: "12.5",
    description: "Lo básico para empezar: camiseta + mochila personalizados",
    items: ["Camiseta", "Mochila"],
    minUnits: 20,
    image: "/pack esencial.jpg",
    imageColor: null,
  },
];

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "escuela-de-verano", label: "Escuela de verano" },
  { id: "guarderia", label: "Guardería" },
  { id: "campus-deportivo", label: "Campus deportivo" },
  { id: "club-infantil", label: "Club infantil" },
];

function PacksContent() {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") || "todos";

  const filteredPacks = useMemo(() => {
    if (categoria === "todos") return PACKS;
    return PACKS.filter((p) => p.category === categoria);
  }, [categoria]);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <main className="px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filtros */}
          <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-6">
            {FILTERS.map((filter) => {
              const isActive = categoria === filter.id;
              const href = filter.id === "todos" ? "/packs" : `/packs?categoria=${filter.id}`;
              const FilterIcon = () => {
                if (filter.id === "todos")
                  return (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  );
                if (filter.id === "escuela-de-verano")
                  return (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                    </svg>
                  );
                if (filter.id === "guarderia")
                  return (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  );
                if (filter.id === "campus-deportivo")
                  return (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  );
                if (filter.id === "club-infantil")
                  return (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  );
                return null;
              };
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
                  <FilterIcon />
                </Link>
              );
            })}
          </div>

          {/* Grid de packs */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPacks.map((pack) => (
              <article
                key={pack.id}
                className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {pack.image ? (
                    <Image
                      src={pack.image}
                      alt={pack.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={`h-full w-full ${pack.imageColor} flex items-center justify-center`}
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
                  <span className="absolute left-3 top-3 rounded-lg bg-stone-800 px-2.5 py-1 text-xs font-medium text-white">
                    {pack.categoryLabel}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-lg bg-stone-800 px-2.5 py-1 text-xs font-medium text-white">
                    Desde {pack.price}€/niño
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-stone-900">{pack.title}</h2>
                  <p className="mt-2 text-sm text-stone-600">{pack.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {pack.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-stone-500">
                    Mínimo {pack.minUnits} unidades
                  </p>

                  <div className="mt-4 flex gap-3">
                    <Link
                      href={`/packs/${pack.id}`}
                      className="flex-1 rounded-lg border border-stone-300 px-4 py-2.5 text-center text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
                    >
                      Ver pack
                    </Link>
                    <Link
                      href={`/contacto?pack=${pack.id}`}
                      className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Configurar
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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

export default function PacksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
      <PacksContent />
    </Suspense>
  );
}
