import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/courses/")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: "課程資訊 | MMT 天賦系統" },
      { name: "description", content: "瀏覽 MMT 天賦系統的師資前導初階課與專業課程列表。" },
    ],
  }),
});

const courses = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i + 1),
  title: "讀懂你的人生策略",
  subtitle: "【師資前導初階課】",
  price: "NT$38,000",
}));

function CoursesPage() {
  return (
    <SiteLayout>
      {/* Banner */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-widest">課程資訊</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {courses.map((c) => (
            <div key={c.id} className="space-y-4">
              <Link to="/courses/$id" params={{ id: c.id }} className="block">
                <div className="aspect-[4/3] rounded-xl bg-muted hover:bg-muted/80 transition-colors" />
              </Link>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{c.subtitle}</p>
                <Link to="/courses/$id" params={{ id: c.id }} className="block">
                  <h3 className="text-lg font-semibold hover:underline">{c.title}</h3>
                </Link>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-base">{c.price}</span>
                  <Link
                    to="/courses/$id"
                    params={{ id: c.id }}
                    className="px-4 py-1.5 rounded-md bg-foreground text-background text-sm hover:bg-foreground/90"
                  >
                    立即選購
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
