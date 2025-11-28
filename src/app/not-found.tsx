export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: ".5rem" }}>Página não encontrada</h1>
      <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
        Pode ser que o link tenha expirado ou que o conteúdo ainda não esteja publicado.
      </p>
      <a href="/" className="btn-ghost">
        Voltar para a página inicial
      </a>
    </div>
  );
}
