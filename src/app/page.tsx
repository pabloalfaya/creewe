import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50/80 text-stone-900">
      {/* Header fijo - Original */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="text-xl font-bold tracking-tight text-blue-600"
          >
            CREWEE
          </a>
          <nav className="hidden gap-8 md:flex">
            <a
              href="#packs"
              className="flex items-center gap-1 text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
            >
              Packs
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#packs"
              className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
            >
              Productos
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
            >
              Cómo funciona
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
            >
              Casos reales
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
            >
              Contacto
            </a>
          </nav>
          <a
            href="#packs"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Crear mi pack
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          {/* Menú móvil */}
          <nav className="flex gap-4 md:hidden">
            <a href="#packs" className="text-sm font-medium text-stone-600">
              Packs
            </a>
            <a href="#contacto" className="text-sm font-medium text-stone-600">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero - Original: dos columnas */}
        <section
          id="inicio"
          className="px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Columna izquierda */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                </svg>
                Temporada 2026 abierta
              </span>

              <h1 className="text-4xl font-bold leading-tight text-stone-900 sm:text-5xl lg:text-5xl xl:text-6xl">
                Packs personalizados para{" "}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  escuelas de
                </span>{" "}
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  verano y clubs
                </span>{" "}
                infantiles
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                Camisetas, mochilas y accesorios personalizados con vuestro logo.
                Diseño fácil, descuentos por volumen y entrega garantizada.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#packs"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Crear mi pack
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#packs"
                  className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-medium text-stone-700 transition-colors hover:bg-stone-50"
                >
                  Ver packs
                </a>
              </div>
            </div>

            {/* Columna derecha - Imagen con overlays */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-stone-200/50 shadow-lg">
                <Image
                  src="/hero.png"
                  alt="Libros, manzana y lápices de colores - packs personalizados para escuelas"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  priority
                />
                {/* Overlay badge: +500 Escuelas */}
                <div className="absolute right-4 top-4 rounded-xl border border-emerald-200 bg-white/95 p-3 shadow-md backdrop-blur-sm sm:right-6 sm:top-6 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <svg
                        className="h-6 w-6 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-stone-800 sm:text-base">
                      +500 Escuelas confían en nosotros
                    </span>
                  </div>
                </div>
                {/* Overlay bubble: Presupuesto en 2 min */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-xl border border-violet-200 bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm sm:bottom-6">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-violet-400" />
                      <span className="h-2 w-2 rounded-full bg-violet-500" />
                      <span className="h-2 w-2 rounded-full bg-violet-400" />
                    </div>
                    <span className="text-sm font-medium text-stone-800">
                      Presupuesto en 2 min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section
          id="como-funciona"
          className="border-y border-stone-200/60 bg-white px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
              Cómo funciona
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
              Tres simples pasos para tu pack personalizado
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              <StepCard
                step={1}
                title="Selecciona"
                description="Elige el tipo de pack y productos. Camisetas, mochilas, accesorios."
              />
              <StepCard
                step={2}
                title="Personaliza"
                description="Sube tu logo y diseña. Proceso fácil con soporte si lo necesitas."
              />
              <StepCard
                step={3}
                title="Recibe"
                description="Entrega garantizada. Descuentos por volumen en pedidos grandes."
              />
            </div>
          </div>
        </section>

        {/* Packs / Productos */}
        <section
          id="packs"
          className="px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
              Nuestros Packs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
              Camisetas, mochilas y accesorios para escuelas y clubs
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <PackCard
                title="Pack Escuela de Verano"
                description="Camisetas, mochilas y gorras personalizadas con vuestro logo."
                placeholderColor="bg-blue-50"
              />
              <PackCard
                title="Pack Club Infantil"
                description="Ropa y accesorios para equipos y actividades extraescolares."
                placeholderColor="bg-violet-50"
              />
              <PackCard
                title="Pack Evento"
                description="Todo lo necesario para campamentos, colonias y salidas."
                placeholderColor="bg-emerald-50"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contacto"
          className="border-t border-stone-200 bg-stone-100 px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="text-lg font-bold text-blue-600">CREWEE</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Packs personalizados para escuelas de verano y clubs infantiles.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">Contacto</h4>
                <ul className="mt-4 space-y-2 text-sm text-stone-600">
                  <li>hola@creewe.com</li>
                  <li>+34 600 000 000</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">Redes</h4>
                <ul className="mt-4 flex gap-4">
                  <li>
                    <a href="#" className="text-stone-500 transition-colors hover:text-stone-800" aria-label="Instagram">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-stone-500 transition-colors hover:text-stone-800" aria-label="Pinterest">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">Legal</h4>
                <ul className="mt-4 space-y-2 text-sm text-stone-600">
                  <li>
                    <a href="#" className="transition-colors hover:text-stone-900">
                      Política de privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-stone-900">
                      Términos y condiciones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-12 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
              © {new Date().getFullYear()} Creewe. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-stone-50/50 p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
        {step}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-stone-900">{title}</h3>
      <p className="mt-2 text-stone-600">{description}</p>
    </div>
  );
}

function PackCard({
  title,
  description,
  placeholderColor,
}: {
  title: string;
  description: string;
  placeholderColor: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className={`aspect-[4/3] ${placeholderColor} flex items-center justify-center`}>
        <svg className="h-16 w-16 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
        <p className="mt-2 text-sm text-stone-600">{description}</p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Crear mi pack
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}
