import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/consultation")({
  component: ConsultationPage,
  head: () => ({
    meta: [
      { title: "一對一諮詢 | MMT 天賦系統" },
      {
        name: "description",
        content: "MMT 一對一商業發展策略諮詢，協助你看見天賦、定位人生、做出選擇。",
      },
    ],
  }),
});

const topics = [
  "個人天賦發展｜想了解自己的潛能強項，卻總覺得才華沒有被看見？",
  "情感經營｜關係裡常重複受傷，卻說不上問題出在哪？",
  "職場優勢探索｜想換工作或創業，卻對自己的定位不夠清晰？",
  "親子教養困境｜孩子不聽話、容易情緒爆炸，怎麼說都說不動？",
];

const benefits = [
  "看見自己的獨特天賦設計與行為模式",
  "不再用「別人的成功模板」要求自己",
  "透過MMT系統分析，明確定位你的天賦強項",
  "找到阻礙你前進的內在卡點與陰影盲區",
  "解讀潛藏的決策慣性與情緒困擾",
  "看懂為何你總在同樣的地方卡關",
  "打造屬於你的人生策略與解方建議",
  "依照你當下情境給出具體行動方向",
  "用能量與天賦強項帶你破局而出",
  "釐清個人定位，對焦未來方向",
  "幫助你在混亂中建立選擇標準",
  "把天賦優勢轉化成具體價值與影響力",
  "專屬你的諮詢語言轉譯與溝通建議",
  "不只是聽你說，更教你怎麼說服自己與他人",
  "特別適合需要經營人際關係、品牌、自我影響力者",
];

function ConsultationPage() {
  const [tab, setTab] = useState<"start" | "intro">("intro");

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div className="aspect-[4/3] rounded-xl bg-muted grid place-items-center text-xs text-muted-foreground">
          （底圖1920×1080px）
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xl">【一對一諮詢】</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">商業發展策略</h1>
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
              <span>預約時段</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between gap-4">
              <span className="text-2xl font-medium">NT$36,000</span>
              <button className="px-6 py-2.5 rounded-md bg-foreground text-background text-sm hover:bg-foreground/90">
                立即選購
              </button>
            </div>
          </div>
        </div>
      </section>

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

        <div className="py-12 space-y-10 text-sm leading-[2.2]">
          <div className="space-y-3">
            <p className="font-semibold text-base">⭐ 適合你來談談的主題：</p>
            {topics.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-base">⭐ 諮詢能帶給你的五大好處：</p>
            {benefits.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
