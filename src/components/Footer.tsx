import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              りん <span className="text-sm font-normal text-gray-400">障害福祉サービス</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              一人ひとりの可能性を信じ、<br />
              その人らしい生活を支援します。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#shurou" className="hover:text-white transition-colors">就労継続支援B型</Link></li>
              <li><Link href="/services#houkago" className="hover:text-white transition-colors">放課後等デイサービス</Link></li>
              <li><Link href="/services#kyotaku" className="hover:text-white transition-colors">居宅介護</Link></li>
              <li><Link href="/services#group" className="hover:text-white transition-colors">グループホーム</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>〒000-0000 東京都○○区○○1-1-1</li>
              <li>TEL: 03-0000-0000</li>
              <li>FAX: 03-0000-0001</li>
              <li>受付時間: 平日 9:00〜18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} りん障害福祉サービス. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
