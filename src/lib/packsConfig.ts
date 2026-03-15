/**
 * Configuración de cada pack: qué productos incluye y en qué cantidad.
 * Los "id" deben coincidir con los productos de la página Crear mi pack
 * (gorra, camiseta, mochila, botella, pulsera, toalla, bolsa, cuaderno).
 *
 * Puedes editar aquí las cantidades o productos de cada pack cuando lo tengas definido.
 */
export const PACK_ITEMS: Record<
  string,
  { id: string; quantity: number }[]
> = {
  completo: [
    { id: "camiseta", quantity: 1 },
    { id: "mochila", quantity: 1 },
    { id: "botella", quantity: 1 },
  ],
  guarderia: [{ id: "mochila", quantity: 1 }],
  premium: [
    { id: "camiseta", quantity: 1 },
    { id: "mochila", quantity: 1 },
    { id: "botella", quantity: 1 },
  ],
  esencial: [
    { id: "camiseta", quantity: 1 },
    { id: "mochila", quantity: 1 },
  ],
};
