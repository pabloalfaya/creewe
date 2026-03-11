"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const PACK_CATEGORIES = [
  { id: "todos", label: "Todos los packs creados", href: "/packs" },
  { id: "escuela-de-verano", label: "Escuela de verano", href: "/packs?categoria=escuela-de-verano" },
  { id: "guarderia", label: "Guardería", href: "/packs?categoria=guarderia" },
  { id: "campus-deportivo", label: "Campus deportivo", href: "/packs?categoria=campus-deportivo" },
  { id: "club-infantil", label: "Club infantil", href: "/packs?categoria=club-infantil" },
];

export default function Header() {
  const [isPacksOpen, setIsPacksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPacksOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-blue-600"
        >
          CREWEE
        </Link>
        <nav className="hidden gap-8 md:flex">
          {/* Packs dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsPacksOpen(true)}
            onMouseLeave={() => setIsPacksOpen(false)}
          >
            <Link
              href="/packs"
              className="flex items-center gap-1 text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
            >
              Packs
              <svg
                className={`h-4 w-4 transition-transform ${isPacksOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {isPacksOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[220px] rounded-lg border border-stone-200 bg-white py-2 shadow-lg">
                  {PACK_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.href}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-stone-50 ${
                        pathname === "/packs" ? "text-stone-900" : "text-stone-700"
                      }`}
                    >
                      {cat.label}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-stone-100" />
                  <Link
                    href="/crear-mi-pack"
                    className="block px-4 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-stone-50 hover:text-blue-700"
                  >
                    Crear mi pack personalizado
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/productos"
            className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
          >
            Productos
          </Link>
          <Link
            href="/como-funciona"
            className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
          >
            Cómo funciona
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
          >
            Contacto
          </Link>
        </nav>
        <Link
          href="/crear-mi-pack"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Crear mi pack
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <nav className="flex gap-4 md:hidden">
          <Link href="/packs" className="text-sm font-medium text-stone-600">
            Packs
          </Link>
          <Link href="/productos" className="text-sm font-medium text-stone-600">
            Productos
          </Link>
          <Link href="/crear-mi-pack" className="text-sm font-medium text-blue-600">
            Crear mi pack
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-stone-600">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
