import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "Felipe Thiago | Desenvolvedor Full Stack",
  description:
    "Portfólio de Felipe Thiago, desenvolvedor Full Stack em Recife - PE. Projetos, habilidades e contato.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
