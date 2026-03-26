import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービス一覧 | りん障害福祉サービス",
  description:
    "就労継続支援B型・放課後等デイサービス・居宅介護・グループホームなど、障害のある方のニーズに合わせた福祉サービスをご提供します。",
};

const services = [
  {
    id: "shurou",
    icon: "💼",
    title: "就労継続支援B型",
    category: "就労支援",
    tagline: "自分のペースで、働く喜びを。",
    description:
      "一般企業への就職が難しい方に対して、就労の機会を提供するとともに、生産活動その他の活動の機会を通じ、知識及び能力の向上のために必要な訓練を行います。",
    features: [
      "農作業・手工芸・パソコン作業など多彩な作業",
      "工賃の支払い（作業に応じた報酬）",
      "生活リズムの安定化・社会参加の促進",
      "就労移行支援への移行サポート",
    ],
    target: "障害のある18歳以上の方（就労移行支援等を経て就職困難と判断された方など）",
    time: "月〜金 9:00〜16:00（土曜日開所あり）",
  },
  {
    id: "houkago",
    icon: "🌟",
    title: "放課後等デイサービス",
    category: "子どもの支援",
    tagline: "放課後の安心できる「居場所」。",
    description:
      "学校教育法に規定する学校（幼稚園・大学を除く）に就学している障害のある子どもに対して、授業の終了後または休業日に生活能力向上のための訓練・社会との交流促進等を提供します。",
    features: [
      "個別療育・集団療育プログラム",
      "学習支援・宿題サポート",
      "創作活動・スポーツ・野外活動",
      "保護者への相談支援",
    ],
    target: "小学校〜高校に通う障害のあるお子さん（6歳〜18歳）",
    time: "平日 13:00〜18:00、土・祝・長期休暇 9:00〜16:00",
  },
  {
    id: "kyotaku",
    icon: "🏠",
    title: "居宅介護",
    category: "在宅支援",
    tagline: "住み慣れた自宅で、安心した暮らしを。",
    description:
      "障害のある方が自宅で自立した生活を送れるよう、身体介護・家事援助・通院等介助など、日常生活全般にわたる支援を行います。",
    features: [
      "身体介護（入浴・排せつ・食事介助）",
      "家事援助（調理・洗濯・掃除）",
      "通院等介助・外出支援",
      "コミュニケーション支援",
    ],
    target: "障害支援区分1以上の障害のある方",
    time: "ご希望に応じて調整可能（要相談）",
  },
  {
    id: "group",
    icon: "🤝",
    title: "グループホーム",
    category: "住まいの支援",
    tagline: "地域の中で、みんなと暮らす。",
    description:
      "障害のある方が地域の中で共同生活を送りながら、日常生活上の援助・介護を受けることができる住まいの場を提供します。施設への入所や病院への長期入院から地域生活への移行も支援します。",
    features: [
      "食事・入浴・排せつの支援",
      "生活相談・余暇活動のサポート",
      "金銭管理・服薬管理の支援",
      "日中活動（他の事業所との連携）",
    ],
    target: "障害のある18歳以上の方",
    time: "24時間365日対応（夜間支援あり）",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 px-4 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">サービス一覧</h1>
        <p className="text-blue-100">生活のあらゆる場面で、一人ひとりに合った支援をお届けします。</p>
      </section>

      {/* Service Detail Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-20">
              <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-start`}>
                {/* Icon side */}
                <div className="md:w-1/3 bg-primary-50 rounded-3xl p-8 flex flex-col items-center text-center flex-shrink-0">
                  <div className="text-6xl mb-4">{s.icon}</div>
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full mb-2">
                    {s.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800">{s.title}</h2>
                  <p className="text-sm text-gray-500 mt-2 italic">"{s.tagline}"</p>
                </div>

                {/* Content side */}
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed mb-6">{s.description}</p>

                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                    サービス内容
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-primary-500 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2">
                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-600 w-20 flex-shrink-0">対象者</span>
                      <span className="text-gray-700">{s.target}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-600 w-20 flex-shrink-0">営業時間</span>
                      <span className="text-gray-700">{s.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              {i < services.length - 1 && (
                <hr className="mt-16 border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary-50 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          どのサービスが合うかわからない方へ
        </h2>
        <p className="text-gray-600 mb-8">
          専任の相談員が状況をお聞きし、最適なサービスをご提案します。
        </p>
        <Link
          href="/contact"
          className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-md inline-block"
        >
          無料相談・見学申し込み
        </Link>
      </section>
    </>
  );
}
