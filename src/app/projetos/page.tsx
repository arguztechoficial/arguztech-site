export default function ProjetosPage() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "2rem", margin: "2.5rem 0 1rem" }}>Projetos da Arguz Tech</h1>
      <p style={{ color: "#9ca3af", maxWidth: 640 }}>
        Um panorama rápido dos principais produtos que estamos desenvolvendo e evoluindo.
      </p>

      <div className="section">
        <div className="card-grid">
          <div className="card">
            <h3>Arguz Breaker</h3>
            <p style={{ fontSize: ".9rem", color: "#cbd5f5" }}>
              Plataforma focada em segurança digital, recuperação de dados e apoio a forças de segurança,
              com módulos avançados de análise e automação.
            </p>
          </div>
          <div className="card">
            <h3>Sistema de Vendas</h3>
            <p style={{ fontSize: ".9rem", color: "#cbd5f5" }}>
              App Flutter para vendedores rodando offline, painel administrativo em React e backend Node.js
              com PostgreSQL, pensado para distribuidores e revendas.
            </p>
          </div>
          <div className="card">
            <h3>Arguz Bets</h3>
            <p style={{ fontSize: ".9rem", color: "#cbd5f5" }}>
              Módulo de apostas esportivas e cassino, com foco em segurança, gestão de risco e opções
              white-label para parceiros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
