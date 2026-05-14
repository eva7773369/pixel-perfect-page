import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarCheck, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/teachers/$id")({
  component: TeacherDetailPage,
  head: ({ params }) => ({
    meta: [
      { title: `師資 ${params.id} | MMT 天賦系統` },
      {
        name: "description",
        content: "查看 MMT 協會師資的個人簡介、權威領域與預約資訊。",
      },
    ],
  }),
});

const areas = ["個人發展", "團隊建構", "親子關係", "職涯規劃"];

function TeacherDetailPage() {
  const { id } = Route.useParams();

  return (
    <SiteLayout>
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-widest">
            師資介紹
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link
          to="/teachers"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> 返回師資列表
        </Link>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="w-full aspect-square rounded-2xl bg-muted grid place-items-center text-xs text-muted-foreground">
            頭像 1080×1080 px
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-2">師資編號 #{id}</p>
              <h2 className="text-3xl font-semibold border-b border-foreground/40 pb-2 inline-block pr-10">
                艾昕
              </h2>
              <p className="mt-3 text-sm text-foreground/80">
                天賦代碼：4.8.9.10.10.10/導5
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">簡介</p>
              <p className="text-sm leading-7 text-foreground/80">
                專注於 MMT 天賦系統解讀超過十年，協助上千位學員透過天賦代碼釐清個人特質與
                人際互動模式。擅長以溫柔而精準的方式陪伴你看見自己，找到最適合的發展節奏。
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">權威領域</p>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="px-3 py-1 rounded-full bg-muted text-xs text-foreground/80"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">服務時段</p>
              <p className="text-sm text-foreground/80">週一至週五 10:00 ~ 20:00</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                variant="outline"
                className="rounded-md gap-2"
              >
                <MessageCircle className="w-4 h-4" /> 前往社群
              </Button>
              <Button className="rounded-md bg-foreground text-background hover:bg-foreground/90 gap-2">
                <CalendarCheck className="w-4 h-4" /> 立即預約
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
