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

function ResultPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-border p-10 md:p-16">
          {/* Top: title + form summary */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <h1 className="text-4xl md:text-5xl font-medium tracking-wide">搜尋結果</h1>
            <div className="bg-muted rounded-2xl p-8 space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <span className="shrink-0 w-16">姓名</span>
                <div className="flex-1 border-b border-foreground/60 h-5" />
              </div>
              <div className="flex items-center gap-4">
                <span className="shrink-0 w-16">出生年月日</span>
                <div className="flex-1 border-b border-foreground/60 h-5" />
              </div>
              <div className="flex items-center gap-4">
                <span className="shrink-0 w-16">關係分類</span>
                <div className="flex-1 border-b border-foreground/60 h-5" />
              </div>
            </div>
          </div>

          {/* Talent design */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">你的天賦設計</h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {energies.map((e) => (
              <div key={e} className="space-y-5">
                <div className="aspect-square rounded-full bg-muted" />
                <p className="text-center text-base">{e}</p>
              </div>
            ))}
          </div>

          {/* Paywall bar */}
          <div className="mt-16 relative">
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
