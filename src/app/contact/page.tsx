import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | りん障害福祉サービス",
  description:
    "りん障害福祉サービスへのお問い合わせ・見学申し込みはこちらから。無料相談も受け付けております。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 px-4 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">お問い合わせ</h1>
        <p className="text-blue-100">見学・体験利用・無料相談など、お気軽にご連絡ください。</p>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">直接のご連絡</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📞</span>
                  <h3 className="font-bold text-gray-800">お電話</h3>
                </div>
                <p className="text-2xl font-bold text-primary-600 mb-1">03-0000-0000</p>
                <p className="text-sm text-gray-500">受付時間：平日 9:00〜18:00</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">✉️</span>
                  <h3 className="font-bold text-gray-800">メール</h3>
                </div>
                <p className="text-primary-600 font-semibold">info@rin-fukushi.jp</p>
                <p className="text-sm text-gray-500 mt-1">2営業日以内にご返信いたします</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📍</span>
                  <h3 className="font-bold text-gray-800">所在地</h3>
                </div>
                <p className="text-gray-700 text-sm">〒000-0000</p>
                <p className="text-gray-700 text-sm">東京都○○区○○1-1-1</p>
                <p className="text-sm text-gray-500 mt-1">最寄り駅：○○駅 徒歩5分</p>
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">よくあるご質問</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "見学はできますか？",
                    a: "はい、随時受け付けております。事前にご連絡いただければ、スタッフがご案内します。",
                  },
                  {
                    q: "体験利用は可能ですか？",
                    a: "可能です。まずはお気軽にお問い合わせください。",
                  },
                  {
                    q: "利用料金はどのくらいかかりますか？",
                    a: "原則として、世帯収入に応じた負担上限月額があります。詳しくはご相談ください。",
                  },
                  {
                    q: "受給者証がないと利用できませんか？",
                    a: "受給者証の取得からサポートします。まずはお問い合わせください。",
                  },
                ].map((faq) => (
                  <details
                    key={faq.q}
                    className="bg-white rounded-xl shadow-sm overflow-hidden group"
                  >
                    <summary className="px-5 py-4 font-semibold text-gray-800 cursor-pointer text-sm flex justify-between items-center">
                      {faq.q}
                      <span className="text-primary-500 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">お問い合わせフォーム</h2>
            <form className="bg-white rounded-2xl shadow-sm p-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="例：山田 太郎"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  電話番号
                </label>
                <input
                  type="tel"
                  placeholder="例：03-0000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="例：taro@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  お問い合わせの種類
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 text-gray-700">
                  <option value="">選択してください</option>
                  <option>就労継続支援B型について</option>
                  <option>放課後等デイサービスについて</option>
                  <option>居宅介護について</option>
                  <option>グループホームについて</option>
                  <option>見学・体験利用について</option>
                  <option>受給者証の取得について</option>
                  <option>その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  ご質問・ご要望 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="例：就労継続支援B型の見学をしたいのですが、空いている日程を教えてください。"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
                />
              </div>

              <p className="text-xs text-gray-400">
                送信いただいた個人情報は、お問い合わせへの対応にのみ使用し、第三者には提供しません。
              </p>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
