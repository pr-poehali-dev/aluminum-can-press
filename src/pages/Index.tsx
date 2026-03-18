import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const PRODUCT_IMAGE = "https://cdn.poehali.dev/projects/e7b27556-9802-45c4-ab36-848c3ad550a1/files/27ac3fd3-9128-4946-b96d-7259088023ce.jpg";

const NAV_LINKS = [
  { label: "О товаре", href: "#about" },
  { label: "Характеристики", href: "#specs" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Отзывы", href: "#reviews" },
];

const SPECS = [
  { label: "Тип", value: "Ручной механический" },
  { label: "Материал корпуса", value: "Сталь + ABS пластик" },
  { label: "Совместимые банки", value: "0.33 л и 0.5 л" },
  { label: "Степень сжатия", value: "До 5 раз" },
  { label: "Крепление", value: "Настенное / на стол" },
  { label: "Нагрузка на рычаг", value: "Не более 5 кг" },
  { label: "Габариты", value: "30 × 12 × 8 см" },
  { label: "Вес", value: "0.85 кг" },
];

const BENEFITS = [
  {
    icon: "Zap",
    title: "Мгновенное сжатие",
    desc: "Один движение рычага — банка сжата. Никаких усилий, никакой возни.",
  },
  {
    icon: "Shield",
    title: "Сталь не ломается",
    desc: "Корпус из толстостенной стали выдержит тысячи циклов без деформации.",
  },
  {
    icon: "Home",
    title: "Удобно дома",
    desc: "Компактный размер, простая установка на стену или край стола за 5 минут.",
  },
  {
    icon: "Recycle",
    title: "Польза для экологии",
    desc: "Сжатые банки занимают в 5 раз меньше места — удобнее сдавать на переработку.",
  },
  {
    icon: "Wallet",
    title: "Экономия пространства",
    desc: "Мусорное ведро опустошается реже. Меньше запахов, больше чистоты.",
  },
  {
    icon: "Wrench",
    title: "Не требует обслуживания",
    desc: "Простая конструкция без электроники — ничего не сломается и не разрядится.",
  },
];

const REVIEWS = [
  {
    name: "Алексей К.",
    city: "Москва",
    rating: 5,
    text: "Покупал скептически, но результат удивил! Банки сплющиваются за секунду. Установил на стену рядом с мусоркой — очень удобно. Качество металла отличное, ничего не люфтит.",
    date: "15 февраля 2026",
  },
  {
    name: "Наталья П.",
    city: "Краснодар",
    rating: 5,
    text: "Взяла для мужа — он был в восторге. Теперь занимает этим детей :) Серьёзно, это весело и полезно. Банки сдаём на переработку, места для них теперь нужно в 5 раз меньше.",
    date: "3 марта 2026",
  },
  {
    name: "Дмитрий Л.",
    city: "Санкт-Петербург",
    rating: 4,
    text: "Крепкая штука. Стоит у меня на даче уже два сезона — всё отлично. Хотелось бы чуть длиннее рычаг, но в целом претензий нет. За эту цену — однозначно рекомендую.",
    date: "22 января 2026",
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0d0b] text-white overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f0d0b]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span className="font-oswald text-xl font-bold tracking-widest uppercase">
            Пресс<span style={{ color: "var(--orange)" }}>Мастер</span>
          </span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-roboto text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              className="font-oswald text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded text-[#0f0d0b]"
              style={{ background: "var(--orange)" }}
            >
              Купить
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f0d0b]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-roboto text-sm text-white/80 uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              className="font-oswald text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded text-center text-[#0f0d0b]"
              style={{ background: "var(--orange)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Купить
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(255,107,26,0.12) 0%, transparent 60%), linear-gradient(135deg, #0f0d0b 0%, #1a1510 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-px opacity-20"
            style={{ background: "linear-gradient(to right, transparent, var(--orange), transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-px opacity-10"
            style={{ background: "linear-gradient(to right, transparent, var(--orange), transparent)" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in-up">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-roboto font-medium tracking-widest uppercase mb-6"
              style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--orange)" }} />
              Ручной механический пресс
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none tracking-tight uppercase mb-6">
              Сожми банку
              <br />
              <span style={{ color: "var(--orange)" }}>в секунду</span>
            </h1>

            <p className="font-roboto text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Ручной механический пресс для алюминиевых банок 0.33 и 0.5 л.
              Стальная конструкция, простая установка, без батареек и проводов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                id="order"
                href="#order"
                className="font-oswald text-base font-semibold tracking-widest uppercase px-8 py-4 rounded text-[#0f0d0b] text-center glow-orange transition-transform hover:scale-105"
                style={{ background: "var(--orange)" }}
              >
                Заказать сейчас
              </a>
              <a
                href="#about"
                className="font-oswald text-base font-medium tracking-widest uppercase px-8 py-4 rounded border text-white/80 hover:text-white text-center transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                Подробнее
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8">
              {[["5 лет", "гарантия"], ["∞", "циклов"], ["5×", "сжатие"]].map(([val, lab]) => (
                <div key={lab} className="text-center">
                  <div className="font-oswald text-2xl font-bold" style={{ color: "var(--orange)" }}>{val}</div>
                  <div className="font-roboto text-xs text-white/40 uppercase tracking-widest">{lab}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-fade-in">
            <div
              className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--orange)" }}
            />
            <div className="relative z-10 hover-scale">
              <img
                src={PRODUCT_IMAGE}
                alt="Пресс для алюминиевых банок"
                className="w-full max-w-sm rounded-2xl object-cover shadow-2xl"
                style={{ boxShadow: "0 0 60px rgba(255,107,26,0.2)" }}
              />
              <div
                className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3 border"
                style={{
                  background: "#0f0d0b",
                  borderColor: "var(--orange)",
                  boxShadow: "0 0 20px rgba(255,107,26,0.3)",
                }}
              >
                <div className="font-oswald text-2xl font-bold" style={{ color: "var(--orange)" }}>
                  1 690 ₽
                </div>
                <div className="font-roboto text-xs text-white/50">с доставкой</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
          <span className="font-roboto text-xs tracking-widest uppercase">Листайте</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(255,107,26,0.06) 0%, transparent 60%)" }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative inline-block w-full">
                <img
                  src={PRODUCT_IMAGE}
                  alt="Пресс для банок — детали"
                  className="rounded-2xl w-full object-cover"
                  style={{ maxHeight: "460px" }}
                />
                <div
                  className="absolute -top-3 -left-3 w-full h-full rounded-2xl border opacity-30 pointer-events-none"
                  style={{ borderColor: "var(--orange)" }}
                />
              </div>
            </div>
            <div>
              <p className="font-oswald text-sm tracking-widest uppercase mb-3" style={{ color: "var(--orange)" }}>
                О товаре
              </p>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
                Меньше мусора.
                <br />
                <span style={{ color: "var(--orange)" }}>Больше порядка.</span>
              </h2>
              <p className="font-roboto text-white/60 text-base leading-relaxed mb-5">
                ПрессМастер — это механический настенный пресс для алюминиевых банок,
                созданный для удобного домашнего использования. Устанавливается один раз
                за 5 минут и работает без электричества, батареек и обслуживания.
              </p>
              <p className="font-roboto text-white/60 text-base leading-relaxed mb-8">
                Один нажим рычага — и банка сжата до 5 раз. Идеально для тех,
                кто сдаёт алюминий на переработку или просто хочет,
                чтобы мусорное ведро не заполнялось так быстро.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Подходит для банок 0.33 и 0.5 л",
                  "Стальной корпус без хрупких деталей",
                  "Настенный монтаж или крепление к столу",
                  "Гарантия 5 лет",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={18} className="mt-0.5 flex-shrink-0" style={{ color: "var(--orange)" } as React.CSSProperties} />
                    <span className="font-roboto text-sm text-white/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-24" style={{ background: "#0d0b09" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-oswald text-sm tracking-widest uppercase mb-3" style={{ color: "var(--orange)" }}>
              Технические данные
            </p>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Характеристики</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
            {SPECS.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-8 py-5 border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
                  i % 2 === 0 ? "md:border-r border-white/5" : ""
                }`}
              >
                <span className="font-roboto text-sm text-white/50 uppercase tracking-wide">{spec.label}</span>
                <span className="font-oswald text-lg font-semibold" style={{ color: "var(--orange)" }}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(255,107,26,0.08) 0%, transparent 50%)" }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-oswald text-sm tracking-widest uppercase mb-3" style={{ color: "var(--orange)" }}>
              Почему выбирают нас
            </p>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Преимущества</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="group p-8 rounded-2xl border border-white/8 hover:border-orange-500/40 transition-all duration-300 hover-scale"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,107,26,0.12)", color: "var(--orange)" }}
                >
                  <Icon name={b.icon as "Zap"} size={22} />
                </div>
                <h3 className="font-oswald text-xl font-semibold uppercase mb-3">{b.title}</h3>
                <p className="font-roboto text-sm text-white/55 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24" style={{ background: "#0d0b09" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-oswald text-sm tracking-widest uppercase mb-3" style={{ color: "var(--orange)" }}>
              Что говорят покупатели
            </p>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase">Отзывы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="p-7 rounded-2xl border border-white/8 flex flex-col gap-4 hover-scale"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      style={{ color: "var(--orange)" } as React.CSSProperties}
                    />
                  ))}
                </div>
                <p className="font-roboto text-sm text-white/70 leading-relaxed flex-1">"{r.text}"</p>
                <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-oswald text-base font-semibold">{r.name}</div>
                    <div className="font-roboto text-xs text-white/40">{r.city}</div>
                  </div>
                  <div className="font-roboto text-xs text-white/30">{r.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,26,0.15) 0%, rgba(255,107,26,0.05) 100%)",
              border: "1px solid rgba(255,107,26,0.25)",
            }}
          >
            <div
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: "var(--orange)" }}
            />
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4">Готовы заказать?</h2>
            <p className="font-roboto text-white/60 mb-8 text-lg">
              Доставка по всей России · Гарантия 5 лет · Возврат 30 дней
            </p>
            <a
              href="#order"
              className="inline-block font-oswald text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-xl text-[#0f0d0b] glow-orange transition-transform hover:scale-105"
              style={{ background: "var(--orange)" }}
            >
              Заказать за 1 690 ₽
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-oswald text-lg font-bold tracking-widest uppercase">
            Пресс<span style={{ color: "var(--orange)" }}>Мастер</span>
          </span>
          <p className="font-roboto text-xs text-white/30">© 2026 ПрессМастер. Все права защищены.</p>
          <div className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-roboto text-xs text-white/40 hover:text-white/80 transition-colors uppercase tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
