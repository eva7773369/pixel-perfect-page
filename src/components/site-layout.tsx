import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ChevronDown, Facebook, Instagram, MessageCircle, MousePointerClick } from "lucide-react";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const navItems: NavItem[] = [
  { label: "首頁", to: "/" },
  { label: "關於我們", to: "/about" },
  { label: "課程資訊", to: "/courses" },
  {
    label: "一對一諮詢",
    to: "/consultation",
    children: [
      { label: "預約一對一諮詢", to: "/consultation" },
      { label: "師資介紹", to: "/teachers" },
    ],
  },
  { label: "學員真實分享", to: "/testimonials" },
];


export function Logo({ size = "default" }: { size?: "default" | "lg" }) {
  const wrap = size === "lg" ? "w-14 h-14" : "w-9 h-9";
  return (
    <div className={`${wrap} rounded-full border border-foreground/70 grid place-items-center`}>
      <div className="w-1/2 h-1/2 rounded-full bg-foreground/80" />
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo />
          <div className="hidden sm:block leading-tight">
            <p className="text-base font-bold tracking-wider">MMT</p>
            <p className="text-[10px] text-muted-foreground tracking-wider">
              Mercury Mental Thinking
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navItems.map((n) =>
            n.children ? (
              <div key={n.label} className="relative group">
                <Link
                  to={n.to}
                  className="inline-flex items-center gap-1 hover:text-foreground/60 transition-colors"
                  activeProps={{ className: "text-foreground font-semibold" }}
                >
                  {n.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
                  <div className="min-w-[140px] rounded-md border border-border bg-background shadow-md py-2">
                    {n.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="block px-4 py-2 text-sm hover:bg-muted whitespace-nowrap"
                        activeProps={{ className: "font-semibold" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.label}
                to={n.to}
                className="hover:text-foreground/60 transition-colors"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" className="rounded-md">
            登入會員
          </Button>
          <Button
            asChild
            size="sm"
            className="rounded-md bg-foreground text-background hover:bg-foreground/90"
          >
            <Link to="/" hash="quick-test">快速分析</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.42_0_0)] text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-[auto_1fr_1fr_auto] gap-10 items-start">
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-full border-2 border-background grid place-items-center">
            <div className="w-10 h-10 rounded-full bg-background/90" />
          </div>
          <p className="text-sm font-bold tracking-wider">MMT</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold mb-3">聯絡資訊</p>
          <p>一水營柢域有限公司</p>
          <p>客服信箱：refresh3141@gmail.com</p>
          <p>服務時間：週一至週五 9:00 ~ 18:00</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold mb-3">快速導覽</p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
            {navItems.map((n) => (
              <Link key={n.label} to={n.to} className="hover:underline">
                {n.label}
              </Link>
            ))}
            <a href="#" className="hover:underline">
              登入會員
            </a>
          </div>
        </div>
        <div className="flex md:flex-col gap-3">
          {[MessageCircle, Facebook, Instagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full bg-background/15 hover:bg-background/25 grid place-items-center"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-background/15">
        <p className="mx-auto max-w-7xl px-6 py-4 text-xs text-background/70">
          ©2026 MMT天賦系統｜人際關係探索分析 ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

export function FloatingCTA() {
  return (
    <button className="fixed bottom-6 right-6 w-20 h-20 rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-transform flex flex-col items-center justify-center gap-1 z-50">
      <MousePointerClick className="w-6 h-6" />
      <span className="text-xs font-medium">快速分析</span>
    </button>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingCTA />
    </div>
  );
}
