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
    const { nombre, email, telefono, entidad, mensaje } = body;

    const toEmail = process.env.RESEND_TO_EMAIL || "hola@creewe.es";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Creewe <onboarding@resend.dev>";

    const textBody = [
      "Nuevo mensaje desde el formulario de contacto:",
      "",
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      `Teléfono: ${telefono || "No indicado"}`,
      `Entidad: ${entidad || "No indicado"}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email, // Para que si le das a "Responder" en tu correo, vaya al cliente
      subject: `[Creewe Contacto] Mensaje de ${nombre}`,
      text: textBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Error enviando mensaje de contacto:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error al enviar" },
      { status: 500 }
    );
  }
}
