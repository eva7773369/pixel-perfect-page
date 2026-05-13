import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/courses/$id")({
  component: CourseDetailPage,
  head: () => ({
    meta: [
      { title: "讀懂你的人生策略 | MMT 課程" },
      {
        name: "description",
        content: "MMT 師資前導初階課：2 天學會看懂你的天賦應用設計圖，掌握22張人格設計。",
      },
    ],
  }),
});

function CourseDetailPage() {
  const [tab, setTab] = useState<"start" | "intro">("intro");

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div className="aspect-[4/3] rounded-xl bg-muted grid place-items-center text-xs text-muted-foreground">
          （底圖1920×1080px）
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xl">【師資前導初階課】</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
              讀懂你的人生策略
            </h1>
          </div>
          <p className="text-sm text-muted-foreground leading-[2]">
            將協助你理解自己的天賦優勢、心智模式、關係經營！
            <br />
            覺察並且和解，進而肯定自己的價值在每個人生角色中，
            <br />
            不慌不忙的找到順應之流。
          </p>

          <div className="pt-4 space-y-4">
            <button className="w-full flex items-center justify-between border border-border rounded-md px-4 py-3 text-sm bg-background hover:bg-muted/40">
              <span>場次選擇</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between gap-4">
              <span className="text-2xl font-medium">NT$38,000</span>
              <button className="px-6 py-2.5 rounded-md bg-foreground text-background text-sm hover:bg-foreground/90">
                立即選購
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-5xl px-6 pt-10">
        <div className="flex items-center gap-8 text-base border-b border-border pb-4">
          <button
            onClick={() => setTab("start")}
            className={`${
              tab === "start" ? "text-foreground font-semibold" : "text-muted-foreground"
            } hover:text-foreground transition-colors`}
          >
            立即開始
          </button>
          <span className="text-muted-foreground">|</span>
          <button
            onClick={() => setTab("intro")}
            className={`${
              tab === "intro" ? "text-foreground font-semibold" : "text-muted-foreground"
            } hover:text-foreground transition-colors`}
          >
            完整介紹
          </button>
        </div>

        {/* Body */}
        <div className="py-12 space-y-6 text-sm leading-[2.2]">
          <p>課程講師：MMT官方講師</p>
          <p>課程地點：將於開課前兩週信件與簡訊通知，請密切注意</p>

          <div className="pt-4 space-y-4">
            <p>2天學會看懂你的 MMT 天賦應用設計圖</p>
            <p>從風火水土四大能量，認識你的思維模式與行動驅動力。</p>
          </div>

          <div className="pt-4 space-y-4">
            <p>從22張人格設計，掌握你與生俱來的外在天賦優勢。</p>
            <p>讓你從「我好像不適合」的模糊感，走向「原來這就是我」的清晰與自信！</p>
          </div>

          <div className="pt-4 space-y-3">
            <p>學會看懂自己，也看懂他人，從此人際溝通、個人定位，都更有方向!</p>
            <p>📌 MMT不是幫你貼標籤，而是教你讀懂自己這張地圖。</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
