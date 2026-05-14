import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/teachers")({
  component: TeachersPage,
  head: () => ({
    meta: [
      { title: "協會師資 | MMT 天賦系統" },
      { name: "description", content: "瀏覽 MMT 協會的專業師資陣容，找到適合你的解讀師。" },
    ],
  }),
});

const teachers = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "艾昕",
  code: "4.8.9.10.10.10/導5",
  area: "個人發展, 團隊建構",
}));

function TeachersPage() {
  return (
    <SiteLayout>
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-widest">協會師資</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-[220px_1fr] gap-10">
        {/* Filter */}
        <aside className="space-y-4">
          <p className="text-center text-sm">- 師資篩選 -</p>
          <input
            placeholder="輸入姓名"
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background"
          />
          <button className="w-full flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm">
            權威領域 <ChevronDown className="w-4 h-4" />
          </button>
          <button className="w-full flex items-center justify-between border border-border rounded-md px-3 py-2 text-sm">
            師資性別 <ChevronDown className="w-4 h-4" />
          </button>
          <div className="border border-border rounded-md text-sm overflow-hidden">
            <button className="w-full px-3 py-2 text-left hover:bg-muted/60 border-b border-border">
              男師資
            </button>
            <button className="w-full px-3 py-2 text-left hover:bg-muted/60">女師資</button>
          </div>
          <div className="text-center pt-2">
            <button className="px-4 py-1.5 rounded bg-foreground text-background text-xs">
              立即搜尋
            </button>
          </div>
        </aside>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {teachers.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-border p-5 flex gap-4 items-center"
            >
              <div className="w-28 h-28 shrink-0 rounded-full bg-muted grid place-items-center text-[10px] text-muted-foreground">
                1080×1080
              </div>
              <div className="flex-1 space-y-2">
                <p className="font-semibold border-b border-foreground/40 pb-1 inline-block pr-8">
                  {t.name}
                </p>
                <p className="text-xs text-foreground/80">天賦代碼：{t.code}</p>
                <p className="text-xs text-foreground/80">權威領域：{t.area}</p>
                <div className="flex gap-2 pt-1">
                  <button className="px-3 py-1 rounded bg-muted text-xs">前往社群</button>
                  <Link
                    to="/teachers/$id"
                    params={{ id: String(t.id) }}
                    className="px-3 py-1 rounded bg-foreground text-background text-xs"
                  >
                    立即預約
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="pb-20 flex items-center justify-center gap-2">
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
    </SiteLayout>
  );
}
