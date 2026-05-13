import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Logo } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "關於我們 | MMT 天賦系統" },
      {
        name: "description",
        content: "認識 MMT 天賦系統創辦人何青馨，以及致力於亞洲職場人才發展的品牌故事。",
      },
    ],
  }),
});

const credentials = [
  "企業高階經理人",
  "MMT天賦系統創辦人",
  "NLP高階執行師",
  "英國Bach中心情緒管理花精國際訓練課程結訓",
  "榮格分析心理學的學習者",
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* Intro band */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">關於我們</h1>
            <p className="text-sm text-muted-foreground leading-[2]">
              將協助你理解自己的天賦優勢、心智模式、關係經營！
              <br />
              覺察並且和解，進而肯定自己的價值在每個人生角色中，
              <br />
              不慌不忙的找到順應之流。
            </p>
          </div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-foreground/15 grid place-items-center text-muted-foreground text-lg">
            創辦人照片
          </div>
        </div>
      </section>

      {/* Founder block */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Logo size="lg" />
          <div className="space-y-2">
            <p className="text-2xl font-medium tracking-wide">MMT天賦系統</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wider">
              創辦人 何青馨
            </h2>
          </div>
          <p className="text-sm text-muted-foreground pt-4">簽名</p>
          <div className="border-b border-foreground/40 w-48" />
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-muted grid place-items-center text-xs text-muted-foreground">
            （底圖背景1920×1080px）
          </div>
          <div className="aspect-[4/3] rounded-xl bg-muted/80 grid place-items-center text-xs text-muted-foreground absolute -bottom-10 -right-6 w-2/3 hidden md:grid">
            （底圖背景1920×1080px）
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h3 className="text-2xl font-semibold mb-6 tracking-wide">經歷背景</h3>
        <ul className="space-y-3 text-sm text-foreground/80 list-disc pl-5">
          {credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {/* About MMT */}
      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">關於MMT</h2>
          <p className="text-base md:text-lg leading-[2]">
            MMT致力於成為亞洲職場人才發展與人際關係策略的領導品牌。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 space-y-6 text-sm leading-[2.2] text-foreground/85">
        <p>
          我們透過專業的心智模式優化、跨領域師資對談、系統知識應用，不僅幫助個人在競爭激烈的職場環境中提升決策能力與多元視角，也協助他們打造深刻且有影響力的人際連結，成就每一天的職場高峰。
        </p>
        <p>
          目前，MMT的服務已前進中港台，為超過100家企業與機構提供高效能的職場與人際關係解決方案。我們相信，人際互動的品質直接影響職場的價值，為此設計出能優化團隊協作、促進高效溝通的系統工具。
        </p>
        <p>
          我們持續深入探索亞洲市場，挖掘最具潛力的創新解讀師，攜手打造能提升個人成長與團隊開協力的服務！涵蓋學習現場且如心智模式優化、系統性思考、多元視角構建、人際溝通與衝突管理。我們與多家優秀的商務機構和企業團隊合作，致力於推動亞洲職場人才的全面發展。
        </p>
        <p>
          我們的使命是促進職場價值，協助高階經理人和創業者建立高凝聚力、高績效的團隊，並提升職場中關鍵人際關係的深度和影響力。MMT不是僅是一個品牌，更是一個能幫助個人與企業突破極限、拉近人與人距離的存在。
        </p>
      </section>

      {/* Certificates */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-center mb-12">
          專業證書
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="aspect-[3/4] rounded-xl bg-muted" />
          <div className="aspect-[3/4] rounded-xl bg-muted" />
        </div>
      </section>
    </SiteLayout>
  );
}
