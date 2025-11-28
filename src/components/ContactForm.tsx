"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nome: String(formData.get("nome") || ""),
      email: String(formData.get("email") || ""),
      telefone: String(formData.get("telefone") || ""),
      mensagem: String(formData.get("mensagem") || ""),
      origem: "site_contato"
    };

    setState("submitting");
    setErrorMsg(null);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const json = await resp.json().catch(() => ({} as any));

      if (!resp.ok || !json.ok) {
        throw new Error(json.error || "Falha ao enviar. Tente novamente.");
      }

      setState("success");
      form.reset();
    } catch (err: any) {
      console.error("erro ao enviar contato", err);
      setErrorMsg(err?.message || "Falha inesperada. Tente novamente.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h1 style={{ fontSize: "1.8rem", marginBottom: ".5rem" }}>Fale com a Arguz Tech</h1>
      <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
        Conte rapidamente o que você precisa. Respondemos preferencialmente por e-mail.
      </p>

      <div className="form-grid form-grid-2">
        <div>
          <label className="label" htmlFor="nome">Nome completo*</label>
          <input id="nome" name="nome" required className="input" placeholder="Seu nome" />
        </div>
        <div>
          <label className="label" htmlFor="email">E-mail*</label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="input"
            placeholder="voce@empresa.com"
          />
        </div>
      </div>

      <div className="form-grid" style={{ marginTop: "1rem" }}>
        <div>
          <label className="label" htmlFor="telefone">Telefone / WhatsApp</label>
          <input
            id="telefone"
            name="telefone"
            className="input"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div>
          <label className="label" htmlFor="mensagem">Mensagem*</label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            className="textarea"
            placeholder="Resuma sua ideia ou necessidade..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ marginTop: "1.25rem" }}
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {errorMsg && <div className="error">{errorMsg}</div>}
      {state === "success" && !errorMsg && (
        <div className="success">
          Mensagem enviada com sucesso! Em breve a Arguz Tech entra em contato.
        </div>
      )}
    </form>
  );
}
