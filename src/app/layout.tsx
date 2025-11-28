import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arguz Tech — Materializando Ideias",
  description: "Tecnologia, Segurança Digital, IA e sistemas sob medida.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          borderBottom: "1px solid rgba(15,23,42,1)",
          backdropFilter: "blur(12px)",
          background: "rgba(2,6,23,0.85)"
        }}>
          <div className="container" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "999px",
                  background: "radial-gradient(circle at 30% 20%, #38bdf8, #0369a1)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#020617"
                }}
              >
                A
              </span>
              <div>
                <div style={{ fontWeight: 600, letterSpacing: ".04em", fontSize: 14 }}>ARGUZ TECH</div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>Materializando Ideias</div>
              </div>
            </div>

            <nav style={{ display: "flex", gap: "1.25rem", fontSize: 14 }}>
              <a href="/">Início</a>
              <a href="/projetos">Projetos</a>
              <a href="/vendas">Sistema de Vendas</a>
              <a href="/contato">Contato</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-inner">
            <div>
              © {new Date().getFullYear()} Arguz Tech — Materializando Ideias!
              <br />
              <a href="mailto:contato@arguztech.com.br">contato@arguztech.com.br</a>
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="https://www.instagram.com/arguz_tech/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/arguz-tech-09a557381/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@ArguzTech" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
