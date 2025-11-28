export default function VendasPage() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "2rem", margin: "2.5rem 0 1rem" }}>Sistema de Vendas Arguz</h1>
      <p style={{ color: "#9ca3af", maxWidth: 640 }}>
        Plataforma completa para distribuidores com equipe de rua: controle de carga, pedidos offline/online,
        cobranças recorrentes e relatórios em tempo real.
      </p>
      <div className="section">
        <div className="card">
          <h3>Principais recursos</h3>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: ".9rem", color: "#cbd5f5" }}>
            <li>App offline para vendedores com sincronização segura.</li>
            <li>Cadastro de clientes com geolocalização, fotos e assinatura.</li>
            <li>Controle de praças, cargas, devoluções e inadimplência.</li>
            <li>Painel web com relatórios por vendedor, produto e período.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
