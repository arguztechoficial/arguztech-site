import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const SMTP_HOST = process.env.SMTP_HOST || "smtp.zoho.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;

export async function POST(req: NextRequest) {
  try {
    const referer = req.headers.get("referer") ?? undefined;
    const body = await req.json().catch(() => ({} as any));

    const nome = String(body.nome || "").trim();
    const email = String(body.email || "").trim();
    const telefone = String(body.telefone || "").trim();
    const mensagem = String(body.mensagem || "").trim();

    if (!nome || !email || mensagem.length < 3) {
      return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 422 });
    }

    if (!SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
      console.error("[contact] SMTP envs ausentes.");
      return NextResponse.json(
        { ok: false, error: "Servidor de e-mail não configurado." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    const subject = `[Arguz Site] Contato de ${nome}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, sans-serif; line-height: 1.5;">
        <h2 style="margin: 0 0 8px;">Novo contato pelo site</h2>
        <p style="margin: 4px 0;"><b>Nome:</b> ${nome}</p>
        <p style="margin: 4px 0;"><b>E-mail:</b> ${email}</p>
        ${telefone ? `<p style="margin: 4px 0;"><b>Telefone:</b> ${telefone}</p>` : ""}
        ${referer ? `<p style="margin: 4px 0;"><b>Origem:</b> ${referer}</p>` : ""}
        <p style="margin: 12px 0 4px;"><b>Mensagem:</b></p>
        <pre style="margin: 0; padding: 12px; background: #020617; color: #e5e7eb; border-radius: 8px; white-space: pre-wrap;">${mensagem}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] erro inesperado:", err);
    return NextResponse.json(
      { ok: false, error: "Erro inesperado ao enviar a mensagem." },
      { status: 500 }
    );
  }
}
