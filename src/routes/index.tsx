import { createFileRoute, Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MMT 天賦系統 | 人際關係探索分析" },
      {
        name: "description",
        content:
          "MMT 是一套結合數字排序、心理學與關係原型分析的人際系統科技，協助你看懂人際中的隱性結構。",
      },
    ],
  }),
});

const talentCards = [
  { tag: "啟動發展", desc: "職人賦能，天賦加乘" },
  { tag: "專業課程", desc: "主題課程學分班，個案解讀師資班" },
  { tag: "個人品牌", desc: "協助打造最適合自己的商業模式" },
  { tag: "陪跑教練", desc: "手把手教練，組資共學圈" },
];

const courses = [
  { id: "1", title: "讀懂你的人生策略", subtitle: "【師資前導初階課】", price: "NT$38,000" },
  { id: "2", title: "讀懂你的人生策略", subtitle: "【師資前導初階課】", price: "NT$38,000" },
  { id: "3", title: "讀懂你的人生策略", subtitle: "【師資前導初階課】", price: "NT$38,000" },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-[34px] font-medium leading-[1.6] tracking-wide">
            MMT是一套結合數字排序、<br />
            心理學與關係原型分析的<br />
            人際系統科技。
          </h1>
          <p className="text-[13px] leading-[2] text-muted-foreground max-w-md">
            透過專利模型，我們只需輸入你的出生年月日，即可運算出22種人格特質，建構出專屬的關係設計圖。以星座般籠統為象限語言，結合心理學的深層視角，描繪出個體在合作、溝通與情感中的互動模式。無論是領導團隊、修復關係、提升親子理解，MMT幫助你看懂人際中的隱性結構。情感變得可解釋，關係變得可優化，讓理解成為一種精準能力。
          </p>
        </div>
        <div className="aspect-square w-full max-w-md mx-auto rounded-3xl bg-muted grid place-items-center">
          <div className="text-center text-muted-foreground">
            <p className="text-xl">創辦人照片</p>
            <p className="text-xs mt-2">(去背)</p>
          </div>
        </div>
      </section>

      {/* Quick Test */}
      <section id="quick-test" className="bg-muted/60 py-20 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex justify-center -mb-6 relative z-10">
            <span className="px-8 py-2.5 rounded-full bg-foreground text-background text-sm shadow-md">
              快速測試分析
            </span>
          </div>
          <div className="bg-muted rounded-3xl p-10 pt-14">
            <div className="bg-background/60 rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <Label className="text-sm">姓名</Label>
                <Input placeholder="輸入文字" className="bg-background rounded-md" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">出生年月日</Label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <Input className="bg-background rounded-md" />
                    <span className="text-sm">年</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input className="bg-background rounded-md" />
                    <span className="text-sm">月</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input className="bg-background rounded-md" />
                    <span className="text-sm">日</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">關係分類</Label>
                <Input placeholder="(請必填)" className="bg-background rounded-md" />
              </div>
              <div className="flex justify-end items-center gap-3 pt-4">
                <span className="text-base">立即測算</span>
                <Link
                  to="/result"
                  className="w-9 h-9 rounded-full bg-foreground text-background grid place-items-center hover:bg-foreground/90"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent System */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide">MMT天賦系統</h2>
        <p className="text-sm text-muted-foreground leading-[2] mb-14 max-w-2xl">
          將協助你理解自己的天賦優勢、心智模式、關係經營！
          <br />
          覺察並且知曉，進而肯定自己的價值在每個人生角色中，
          <br />
          不慌不忙的找到順應之流。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {talentCards.map((c, i) => (
            <div key={i} className="space-y-5">
              <div className="aspect-square rounded-xl bg-muted" />
              <div className="text-center space-y-3">
                <span className="inline-block px-5 py-1.5 rounded-md bg-foreground text-background text-sm">
                  {c.tag}
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="bg-muted/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide">課程資訊</h2>
          <p className="text-sm text-muted-foreground leading-[2] mb-14 max-w-2xl">
            將協助你理解自己的天賦優勢、心智模式、關係經營！
            <br />
            覺察並且知曉，進而肯定自己的價值在每個人生角色中，
            <br />
            不慌不忙的找到順應之流。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((c) => (
              <Link
                key={c.id}
                to="/courses/$id"
                params={{ id: c.id }}
                className="space-y-4 group"
              >
                <div className="aspect-[4/3] rounded-xl bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                <div className="space-y-1.5">
                  <p className="text-xs text-muted-foreground">{c.subtitle}</p>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-base">{c.price}</span>
                    <span className="px-4 py-1.5 rounded-md border border-foreground/40 text-sm group-hover:bg-foreground group-hover:text-background transition-colors">
                      立即選購
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 flex items-center gap-10 flex-wrap">
          <h2 className="text-3xl font-semibold tracking-wide">合作企業</h2>
          <div className="flex gap-5 flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-20 h-20 rounded-full bg-background border border-border" />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
