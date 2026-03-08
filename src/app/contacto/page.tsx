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

          {/* Formulario */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-stone-200/50 sm:p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="nombre"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-600"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    placeholder="María García"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3.5 text-stone-900 placeholder-stone-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-600"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="maria@escuela.es"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3.5 text-stone-900 placeholder-stone-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="mensaje"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-600"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto, número de participantes o el tipo de pack que necesitas..."
                  className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3.5 text-stone-900 placeholder-stone-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-md shadow-blue-600/25 transition-colors hover:bg-blue-700 sm:w-auto sm:px-8"
              >
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Alternativa email */}
          <div className="mt-10 text-center">
            <p className="text-sm text-stone-500">¿Prefieres email?</p>
            <a
              href="mailto:hola@crewee.es"
              className="mt-3 inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-3.5 text-sm font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50"
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
