import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API de Productos",
  description: "API REST del curso de Desarrollo Web con Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}