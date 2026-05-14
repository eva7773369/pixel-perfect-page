import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "學員分享 | MMT 天賦系統" },
      { name: "description", content: "聆聽 MMT 學員的真實學習心得與生命轉變故事。" },
    ],
  }),
});

const items = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: "小孟",
  excerpt:
    "首先，非常感謝小清新老師與樂樂，在這十堂課中過程，我感受到課程的設計非常用心，而且老師也因應當下大家的狀況調整課程內容，還加開場次解盤，樂樂在過程中，也不斷地幫…",
}));

function TestimonialsPage() {
  return (
    <SiteLayout>
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-widest">學員分享</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {items.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-border p-6 flex gap-5 items-start"
            >
              <div className="w-28 h-28 shrink-0 rounded-full bg-muted grid place-items-center text-[10px] text-muted-foreground">
                1080×1080
              </div>
              <div className="space-y-3 flex-1">
                <p className="font-semibold border-b border-foreground/40 pb-1 inline-block pr-10">
                  {t.name}
                </p>
                <p className="text-xs leading-[1.9] text-foreground/80">{t.excerpt}</p>
                <button className="px-3 py-1 rounded bg-foreground text-background text-xs">
                  閱讀更多
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-14 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 rounded text-sm ${
                n === 1
                  ? "bg-foreground text-background"
                  : "bg-muted text-foreground hover:bg-muted/70"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
