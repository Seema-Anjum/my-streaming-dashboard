import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="main-container">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
