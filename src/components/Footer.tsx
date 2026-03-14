import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-indigo-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand y contacto */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">
              CREEWE
            </h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Especialistas en packs y artículos promocionales personalizados para
              escuelas de verano, guarderías, campus y clubs deportivos infantiles.
            </p>
            <ul className="space-y-3 text-sm text-white">
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-stone-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                655 737 973
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-stone-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hola@creewe.es
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-stone-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Lun - Vie: 9:00 - 18:00
              </li>
            </ul>
            <a
              href="https://wa.me/34655737973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#20bd5a]"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Packs */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Packs
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/packs?categoria=escuela-de-verano"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  Escuela de verano
                </Link>
              </li>
              <li>
                <Link
                  href="/packs?categoria=guarderia"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  Guardería
                </Link>
              </li>
              <li>
                <Link
                  href="/packs?categoria=campus-deportivo"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  Campus deportivo
                </Link>
              </li>
              <li>
                <Link
                  href="/packs?categoria=club-infantil"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  Club infantil
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Empresa
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/como-funciona"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  Casos reales
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="text-sm text-stone-300 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Presupuesto rápido */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Presupuesto rápido
            </h4>
            <p className="text-sm leading-relaxed text-stone-400">
              Configura tu pack y recibe un presupuesto sin compromiso en menos de
              24h.
            </p>
            <Link
              href="/packs"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Crear mi pack
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        <p className="mt-16 border-t border-indigo-900/50 pt-8 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Creewe. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
