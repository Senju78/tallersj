import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plataforma de Notas",
  description: "Plataforma para gestión de notas de Ángel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-custom antialiased bg-pastelPink text-pastelPurple`}
      >
        <header className="p-4 bg-pastelBlue text-pastelYellow text-center">
          <h1 className="text-3xl font-bold">buenas </h1>
          <p className="text-xl">taller de notas </p>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-lightGray text-pastelBlue text-center">
          <p>© 2024 Plataforma de Notas de Ángel</p>
        </footer>
      </body>
    </html>
  );
}
