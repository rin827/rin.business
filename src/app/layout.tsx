import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "りん障害福祉サービス | 一人ひとりに寄り添った支援",
  description:
    "りん障害福祉サービスは、就労継続支援B型・放課後等デイサービス・居宅介護・グループホームなど、障害のある方の生活を多角的に支援します。",
  keywords: "障害福祉, 就労継続支援, 放課後等デイサービス, 居宅介護, グループホーム",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
