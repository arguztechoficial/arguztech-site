// src/app/page.tsx
import React from "react";

export default function HomePage() {
  return (
    <div className="container">
      {/* HERO PRINCIPAL – impacto visual */}
      <section className="hero" aria-label="Hero — Arguz Tech">
        <div>
          <div className="hero-eyebrow" aria-hidden>
            <span className="hero-eyebrow-dot" />
            Arguz Tech • Soul Driven Systems
          </div>

          <h1 className="hero-title" style={{ marginTop: 8 }}>
            Construímos <span className="hero-highlight">sistemas inteligentes</span>
            <br />
            que fazem seu negócio <strong style={{ color: "white" }}>render mais</strong>
          </h1>

          <p className="hero-subtitle" style={{ marginTop: 14 }}>
            Plataformas de jogos (white-label), sistemas de vendas com app offline,
            sites e lojas virtuais — arquitetura pronta para produção, escalável,
            segura e desenhada para captar clientes e aumentar receita.
          </p>

          <div className="cta-row" style={{ marginTop: 20 }}>
            <a href="/contato" className="btn-primary" aria-label="Falar sobre um projeto">
              Quero conversar — orçamento
            </a>
            <a href="/projetos" className="btn-ghost" aria-label="Ver soluções da Arguz">
              Ver soluções
            </a>
          </div>

          <p className="hero-footnote" style={{ marginTop: 14 }}>
            Focamos em resultados reais: captação de revendedoras, automações para escritórios
            e painéis de operação para equipes em campo. Tecnologia que entrega ROI.
          </p>

          <div style={{ marginTop: 22 }} aria-hidden>
            <div className="features" style={{ gap: 12 }}>
              <div className="feature" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 14, height: 14, borderRadius: 6, background: "linear-gradient(90deg,#00e0ff,#7c3aed)" }} />
                <div>
                  <strong>Captação de Revendedoras</strong>
                  <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>
                    Fluxos para cadastrar, nutrir e converter revendedoras com automações integradas.
                  </div>
                </div>
              </div>

              <div className="feature" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 14, height: 14, borderRadius: 6, background: "linear-gradient(90deg,#ffd166,#fb6f6f)" }} />
                <div>
                  <strong>Geração de Leads Jurídicos</strong>
                  <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }}>
                    Páginas e fluxos otimizados para captar clientes para escritórios e serviços legais.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL / ILUSTRAÇÃO DA PLATAFORMA (lado direito) */}
        <aside aria-hidden>
          <div className="card" style={{ padding: 18, borderRadius: 14 }}>
            {/* Small header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <img src="/arguz_logo.png" alt="Arguz" width={48} height={48} style={{ borderRadius: 10 }} />
              <div>
                <div style={{ fontWeight: 700 }}>Arguz Bets • Plataforma</div>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>White-label — Nós construímos, você opera</div>
              </div>
            </div>

            {/* Stylized inline SVG dashboard placeholder */}
            <div style={{ width: "100%", borderRadius: 10, overflow: "hidden", background: "linear-gradient(180deg,#041126, #021018)", border: "1px solid rgba(255,255,255,0.03)", padding: 14 }}>
              <svg viewBox="0 0 360 220" width="100%" height="160" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Ilustração do painel da plataforma">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0" stopColor="#00e0ff" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#7c3aed" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                <rect x="6" y="6" width="348" height="208" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.03)" />

                {/* left panel */}
                <rect x="18" y="20" width="120" height="56" rx="6" fill="rgba(255,255,255,0.02)" />
                <rect x="150" y="20" width="186" height="56" rx="6" fill="rgba(255,255,255,0.015)" />

                {/* chart */}
                <g transform="translate(22,92)">
                  <rect width="310" height="80" rx="6" fill="rgba(255,255,255,0.01)" />
                  {/* sparkline */}
                  <polyline points="6,60 32,40 64,44 96,28 128,34 160,18 192,32 224,12 256,24 288,8" fill="none" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  {/* legend dots */}
                  <circle cx="44" cy="18" r="4" fill="#00e0ff" />
                  <circle cx="76" cy="18" r="4" fill="#7c3aed" />
                </g>

                {/* small tiles */}
                <rect x="24" y="180" width="72" height="18" rx="4" fill="rgba(255,255,255,0.02)" />
                <rect x="102" y="180" width="72" height="18" rx="4" fill="rgba(255,255,255,0.02)" />
                <rect x="180" y="180" width="72" height="18" rx="4" fill="rgba(255,255,255,0.02)" />
                <rect x="258" y="180" width="72" height="18" rx="4" fill="rgba(255,255,255,0.02)" />
              </svg>
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ fontWeight: 700 }}>Pronto para produção</div>
              <div style={{ color: "var(--muted)", marginTop: 6, fontSize: 13 }}>
                Auditoria, financeiro, painel administrativo e integrações. Entregamos o produto técnico; você executa a operação.
              </div>
            </div>

            <div className="callout" style={{ marginTop: 12 }}>
              <h3 style={{ margin: 0, fontSize: 15 }}>Quer captar revendedoras?</h3>
              <p style={{ marginTop: 8, color: "var(--muted)", fontSize: 13 }}>
                Montamos funil, páginas e integrações com automações para transformar visitantes em revendedoras ativas.
              </p>
              <div style={{ marginTop: 10 }}>
                <a href="/contato" className="btn-primary">Planejar captação</a>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* SEÇÃO – SISTEMA DE VENDAS */}
      <section className="section" aria-labelledby="vendas-title">
        <div className="card">
          <h2 id="vendas-title" style={{ marginTop: 0, marginBottom: 8 }}>
            Sistema de vendas Arguz — adaptável a qualquer segmento
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 760, fontSize: 15 }}>
            Arquitetura pensada para vendedores em campo: app offline, controle de carga,
            devoluções, pagamentos e painéis de acompanhamento em tempo real. Ideal para
            revenda, distribuição e equipes externas.
          </p>

          <ul style={{ marginTop: 12, paddingLeft: "1.1rem", fontSize: 15, color: "var(--text)" }}>
            <li>App Flutter com sincronização segura e controle de cargas.</li>
            <li>Relatórios por vendedor, por praça, por produto e por inadimplência.</li>
            <li>Integração com pagamentos e geração de comprovantes/assinatura.</li>
          </ul>

          <div style={{ marginTop: 12 }}>
            <a href="/vendas" className="btn-ghost">Ver detalhes do sistema de vendas</a>
          </div>
        </div>
      </section>

      {/* SEÇÃO – PLATAFORMA DE JOGOS E SITES */}
      <section className="section" aria-labelledby="produtos-title">
        <div className="card-grid card-grid-2">
          <div className="card">
            <h2 id="produtos-title" style={{ marginTop: 0, marginBottom: 8 }}>
              Plataforma de jogos / cassino (white-label)
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15 }}>
              Entregamos a stack completa: backend seguro, auditoria por transação, painel financeiro
              e integrações. A Arguz desenvolve e entrega; a operação é do cliente.
            </p>

            <ul style={{ marginTop: 10, paddingLeft: "1.1rem", fontSize: 15 }}>
              <li>Auditoria por transação e segurança reforçada.</li>
              <li>Painel administrativo para gestão de apostas, depósitos e saques.</li>
              <li>Possibilidade de módulos customizados conforme necessidade.</li>
            </ul>

            <p style={{ marginTop: 10, fontSize: 13, color: "#f97373" }}>
              Nota: não operamos os jogos — somos fornecedores da tecnologia.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Sites, lojas e automações</h3>
            <p style={{ color: "var(--muted)", fontSize: 15 }}>
              Criamos sites e lojas otimizadas para conversão — formulários que chegam, checkout integrado
              e automações de marketing para nutrir e converter clientes.
            </p>

            <ul style={{ marginTop: 10, paddingLeft: "1.1rem", fontSize: 15 }}>
              <li>Institucionais modernos e lojas com fluxo de compra simples.</li>
              <li>Integração com gateways de pagamento e sistemas de estoque.</li>
              <li>Automação de captação e nutrição de leads para vendas recorrentes.</li>
            </ul>

            <div style={{ marginTop: 12 }}>
              <a href="/contato" className="btn-primary">Quero conversar sobre um projeto</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
