import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, GraduationCap, MapPin, Cake, Waves, Sparkles, Mic, Users, Heart } from "lucide-react";
import hero from "@/assets/hero-makkah.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "روضة الحلبي | السيرة الذاتية" },
      { name: "description", content: "السيرة الذاتية لروضة الحلبي — معلمة قرآن كريم وتجويد من مكة المكرمة، خريجة دبلوم الدراسات القرآنية." },
      { property: "og:title", content: "روضة الحلبي | السيرة الذاتية" },
      { property: "og:description", content: "معلمة قرآن كريم وتجويد من مكة المكرمة، خريجة دبلوم الدراسات القرآنية." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { id: "about", label: "نبذة" },
  { id: "experience", label: "الخبرة" },
  { id: "education", label: "التعليم" },
  { id: "hobbies", label: "الهوايات" },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-bold tracking-widest text-rose">{kicker}</p>
      <h2 className="mt-1 font-display text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-gold" />
    </div>
  );
}

function Index() {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-ink/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="font-display text-xl font-bold text-gradient-gold">روضة</a>
          <ul className="flex gap-1 overflow-x-auto text-sm">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="block whitespace-nowrap rounded-full px-3 py-1.5 font-medium text-ink-foreground/85 transition-colors hover:bg-gold hover:text-ink"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
        <img src={hero} alt="مكة المكرمة وقت الغروب" width={1280} height={1600} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-32">
          <p className="animate-rise text-sm font-bold tracking-widest text-gold-soft">السيرة الذاتية</p>
          <h1 className="animate-rise mt-3 font-display text-6xl font-bold leading-tight text-gradient-gold md:text-8xl">
            روضة الحلبي
          </h1>
          <p className="animate-rise mt-4 max-w-xl text-lg leading-relaxed text-ink-foreground/90 md:text-xl">
            معلمة للقرآن الكريم، أحب تحفيظ الأطفال كتاب الله وتعليم أحكام التجويد والتلاوة.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/50 px-4 py-2 text-sm text-ink-foreground">
              <MapPin className="h-4 w-4 text-gold" /> مكة المكرمة
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/50 px-4 py-2 text-sm text-ink-foreground">
              <Cake className="h-4 w-4 text-gold" /> 21 سنة
            </span>
          </div>
          <a href="#about" className="animate-rise mt-10 inline-flex rounded-full bg-gradient-gold px-7 py-3 font-bold text-ink shadow-gold transition-transform hover:-translate-y-0.5">
            تعرّف عليّ
          </a>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-5">
        {/* About */}
        <section id="about" className="py-20">
          <SectionTitle kicker="من أنا" title="نبذة عني" />
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <p className="text-lg leading-loose text-foreground/85">
              أنا روضة الحلبي، أبلغ من العمر 21 عامًا، وأسكن في مكة المكرمة. تخرجت من معهد سفرة بدبلوم الدراسات
              القرآنية، وأعمل حاليًا في تحفيظ القرآن الكريم للأطفال، وأقدّم حلقات في التجويد والتلاوة. أؤمن بأن
              تعليم كتاب الله رسالة عظيمة، وأسعى لغرس حبه في قلوب طلابي بأسلوب لطيف ومحفّز.
            </p>
            <dl className="grid gap-3 rounded-2xl bg-card p-6 shadow-elegant">
              {[
                ["الاسم", "روضة الحلبي"],
                ["العمر", "21 سنة"],
                ["السكن", "مكة المكرمة"],
                ["المؤهل", "دبلوم الدراسات القرآنية"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="font-bold text-primary">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      {/* Experience */}
      <section id="experience" className="relative overflow-hidden bg-gradient-ink py-20">
        <div className="pattern-stars absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-5xl px-5">
          <div className="mb-8">
            <p className="text-sm font-bold tracking-widest text-gold-soft">ماذا أعمل</p>
            <h2 className="mt-1 font-display text-3xl font-bold text-ink-foreground md:text-4xl">الخبرة العملية</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-gold" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { icon: Users, title: "معلمة تحفيظ القرآن للأطفال", desc: "أعلّم الأطفال حفظ القرآن الكريم ومراجعته بأسلوب محبّب يناسب أعمارهم.", tag: "حاليًا" },
              { icon: Mic, title: "حلقات التجويد والتلاوة", desc: "أدرّس حلقات في أحكام التجويد وتحسين التلاوة وإتقان مخارج الحروف.", tag: "حاليًا" },
            ].map(({ icon: Icon, title, desc, tag }) => (
              <article key={title} className="rounded-2xl border border-gold/25 bg-ink/60 p-6 backdrop-blur transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-ink shadow-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-rose px-3 py-1 text-xs font-bold text-ink-foreground">{tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gold-soft">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-foreground/80">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-5">
        {/* Education */}
        <section id="education" className="py-20">
          <SectionTitle kicker="مسيرتي" title="التعليم" />
          <div className="relative rounded-2xl border-r-4 border-gold bg-card p-7 shadow-elegant">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <GraduationCap className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-primary">دبلوم الدراسات القرآنية</h3>
                <p className="mt-1 font-bold text-rose">معهد سفرة</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  دراسة متخصصة في علوم القرآن الكريم وحفظه وتجويده، أهّلتني لتعليمه وتدريسه.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section id="hobbies" className="pb-24">
          <SectionTitle kicker="ما أحب" title="الهوايات" />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: Waves, title: "السباحة", desc: "رياضة تمنحني النشاط والصفاء." },
              { icon: BookOpen, title: "القراءة", desc: "نافذتي للمعرفة وتوسيع الآفاق." },
              { icon: Sparkles, title: "ركوب الخيل", desc: "شغف بالفروسية والثقة والانطلاق." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl bg-accent p-6 text-center transition-all hover:-translate-y-1 hover:shadow-elegant">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-card text-rose transition-colors group-hover:bg-gradient-gold group-hover:text-ink">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-accent-foreground">{title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-ink py-8 text-center text-sm text-ink-foreground/70">
        <p className="flex items-center justify-center gap-2">
          صُمّم بحب <Heart className="h-4 w-4 fill-rose text-rose" /> روضة الحلبي — مكة المكرمة
        </p>
      </footer>
    </div>
  );
}
