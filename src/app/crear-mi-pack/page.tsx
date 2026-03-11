"use client";

import { useState } from "react";

type Product = {
  id: string;
  name: string;
};

type PackItem = {
  id: string;
  name: string;
  quantity: number;
};

const PRODUCTS: Product[] = [
  { id: "gorra", name: "Gorra" },
  { id: "camiseta", name: "Camiseta" },
  { id: "sudadera", name: "Sudadera" },
  { id: "mochila", name: "Mochila" },
  { id: "botella", name: "Botella" },
  { id: "bloc-notas", name: "Bloc de notas" },
  { id: "boligrafo", name: "Bolígrafo" },
];

export default function CrearMiPackPage() {
  const [items, setItems] = useState<PackItem[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [packsCount, setPacksCount] = useState<number>(1);

  const handleAdd = (product: Product) => {
    const qty = quantities[product.id] ?? 1;
    if (qty <= 0) return;

    setItems((current) => {
      const existing = current.find((i) => i.id === product.id);
      if (!existing) {
        return [...current, { id: product.id, name: product.name, quantity: qty }];
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
                    <div>
                      <p className="text-sm font-medium text-stone-900">
                        {product.name}
                      </p>
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

          <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-stone-50/60 p-4 sm:p-6">
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
                    className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-stone-200"
                  >
                    <div>
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
            >
              Guardar configuración del pack
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

