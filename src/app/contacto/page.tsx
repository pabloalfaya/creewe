import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Creewe",
  description: "¿Tienes preguntas sobre packs personalizados? Nuestro equipo te ayuda a crear el pack perfecto para tu escuela o club.",
};

export default function ContactoPage() {
  return (
    <div
      className="min-h-screen bg-stone-50/80 text-stone-900"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    >
      <main className="px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Cabecera */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ponte en{" "}
              <span className="text-blue-600">contacto</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              ¿Tienes preguntas sobre nuestros packs personalizados? Nuestro
              equipo te ayuda a crear el pack perfecto para tu escuela o club.
            </p>
          </div>

          {/* Correo de contacto */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-white p-8 shadow-lg shadow-stone-200/50 sm:p-10 md:p-12">
            <p className="text-center text-stone-600">
              Escríbenos a nuestro correo y te responderemos lo antes posible.
            </p>
            <a
              href="mailto:hola@crewee.es"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50/80 px-6 py-4 text-base font-medium text-stone-800 shadow-sm transition-colors hover:bg-stone-100"
            >
              <svg
                className="h-5 w-5 text-stone-500"
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
              hola@crewee.es
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
