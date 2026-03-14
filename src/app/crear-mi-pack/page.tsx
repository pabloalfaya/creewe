"use client";

import Image from "next/image";
import { useState } from "react";
import { jsPDF } from "jspdf";

type Product = {
  id: string;
  name: string;
  image?: string;
};

type PackItem = {
  id: string;
  name: string;
  quantity: number;
  image?: string;
};

const PRODUCTS: Product[] = [
  { id: "gorra", name: "Gorra", image: "/gorra.jpg" },
  { id: "camiseta", name: "Camiseta", image: "/camiseta.jpg" },
  { id: "mochila", name: "Mochila", image: "/mochila.jpg" },
  { id: "botella", name: "Botella", image: "/botella.jpg" },
  { id: "pulsera", name: "Pulsera", image: "/pulsera.jpg" },
  { id: "toalla", name: "Toalla", image: "/toalla.jpg" },
  { id: "babi", name: "Babi", image: "/babi.jpg" },
  { id: "bolsa", name: "Bolsa", image: "/bolsa.jpg" },
  { id: "cuaderno", name: "Cuaderno", image: "/cuaderno.jpg" },
];

export default function CrearMiPackPage() {
  const [items, setItems] = useState<PackItem[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [packsCount, setPacksCount] = useState<number>(1);
  const [showSummary, setShowSummary] = useState(false);
  const [userData, setUserData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    direccion: "",
  });

  const handleExportPDF = async () => {
    const pdf = new jsPDF({ format: "a4", unit: "mm" });
    const pageW = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let y = 15;

    // Header azul
    pdf.setFillColor(37, 99, 235); // blue-600
    pdf.rect(0, 0, pageW, 35, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(22);
    pdf.setFont("helvetica", "bold");
    pdf.text("CREEWE", margin, 18);
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "normal");
    pdf.text("Certificado de resumen del pack", margin, 27);
    y = 45;

    pdf.setTextColor(51, 65, 85);

    // Datos del cliente (caja con fondo)
    if (userData.nombre || userData.telefono || userData.correo || userData.direccion) {
      pdf.setFillColor(241, 245, 249);
      pdf.rect(margin, y - 3, pageW - margin * 2, 38, "F");
      pdf.setDrawColor(226, 232, 240);
      pdf.rect(margin, y - 3, pageW - margin * 2, 38, "S");
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "bold");
      pdf.text("Datos de contacto", margin + 5, y + 6);
      pdf.setFont("helvetica", "normal");
      const line1 = [userData.nombre && `Nombre: ${userData.nombre}`, userData.telefono && `Teléfono: ${userData.telefono}`].filter(Boolean).join("  |  ");
      const line2 = [userData.correo && `Correo: ${userData.correo}`].filter(Boolean).join("");
      const line3 = [userData.direccion && `Dirección: ${userData.direccion}`].filter(Boolean).join("");
      if (line1) pdf.text(line1, margin + 5, y + 14);
      if (line2) pdf.text(line2, margin + 5, y + 21);
      if (line3) pdf.text(line3, margin + 5, y + 28);
      y += 42;
    }

    // Productos
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.text("Productos por pack", margin, y);
    y += 10;

    pdf.setFillColor(236, 253, 245); // emerald-50
    pdf.rect(margin, y - 5, pageW - margin * 2, 8 + items.length * 8, "F");
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    items.forEach((item) => {
      pdf.text(`• ${item.name}: ${item.quantity} unidad${item.quantity !== 1 ? "es" : ""}`, margin + 5, y + 3);
      y += 8;
    });
    y += 12;

    // Totales
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Totales", margin, y);
    y += 8;

    pdf.setFillColor(236, 253, 245);
    pdf.rect(margin, y - 5, pageW - margin * 2, 32, "F");
    pdf.setFont("helvetica", "normal");
    pdf.text(`Nº de packs: ${packsCount}`, margin + 5, y + 5);
    pdf.text(`Unidades por pack: ${totalUnitsPerPack}`, margin + 5, y + 13);
    pdf.setFont("helvetica", "bold");
    pdf.setDrawColor(16, 185, 129);
    pdf.setLineWidth(0.5);
    pdf.line(margin + 5, y + 18, pageW - margin - 5, y + 18);
    pdf.text(`Unidades totales del pedido: ${totalUnitsAllPacks}`, margin + 5, y + 26);

    // Footer
    pdf.setTextColor(148, 163, 184);
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.text("Documento generado en creewe.es — Contacto: hola@creewe.es", margin, 285);

    const pdfBase64 = pdf.output("datauristring").split(",")[1];
    pdf.save("resumen-pack-creewe.pdf");

    try {
      await fetch("/api/enviar-pack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pdfBase64,
          userData,
          items,
          packsCount,
          totalUnitsPerPack,
          totalUnitsAllPacks,
        }),
      });
    } catch {
      // La descarga ya funcionó; el envío es en segundo plano
    }
  };

  const handleAdd = (product: Product) => {
    const qty = quantities[product.id] ?? 1;
    if (qty <= 0) return;

    setItems((current) => {
      const existing = current.find((i) => i.id === product.id);
      if (!existing) {
        return [
          ...current,
          { id: product.id, name: product.name, quantity: qty, image: product.image },
        ];
      }
      return current.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + qty } : i,
      );
    });
  };

  const handleQuantityChange = (productId: string, value: string) => {
    const parsed = parseInt(value, 10);
    if (Number.isNaN(parsed)) {
      setQuantities((q) => ({ ...q, [productId]: 0 }));
    } else {
      setQuantities((q) => ({ ...q, [productId]: Math.max(0, parsed) }));
    }
  };

  const handleRemove = (productId: string) => {
    setItems((current) => current.filter((i) => i.id !== productId));
  };

  const handleSave = () => {
    if (items.length === 0) return;
    setShowSummary(true);
  };

  const totalUnitsPerPack = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalUnitsAllPacks = totalUnitsPerPack * packsCount;

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <main className="px-4 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
          <section className="flex-1">
            <h1 className="text-3xl font-bold sm:text-4xl">Crear mi pack</h1>
            <p className="mt-3 max-w-xl text-sm text-stone-600 sm:text-base">
              Elige los productos que quieres que lleve cada pack. Puedes añadir varias
              unidades de cada producto (por ejemplo, 2 camisetas y 1 gorra por niño).
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-stone-200 bg-stone-50/50 p-4 sm:p-6">
              <h2 className="text-sm font-semibold text-stone-800 sm:text-base">
                Productos disponibles
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {PRODUCTS.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-3 shadow-sm ring-1 ring-stone-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-stone-100">
                        {product.image && (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <p className="text-sm font-medium text-stone-900">{product.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={1}
                        value={quantities[product.id] ?? 1}
                        onChange={(e) =>
                          handleQuantityChange(product.id, e.target.value)
                        }
                        className="h-9 w-16 rounded-lg border border-stone-300 px-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => handleAdd(product)}
                        className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Añadir al pack
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full max-w-md space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-stone-900">Tus datos</h2>
              <p className="mt-1 text-xs text-stone-600">
                Estos datos aparecerán en el PDF del resumen.
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-medium text-stone-700">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    value={userData.nombre}
                    onChange={(e) =>
                      setUserData((d) => ({ ...d, nombre: e.target.value }))
                    }
                    placeholder="Tu nombre o empresa"
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-xs font-medium text-stone-700">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    value={userData.telefono}
                    onChange={(e) =>
                      setUserData((d) => ({ ...d, telefono: e.target.value }))
                    }
                    placeholder="600 123 456"
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="correo" className="block text-xs font-medium text-stone-700">
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    type="email"
                    value={userData.correo}
                    onChange={(e) =>
                      setUserData((d) => ({ ...d, correo: e.target.value }))
                    }
                    placeholder="correo@ejemplo.es"
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="direccion" className="block text-xs font-medium text-stone-700">
                    Dirección
                  </label>
                  <input
                    id="direccion"
                    type="text"
                    value={userData.direccion}
                    onChange={(e) =>
                      setUserData((d) => ({ ...d, direccion: e.target.value }))
                    }
                    placeholder="Calle, número, CP, ciudad"
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-stone-900">Contenido del pack</h2>
            <p className="mt-1 text-xs text-stone-600 sm:text-sm">
              Esta lista representa lo que llevará cada pack individual.
            </p>

            {items.length === 0 ? (
              <p className="mt-4 text-sm text-stone-500">
                Todavía no has añadido ningún producto. Elige productos en la izquierda y
                añádelos al pack.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-stone-200"
                  >
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <div className="relative h-10 w-10 overflow-hidden rounded-md bg-stone-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <p className="font-medium text-stone-900">{item.name}</p>
                      <p className="text-xs text-stone-500">
                        {item.quantity} unidad{item.quantity !== 1 && "es"} por pack
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="text-xs font-medium text-stone-500 hover:text-red-500"
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 space-y-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-800">
                  Unidades por pack
                </span>
                <span className="text-sm font-semibold text-stone-900">
                  {totalUnitsPerPack}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <label
                    htmlFor="packs-count"
                    className="text-xs font-medium text-stone-700"
                  >
                    ¿Cuántos packs iguales quieres?
                  </label>
                  <p className="text-[11px] text-stone-500">
                    Cada pack llevará los mismos productos de la lista.
                  </p>
                </div>
                <input
                  id="packs-count"
                  type="number"
                  min={1}
                  value={packsCount}
                  onChange={(e) =>
                    setPacksCount(Math.max(1, parseInt(e.target.value || "1", 10)))
                  }
                  className="h-9 w-20 rounded-lg border border-stone-300 px-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between border-t border-stone-200 pt-3">
                <span className="text-sm font-medium text-stone-800">
                  Unidades totales
                </span>
                <span className="text-sm font-semibold text-stone-900">
                  {totalUnitsAllPacks}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
              disabled={items.length === 0}
              onClick={handleSave}
            >
              Guardar configuración del pack
            </button>
            </div>
          </section>
        </div>

        {showSummary && (
          <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-900">
              Certificado de resumen del pack
            </h2>
            <p className="mt-1 text-sm text-emerald-800">
              Este es el resumen de lo que llevará cada pack y del total para tu pedido.
            </p>

            <div className="mt-4 grid gap-6 lg:grid-cols-[2fr,1fr]">
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-emerald-100"
                  >
                    {item.image && (
                      <div className="relative h-10 w-10 overflow-hidden rounded-md bg-stone-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-stone-900">{item.name}</p>
                      <p className="text-xs text-stone-600">
                        {item.quantity} unidad{item.quantity !== 1 && "es"} por pack
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-700">
                    Nº de packs iguales
                  </span>
                  <span className="text-sm font-semibold text-stone-900">
                    {packsCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-stone-700">
                    Unidades por pack
                  </span>
                  <span className="text-sm font-semibold text-stone-900">
                    {totalUnitsPerPack}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-stone-200 pt-3">
                  <span className="text-sm font-medium text-stone-700">
                    Unidades totales del pedido
                  </span>
                  <span className="text-base font-semibold text-emerald-700">
                    {totalUnitsAllPacks}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleExportPDF}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-100 px-4 py-3 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-200"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Descargar PDF
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

