import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email no configurado. Añade RESEND_API_KEY en .env.local" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { pdfBase64, userData, items, packsCount, totalUnitsPerPack, totalUnitsAllPacks } =
      body;

    const toEmail = process.env.RESEND_TO_EMAIL || "hola@creewe.es";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Creewe <onboarding@resend.dev>";

    const productsList = items
      .map((i: { name: string; quantity: number }) => `• ${i.name}: ${i.quantity}`)
      .join("\n");

    const textBody = [
      "Nuevo pack configurado desde la web:",
      "",
      "--- DATOS DEL CLIENTE ---",
      userData.nombre && `Nombre: ${userData.nombre}`,
      userData.telefono && `Teléfono: ${userData.telefono}`,
      userData.correo && `Correo: ${userData.correo}`,
      userData.direccion && `Dirección: ${userData.direccion}`,
      "",
      "--- CONTENIDO DEL PACK ---",
      productsList,
      "",
      `Nº de packs: ${packsCount}`,
      `Unidades por pack: ${totalUnitsPerPack}`,
      `Unidades totales: ${totalUnitsAllPacks}`,
    ]
      .filter(Boolean)
      .join("\n");

    const pdfBuffer = Buffer.from(pdfBase64, "base64");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[Creewe] Nuevo pack solicitado - ${userData.nombre || "Cliente"}`,
      text: textBody,
      attachments: [
        {
          filename: "resumen-pack-creewe.pdf",
          content: pdfBuffer,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Error enviando pack:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error al enviar" },
      { status: 500 }
    );
  }
}
