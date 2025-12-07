import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arguz Tech — Sistemas Inteligentes",
  description:
    "Arguz Tech — plataforma bets, sistema de vendas e soluções sob medida com IA no centro da operação.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // troque este número pelo seu: exemplo "5511999999999" (DDI + DDD + número, sem símbolos)
  const whatsappNumber = "67991805822";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá — quero conversar sobre um projeto na Arguz Tech"
  )}`;

  return (
    <html lang="pt-BR">
      <body className="app-shell">
        {/* Floating soft orbs (background) */}
        <div className="bg-orbit" aria-hidden />

        {/* Skip link for keyboard users */}
        <a href="#content" className="skip-link" style={{ position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden" }}>
          Pular para o conteúdo
        </a>

        {/* HEADER */}
        <header className="site-header" role="banner" aria-label="Cabecalho do site Arguz Tech">
          <div className="container site-header-inner" role="navigation" aria-label="Navegação principal">
            <a href="/" className="brand" aria-label="Ir para a página inicial da Arguz Tech">
              <div className="logo-wrap" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/arguz_logo.png"
                  alt="Arguz Tech"
                  width={72}
                  height={72}
                  style={{ display: "block", objectFit: "contain", borderRadius: 12 }}
                />
                <div className="brand-title" style={{ lineHeight: 1 }}>
                  <div className="title" style={{ fontWeight: 800, letterSpacing: ".06em" }}>ARGUZ TECH</div>
                  <div className="tag" style={{ color: "var(--muted)", fontSize: ".78rem" }}>Sistemas • IA • Segurança</div>
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="nav" aria-label="Menu principal">
              <a className="nav-link" href="/projetos">Soluções</a>
              <a className="nav-link" href="/vendas">Sistema de Vendas</a>
              <a className="nav-link" href="/contato">Contato</a>
              <a className="cta-btn" href={whatsappLink} target="_blank" rel="noreferrer">Fale via WhatsApp</a>
            </nav>

            {/* Mobile menu — uses details/summary for no-JS toggle */}
            <details className="mobile-menu" aria-hidden>
              <summary aria-label="Abrir menu" className="mobile-summary" style={{ border: "none", background: "transparent", cursor: "pointer", display: "none" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>

              <div className="mobile-panel" style={{ display: "none" }}>
                <a className="nav-link" href="/projetos">Soluções</a>
                <a className="nav-link" href="/vendas">Sistema de Vendas</a>
                <a className="nav-link" href="/contato">Contato</a>
                <a className="cta-btn" href={whatsappLink} target="_blank" rel="noreferrer">Fale via WhatsApp</a>
              </div>
            </details>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main id="content" className="shell-main" role="main">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="footer" role="contentinfo" aria-label="Rodapé">
          <div className="footer-inner container">
            <div>
              <strong>Arguz Tech</strong> • Materializando Ideias
              <br />
              <a href="mailto:contato@arguztech.com.br">contato@arguztech.com.br</a>
            </div>

            <div className="footer-links" aria-hidden>
              <a href="https://www.instagram.com/arguz_tech/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/arguz-tech-09a557381/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@ArguzTech" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
