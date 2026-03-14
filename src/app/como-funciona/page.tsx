import Link from "next/link";

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <main className="px-4 pt-28 pb-24 sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Cabecera */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Cómo funciona
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">
              Crear tu pack personalizado es sencillo. En menos de 24 horas
              tendrás un presupuesto sin compromiso. Sin sorpresas, sin letra
              pequeña.
            </p>
          </div>

          {/* Los 3 pasos (ampliados) */}
          <div className="mt-20 space-y-20">
            <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">
                  Selecciona tu pack
                </h2>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Elige entre nuestras categorías: escuela de verano, guardería,
                  campus deportivo o club infantil. Cada pack incluye productos
                  adaptados a la edad y necesidades de tu grupo. Puedes combinar
                  camisetas técnicas, mochilas, botellas, babis, gorras y más.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Indica el número aproximado de participantes y te mostraremos
                  el precio por niño. Los descuentos aumentan con el volumen: a
                  más unidades, mejor precio.
                </p>
                <Link
                  href="/packs"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                >
                  Ver todos los packs
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </section>

            <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                2
              </div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">
                  Personaliza con tu logo
                </h2>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Sube tu logo o diseño en alta resolución. Aceptamos formatos
                  estándar (PNG, JPG, PDF, SVG) y te ayudamos si tienes dudas. Nuestro equipo revisa cada diseño para asegurar la mejor impresión o bordado.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Puedes elegir colores, posición del logo y texto personalizado.
                  Si lo necesitas, te ofrecemos soporte de diseño sin coste
                  adicional para ajustar tu marca al producto.
                </p>
                <ul className="mt-4 space-y-2 text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    Bordado premium para textil
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    Serigrafía de alta calidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    Transfer térmico para detalles
                  </li>
                </ul>
              </div>
            </section>

            <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                3
              </div>
              <div>
                <h2 className="text-2xl font-bold text-stone-900">
                  Recibe tu pedido
                </h2>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Una vez confirmes el presupuesto y el diseño, producimos tu pedido. Plazos típicos de 7-15 días laborables según volumen. Te enviamos la fecha de entrega estimada desde el principio.
                </p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  Entregamos en tu escuela, club o sede. Empaquetamos con cuidado
                  y puedes solicitar envíos parciales si lo necesitas para
                  eventos por fechas.
                </p>
                <div className="mt-6 rounded-xl bg-stone-50 p-6">
                  <h3 className="font-semibold text-stone-900">
                    ¿Qué incluye el precio?
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    Los precios indican «desde X€/niño» e incluyen producto,
                    personalización con tu logo y transporte dentro de la
                    península. Sin cargos ocultos.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Resumen rápido */}
          <div className="mt-24 rounded-2xl border border-stone-200 bg-stone-50/50 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-stone-900">
              Resumen en 3 líneas
            </h2>
            <ol className="mt-6 space-y-4 text-stone-700">
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600">1.</span>
                Elige pack y cantidad → recibe presupuesto en menos de 24h.
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600">2.</span>
                Sube tu logo → nosotros nos encargamos del resto.
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600">3.</span>
                Recibe en tu centro en el plazo acordado.
              </li>
            </ol>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-blue-700"
            >
              Solicitar presupuesto
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-stone-600">
              ¿Tienes dudas? Escríbenos a{" "}
              <a
                href="mailto:hola@creewe.es"
                className="font-medium text-blue-600 hover:underline"
              >
                hola@creewe.es
              </a>{" "}
              o llámanos al{" "}
              <a
                href="tel:+34655737973"
                className="font-medium text-blue-600 hover:underline"
              >
                655 737 973
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
