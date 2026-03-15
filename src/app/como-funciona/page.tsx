import Link from "next/link";

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-stone-50/50 text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-200/60 bg-white">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
            Proceso sencillo
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-[2.75rem]">
            Cómo funciona
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            En tres pasos tendrás tu pack personalizado. Rellena los datos, nosotros nos
            encargamos del resto y nos pondremos en contacto contigo.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Paso 1 */}
        <section className="group relative">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Crea tu pack personalizado o elige uno de los que tenemos
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600">
                Puedes diseñar tu pack desde cero eligiendo cada producto y cantidad, o
                escoger uno de nuestros packs ya preparados para escuela de verano,
                guardería, campus o club infantil.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/crear-mi-pack"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Crear mi pack
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/packs"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
                >
                  Ver packs ya creados
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Línea conectora */}
        <div className="my-12 flex justify-center sm:my-16">
          <div className="h-12 w-px bg-gradient-to-b from-blue-200 to-stone-200" />
        </div>

        {/* Paso 2 */}
        <section className="group relative">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Rellena los datos que te pide
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600">
                Indica tu nombre, correo, teléfono y dirección. Con eso podemos
                preparar tu presupuesto y contactarte sin que tengas que repetir
                la información.
              </p>
              <div className="mt-6 rounded-xl border border-stone-200/80 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-stone-700">
                  Los datos aparecen en el resumen del pack y nos permiten enviarte
                  la oferta y resolver dudas de personalización.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Línea conectora */}
        <div className="my-12 flex justify-center sm:my-16">
          <div className="h-12 w-px bg-gradient-to-b from-blue-200 to-stone-200" />
        </div>

        {/* Paso 3 */}
        <section className="group relative">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
                Nosotros nos pondremos en contacto contigo
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600">
                Recibimos tu solicitud y te contactamos para la información sobre la
                personalización de tus productos: logo, colores, textos y plazos.
                Presupuesto sin compromiso y atención profesional.
              </p>
              <ul className="mt-5 space-y-3 text-stone-600">
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Respuesta en menos de 24 horas
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Asesoramiento en diseño y personalización
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Sin compromiso hasta que confirmes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-20 rounded-2xl border border-stone-200/80 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                ¿Listo para empezar?
              </h2>
              <p className="mt-2 text-stone-600">
                Crea tu pack o elige uno y te contactamos en menos de 24h.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:mt-0">
              <Link
                href="/crear-mi-pack"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Crear mi pack
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
              >
                Contactar
              </Link>
            </div>
          </div>
        </section>

        {/* Contacto sutil */}
        <p className="mt-12 text-center text-sm text-stone-500">
          ¿Dudas? Escríbenos a{" "}
          <a href="mailto:hola@creewe.es" className="font-medium text-blue-600 hover:underline">
            hola@creewe.es
          </a>
          {" "}o llámanos al{" "}
          <a href="tel:+34655737973" className="font-medium text-blue-600 hover:underline">
            655 737 973
          </a>
        </p>
      </main>
    </div>
  );
}
