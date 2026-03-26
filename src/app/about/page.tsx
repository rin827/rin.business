import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | りん障害福祉サービス",
  description: "りん障害福祉サービスの会社概要・理念・スタッフ紹介をご紹介します。",
};

const companyInfo = [
  { label: "事業所名", value: "合同会社りん" },
  { label: "代表者", value: "代表社員　りん　太郎" },
  { label: "設立", value: "2024年4月" },
  { label: "所在地", value: "〒000-0000　東京都○○区○○1-1-1" },
  { label: "TEL", value: "03-0000-0000" },
  { label: "FAX", value: "03-0000-0001" },
  { label: "メール", value: "info@rin-fukushi.jp" },
  {
    label: "事業内容",
    value:
      "就労継続支援B型・放課後等デイサービス・居宅介護・共同生活援助（グループホーム）",
  },
  { label: "指定番号", value: "各事業所番号は別途ご確認ください" },
];

const staff = [
  {
    name: "りん　太郎",
    role: "代表 / 管理者",
    qualifications: ["社会福祉士", "精神保健福祉士"],
    message:
      "「その人らしく生きる」ことを大切に、地域に根ざした支援を提供し続けます。",
  },
  {
    name: "山田　花子",
    role: "サービス管理責任者",
    qualifications: ["介護福祉士", "相談支援専門員"],
    message:
      "一人ひとりの状況を丁寧に把握し、最善の個別支援計画を作成します。",
  },
  {
    name: "鈴木　次郎",
    role: "生活支援員",
    qualifications: ["精神保健福祉士"],
    message:
      "利用者の方と一緒に目標を考え、小さな一歩を積み重ねていきます。",
  },
];

const timeline = [
  { year: "2024年4月", event: "合同会社りん設立" },
  { year: "2024年6月", event: "就労継続支援B型事業所 開所" },
  { year: "2024年9月", event: "放課後等デイサービス 開所" },
  { year: "2025年1月", event: "居宅介護事業所 開所" },
  { year: "2025年4月", event: "グループホーム 開所" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 px-4 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">会社概要</h1>
        <p className="text-blue-100">りん障害福祉サービスについてご紹介します。</p>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-600 font-semibold tracking-widest text-sm mb-4">MISSION</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            「その人らしく生きる」を、<br />ともに実現する。
          </h2>
          <p className="text-gray-600 leading-relaxed">
            私たちりんは、障害のある方が「できないこと」ではなく「できること」に目を向け、
            その人が持つ力と可能性を最大限に引き出す支援を目指しています。
            地域の一員として、自分らしく豊かに生活できる社会を、利用者の皆さんとともに作っていきます。
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">私たちの大切にすること</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "尊厳の尊重",
                desc: "どんな状況でも、利用者一人ひとりの尊厳と意思を最大限に尊重します。",
              },
              {
                num: "02",
                title: "地域との共生",
                desc: "施設の中だけでなく、地域社会と連携し、社会参加を積極的に支援します。",
              },
              {
                num: "03",
                title: "継続的な成長",
                desc: "職員研修・スーパービジョンを通じ、支援の質を常に向上させ続けます。",
              },
            ].map((v) => (
              <div key={v.num} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-3xl font-bold text-primary-100 block mb-2">{v.num}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">基本情報</h2>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {companyInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <dt className="sm:w-40 flex-shrink-0 font-semibold text-gray-500 text-sm px-6 py-4">
                  {item.label}
                </dt>
                <dd className="text-gray-800 text-sm px-6 py-4 sm:pl-0 border-t sm:border-t-0 sm:border-l border-gray-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">スタッフ紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staff.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  👤
                </div>
                <h3 className="font-bold text-gray-800">{s.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{s.role}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {s.qualifications.map((q) => (
                    <span
                      key={q}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {q}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">"{s.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">沿革</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-100" />
            <div className="space-y-6">
              {timeline.map((t) => (
                <div key={t.year} className="flex gap-6 items-start">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-1.5 flex-shrink-0 relative z-10 ml-2.5" />
                  <div>
                    <span className="text-xs font-semibold text-primary-600 block">{t.year}</span>
                    <span className="text-gray-700 text-sm">{t.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
