export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <div>
          <div className="chip">
            <span>🚀 Arguz Tech</span>
            <span>IA • Segurança • Sistemas</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", marginTop: "1.5rem", marginBottom: "1rem", lineHeight: 1.1 }}>
            Sistemas digitais sob medida, com IA no centro da operação.
          </h1>
          <p style={{ color: "#9ca3af", maxWidth: 520 }}>
            Do sistema de vendas offline-first ao painel de apostas, Arguz Tech projeta e desenvolve
            soluções robustas, prontas para produção, com foco em segurança e automação inteligente.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.75rem" }}>
            <a href="/contato" className="btn-primary">
              Fale com a Arguz
            </a>
            <a href="/projetos" className="btn-ghost">
              Ver projetos
            </a>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: ".5rem" }}>Stack principal</h3>
            <p style={{ fontSize: ".9rem", color: "#cbd5f5" }}>
              Node.js • PostgreSQL • React/Next.js • Flutter • Integrações com IA (OpenAI, modelos locais).
            </p>
          </div>
          <div style={{ height: "0.75rem" }} />
          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: ".5rem" }}>Soluções</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: ".9rem", color: "#cbd5f5" }}>
              <li>Sistema de vendas com app offline para vendedores.</li>
              <li>Plataforma de apostas (Arguz Bets) white-label.</li>
              <li>Projeto Arguz Breaker — segurança digital e forense.</li>
              <li>Painéis administrativos personalizados.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card-grid">
          <div className="card">
            <h3>Segurança e robustez</h3>
            <p style={{ fontSize: ".9rem", color: "#cbd5f5" }}>
              Autenticação JWT, controle de acesso por função, logs de auditoria e camadas extras de proteção
              de dados desde o início do projeto.
            </p>
          </div>
          <div className="card">
            <h3>IA integrada</h3>
            <p style={{ fontSize: ".9rem", color: "#cbd5f5" }}>
              Assistentes inteligentes para automação de rotina, análise de dados e suporte operacional dentro
              dos próprios sistemas da Arguz.
            </p>
          </div>
          <div className="card">
            <h3>Do protótipo ao produto</h3>
            <p style={{ fontSize: ".9rem", color: "#cbd5f5" }}>
              Acompanhamos desde a concepção da ideia, passando pelo desenho da arquitetura, até a entrega
              do sistema pronto para uso em produção.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
