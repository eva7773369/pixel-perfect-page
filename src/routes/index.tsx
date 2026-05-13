import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

const navItems = ["首頁", "關於我們", "課程資訊", "一對一諮詢", "學員真實分享"];

const talentCards = [
  { tag: "啟動發展", desc: "職人賦能，天賦加乘" },
  { tag: "專業課程", desc: "主題課程學分班，個案解讀師資班" },
  { tag: "個人品牌", desc: "協助打造最適合自己的商業模式" },
  { tag: "陪跑教練", desc: "手把手教練，組資共學圈" },
];

const courses = [
  { title: "讀懂你的人生策略", subtitle: "【師資前導初階課】", price: "NT$38,000" },
  { title: "讀懂你的人生策略", subtitle: "【師資前導初階課】", price: "NT$38,000" },
  { title: "讀懂你的人生策略", subtitle: "【師資前導初階課】", price: "NT$38,000" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-foreground text-background grid place-items-center text-xs font-bold">
              MMT
            </div>
            <span className="text-xs text-muted-foreground hidden sm:block tracking-wider">
              Mercury Mental Thinking
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {navItems.map((n) => (
              <a key={n} href="#" className="hover:text-primary transition-colors">
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">登入會員</Button>
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
              快速分析
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
            MMT是一套結合數字排序、<br />
            心理學與關係原型分析的<br />
            人際系統科技。
          </h1>
          <p className="text-sm leading-7 text-muted-foreground max-w-md">
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
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex justify-center mb-8">
            <span className="px-6 py-2 rounded-full bg-foreground text-background text-sm">
              快速測試分析
            </span>
          </div>
          <div className="bg-card rounded-2xl shadow-sm border border-border p-8 space-y-6">
            <div className="space-y-2">
              <Label>姓名</Label>
              <Input placeholder="輸入文字" />
            </div>
            <div className="space-y-2">
              <Label>出生年月日</Label>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <Input /> <span className="text-sm">年</span>
                </div>
                <div className="flex items-center gap-2">
                  <Input /> <span className="text-sm">月</span>
                </div>
                <div className="flex items-center gap-2">
                  <Input /> <span className="text-sm">日</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>關係分類</Label>
              <Input placeholder="(請必填)" />
            </div>
            <div className="flex justify-end pt-2">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
                立即測算 →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Talent System */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">MMT天賦系統</h2>
        <p className="text-sm text-muted-foreground leading-7 mb-12 max-w-2xl">
          將協助你理解自己的天賦優勢、心智模式、關係經營！
          <br />
          覺察並且知曉，進而肯定自己的價值在每個人生角色中，
          <br />
          不慌不忙的找到順應之流。
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {talentCards.map((c, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square rounded-xl bg-muted" />
              <div className="text-center space-y-2">
                <span className="inline-block px-4 py-1 rounded-md bg-foreground text-background text-sm">
                  {c.tag}
                </span>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">課程資訊</h2>
          <p className="text-sm text-muted-foreground leading-7 mb-12 max-w-2xl">
            將協助你理解自己的天賦優勢、心智模式、關係經營！
            <br />
            覺察並且知曉，進而肯定自己的價值在每個人生角色中，
            <br />
            不慌不忙的找到順應之流。
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[4/3] rounded-xl bg-muted-foreground/30" />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{c.subtitle}</p>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base font-medium">{c.price}</span>
                    <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
                      立即選購
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center gap-8 flex-wrap">
          <h2 className="text-2xl font-semibold">合作企業</h2>
          <div className="flex gap-6 flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-20 h-20 rounded-full bg-muted" />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted-foreground/80 text-background">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-background text-foreground grid place-items-center font-bold">
              MMT
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold mb-3">聯絡資訊</p>
            <p>一水營柢域有限公司</p>
            <p>客服信箱：refresh3141@gmail.com</p>
            <p>服務時間：週一至週五 9:00 ~ 18:00</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold mb-3">快速導覽</p>
            <div className="grid grid-cols-2 gap-y-2">
              {navItems.map((n) => (
                <a key={n} href="#" className="hover:underline">{n}</a>
              ))}
              <a href="#" className="hover:underline">登入會員</a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20">
          <p className="mx-auto max-w-7xl px-6 py-4 text-xs text-background/70">
            ©2026 MMT天賦系統｜人際關係探索分析 ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Floating CTA */}
      <button className="fixed bottom-6 right-6 w-20 h-20 rounded-full bg-foreground text-background text-xs font-medium shadow-lg hover:scale-105 transition-transform">
        快速分析
      </button>
    </div>
  );
}
