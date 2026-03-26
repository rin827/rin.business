import Link from "next/link";

const services = [
  {
    id: "shurou",
    icon: "💼",
    title: "就労継続支援B型",
    description:
      "一般就労が困難な方に、働く場を提供しながら知識・能力の向上を支援します。",
  },
  {
    id: "houkago",
    icon: "🌟",
    title: "放課後等デイサービス",
    description:
      "障害のある子どもたちの放課後・休日の居場所として、療育・学習・余暇活動を支援します。",
  },
  {
    id: "kyotaku",
    icon: "🏠",
    title: "居宅介護",
    description:
      "ご自宅での入浴・排せつ・食事などの身体介護や家事援助を行います。",
  },
  {
    id: "group",
    icon: "🤝",
    title: "グループホーム",
    description:
      "地域の中で共同生活を送りながら、日常生活の支援を受けることができます。",
  },
];

const voices = [
  {
    name: "Aさん（30代・利用者）",
    text: "スタッフの方がいつも親身に話を聞いてくれて、自分のペースで働けるようになりました。",
  },
  {
    name: "Bさんの保護者",
    text: "放課後デイに通い始めてから、子どもの笑顔が増えました。安心して預けられます。",
  },
  {
    name: "Cさん（50代・利用者）",
    text: "グループホームに入居して、地域の方々とのつながりができ、毎日が充実しています。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-600 font-semibold text-sm tracking-widest mb-4 uppercase">
            障害福祉サービス事業所
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            一人ひとりの可能性を信じ、<br />
            <span className="text-primary-600">その人らしい生活</span>を支援します。
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            りんは、障害のある方が地域で安心して生活できるよう、<br className="hidden md:block" />
            就労・療育・居宅・住まいの各面から包括的に支援します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-md"
            >
              サービスを見る
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              無料相談する
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">サービス一覧</h2>
            <p className="text-gray-500">
              生活のあらゆる場面でご支援します
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-primary-50 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary-700">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-primary-600 font-semibold hover:underline"
            >
              サービスの詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-4 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">りんが選ばれる理由</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "専門スタッフが対応",
                desc: "社会福祉士・精神保健福祉士など有資格者が中心となり、専門的な支援を提供します。",
              },
              {
                icon: "📋",
                title: "個別支援計画",
                desc: "利用者一人ひとりの目標・希望をもとに、オーダーメイドの支援計画を作成します。",
              },
              {
                icon: "🌍",
                title: "地域とのつながり",
                desc: "地域の企業・学校・医療機関と連携し、社会参加を積極的に支援します。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-6 text-left">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">ご利用者の声</h2>
            <p className="text-gray-500">実際にご利用いただいた方々からのメッセージ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voices.map((v) => (
              <div key={v.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">"{v.text}"</p>
                <p className="text-xs text-gray-400 font-semibold">{v.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-gray-500 mb-8">
            見学・体験利用も随時受け付けております。<br />
            専任スタッフが丁寧にご説明します。
          </p>
          <Link
            href="/contact"
            className="bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-700 transition-colors shadow-lg inline-block"
          >
            無料相談・見学申し込み
          </Link>
        </div>
      </section>
    </>
  );
}
