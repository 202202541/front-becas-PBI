import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "UMSS",
  description: "Aplicacion con Autentifucacion",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
