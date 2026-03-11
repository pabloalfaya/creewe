import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50/80 text-stone-900">
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
                <Link
                  href="/crear-mi-pack"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Crear mi pack
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/packs"
                  className="inline-flex items-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-medium text-stone-700 transition-colors hover:bg-stone-50"
                >
                  Ver packs
                </Link>
              </div>
            </div>

            {/* Columna derecha - Imagen principal sin overlays */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-stone-200/50 shadow-lg">
                <Image
                  src="/fotoprincipal.jpg"
                  alt="Productos promocionales personalizados - packs para escuelas y clubs"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  priority
                />
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
                image="/fotoprincipal.jpg"
              />
              <PackCard
                title="Pack Club Infantil"
                description="Ropa y accesorios para equipos y actividades extraescolares."
                image="/pack club infantil.jpg"
              />
              <PackCard
                title="Pack Evento"
                description="Todo lo necesario para campamentos, colonias y salidas."
                image="/pack evento.jpg"
              />
            </div>
          </div>
        </section>
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
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg className="h-16 w-16 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
        <p className="mt-2 text-sm text-stone-600">{description}</p>
        <Link
          href="/crear-mi-pack"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Crear mi pack
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
