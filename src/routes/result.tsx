import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/result")({
  component: ResultPage,
  head: () => ({
    meta: [
      { title: "搜尋結果 | MMT 天賦系統" },
      { name: "description", content: "查看你的 MMT 天賦設計分析結果。" },
    ],
  }),
});

const energies = ["風能量", "火能量", "水能量", "土能量"];

const talentCards = [
  { num: "4", name: "挑戰者" },
  { num: "13", name: "改革者" },
  { num: "14", name: "使命家" },
  { num: "15", name: "策略家" },
  { num: "16", name: "執行家" },
  { num: "21", name: "建構者" },
];

const mentorCards = [
  { num: "2", name: "敏銳者" },
  { num: "7", name: "守護者" },
];

const shadowCards = [{ num: "20", name: "計畫者" }];
const yearCards = [{ num: "11", name: "權威者" }];

function MiniCard({ num, name }: { num: string; name: string }) {
  return (
    <div className="relative w-full aspect-[3/4] rounded-lg bg-foreground/70 shadow-sm">
      <div className="absolute bottom-2 left-2 right-2 bg-background/90 rounded px-2 py-1 text-[11px] text-foreground">
        {num} {name}
      </div>
    </div>
  );
}

function ResultPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        {/* Top: title + form summary */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-center md:text-left">
            搜尋結果
          </h1>
          <div className="bg-muted rounded-2xl p-8 space-y-5 text-sm">
            {[
              { label: "姓名", value: "" },
              { label: "出生年月日", value: "" },
              { label: "關係分類", value: "" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="shrink-0 w-20">{row.label}</span>
                <div className="flex-1 border-b border-foreground/60 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Talent design card */}
        <div className="rounded-3xl border border-border p-8 md:p-12 space-y-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-center">
            你的天賦設計
          </h2>

          {/* Energies + Radar */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-6">
              {energies.map((e) => (
                <div key={e} className="space-y-3">
                  <div className="aspect-square rounded-full bg-muted grid place-items-center text-[11px] text-muted-foreground">
                    (圖示 1080x1080 px)
                  </div>
                  <p className="text-center text-base">{e}</p>
                </div>
              ))}
            </div>

            {/* Radar chart */}
            <div className="relative aspect-square max-w-sm mx-auto w-full">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* concentric diamonds */}
                {[80, 55, 30].map((r) => (
                  <polygon
                    key={r}
                    points={`100,${100 - r} ${100 + r},100 100,${100 + r} ${100 - r},100`}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                  />
                ))}
                {/* data polygon */}
                <polygon
                  points="100,45 155,100 100,155 45,100"
                  fill="currentColor"
                  fillOpacity="0.15"
                  stroke="currentColor"
                  strokeOpacity="0.7"
                />
                {[
                  [100, 45],
                  [155, 100],
                  [100, 155],
                  [45, 100],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="currentColor" />
                ))}
              </svg>
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-sm">
                風
              </span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-sm">
                火
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-sm">
                水
              </span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 text-sm">
                土
              </span>
            </div>
          </div>

          {/* 天賦 */}
          <div className="bg-muted rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-center">天賦</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {talentCards.map((c) => (
                <MiniCard key={c.num} {...c} />
              ))}
            </div>
          </div>

          {/* 導師 / 陰影 / 年度策略 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">導師</h3>
              <div className="relative h-48">
                <div className="absolute left-4 top-0 w-28">
                  <MiniCard {...mentorCards[0]} />
                </div>
                <div className="absolute left-16 top-3 w-28">
                  <MiniCard {...mentorCards[1]} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">陰影</h3>
              <div className="w-28 mx-auto">
                <MiniCard {...shadowCards[0]} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">年度策略</h3>
              <div className="w-28 mx-auto">
                <MiniCard {...yearCards[0]} />
              </div>
            </div>
          </div>

          {/* 描述文 */}
          <p className="text-sm leading-[2] text-foreground/80">
            你天生擅長溝通與連結，無論是表達自己的想法還是啟發他人，你都能用靈活的語言和敏銳的洞察力讓交流變得充滿活力。你的思想開放且多變，
            <br />
            總能快速適應新的環境，並抓住那些稍縱即逝的機會，讓自己始終走在創意的前端。
          </p>

          {/* Paywall */}
          <div className="relative">
            <div className="h-12 rounded-md bg-gradient-to-r from-transparent via-foreground/15 to-transparent grid place-items-center">
              <button className="text-sm font-medium tracking-wide hover:underline">
                付費解鎖看完整內容
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
