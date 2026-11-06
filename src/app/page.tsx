import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DoorOpen,
  Flame,
  Hammer,
  Layers,
  Mail,
  MapPin,
  Paintbrush,
  Phone,
  Pickaxe,
  SquareStack,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WorkGallery, type WorkItem } from "@/components/work-gallery";

// Public marketing landing for F2L Engineering Pte. Ltd. Brand: deep navy + gold.
// Static — no backend, no auth. The internal tracker lives at /dashboard (via /login).

const PHONE = "+65 8213 1258";
const PHONE_HREF = "tel:+6582131258";
const EMAIL = "sales@f2lengineering.com";
const ADDRESS = "11 Sam Leong Road, #01-12, Trio, Singapore 207903";
const MAP_HREF =
  "https://maps.google.com/?q=11+Sam+Leong+Road+Trio+Singapore+207903";

const STATS = [
  { value: "150+", label: "Projects completed" },
  { value: "16+", label: "Years experience" },
  { value: "7", label: "Core services" },
];

const SERVICES = [
  { icon: Hammer, name: "Renovation", desc: "Complete overhauls for residential and commercial spaces." },
  { icon: Pickaxe, name: "Demolition", desc: "Safe, efficient, environmentally conscious demolition." },
  { icon: Flame, name: "Floor Heating", desc: "Advanced systems for ultimate comfort and efficiency." },
  { icon: Layers, name: "Vinyl Flooring & Carpet", desc: "Stylish, durable flooring tailored to your space." },
  { icon: Paintbrush, name: "Painting", desc: "Professional finishes that revitalise any room." },
  { icon: SquareStack, name: "Ceiling & Partition", desc: "Custom ceiling and partition work for real functionality." },
  { icon: DoorOpen, name: "Glass Door & Panel", desc: "Elegant glass installations for a modern aesthetic." },
];

const WORK: WorkItem[] = [
  { category: "Renovation", icon: "hammer", src: "/work/renovation-1.jpg", from: "#16263a", to: "#0e1a26" },
  { category: "Demolition", icon: "pickaxe", src: "/work/demolition-1.jpg", from: "#1f2937", to: "#0f172a" },
  { category: "Floor Heating", icon: "flame", src: "/work/floor-heating-1.jpg", from: "#8a6d1f", to: "#5a4712" },
  { category: "Vinyl & Carpet", icon: "layers", src: "/work/vinyl-carpet-1.jpg", from: "#234152", to: "#0e1a26" },
  { category: "Painting", icon: "paintbrush", src: "/work/painting-1.jpg", from: "#b4894a", to: "#7a5a26" },
  { category: "Ceiling & Partition", icon: "partition", src: "/work/ceiling-partition-1.jpg", from: "#1c2f44", to: "#101c2b" },
  { category: "Glass Door & Panel", icon: "glass", src: "/work/glass-1.jpg", from: "#2a4a5a", to: "#13212c" },
];

const WHY = [
  "Client-focused approach on every project",
  "Quality craftsmanship and modern solutions",
  "Meticulous attention to detail",
  "Years of hands-on experience and technical expertise",
  "Clear communication, start to finish",
  "Results that exceed expectations",
];

const NAVY = "#0e1a26";
const GOLD = "#c4a052";

export default function LandingPage() {
  const year = new Date().getFullYear();

  return (
    <div className="scroll-smooth bg-white text-slate-900">
      {/* ── Header ───────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 border-b border-white/10"
        style={{ background: `${NAVY}f2`, backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-mark.png" alt="" width={36} height={36} className="size-9 rounded-lg" />
            <span className="font-bold text-white text-lg tracking-tight">F2L Engineering</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Our work</a>
            <a href="#why" className="hover:text-white transition-colors">Why us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full text-sm font-semibold text-[#0e1a26] transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c4a052]"
            style={{ background: GOLD }}
          >
            Get a Quote
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex items-center min-h-[88vh]"
        style={{ background: `radial-gradient(ellipse 130% 110% at 65% -20%, #1e3348 0%, ${NAVY} 58%)` }}
      >
        {/* Subtle gold grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(196,160,82,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,82,0.055) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        {/* Logo watermark */}
        <Image
          src="/logo-mark.png"
          alt=""
          width={520}
          height={520}
          aria-hidden
          className="pointer-events-none select-none absolute -right-16 -top-10 w-[26rem] max-w-none opacity-[0.05]"
        />

        <div className="relative mx-auto max-w-6xl px-4 lg:px-8 py-20 lg:py-16 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: copy ── */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 mb-8"
              style={{ borderColor: `${GOLD}44`, background: `${GOLD}14` }}
            >
              <span className="size-1.5 rounded-full" style={{ background: GOLD }} />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
                Singapore · Renovation & Fit-out Specialists
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.07] text-white">
              Delivering excellence in{" "}
              <span style={{ color: GOLD }}>renovation &amp; fit-out</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-md">
              Your trusted partner for quality craftsmanship and innovative solutions —
              renovation, demolition, flooring, painting, partitions and custom glass work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full font-semibold text-[#0e1a26] transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1a26] focus-visible:ring-[#c4a052]"
                style={{ background: GOLD }}
              >
                Get a Quote
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1a26] focus-visible:ring-white/60"
              >
                Our Services
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8">
              {STATS.map(({ value, label }) => {
                const num = value.replace("+", "");
                const hasPlus = value.includes("+");
                return (
                  <div key={label}>
                    <p className="text-3xl font-bold text-white">
                      {num}
                      {hasPlus && <span style={{ color: GOLD }}>+</span>}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: photo mosaic (desktop only) ── */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* Main: modern interior renovation */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                alt="Renovation work in progress"
                fill
                sizes="(min-width: 1024px) 50vw, 0px"
                className="object-cover"
                priority
              />
              <span className="absolute inset-0 bg-gradient-to-br from-transparent to-black/25" aria-hidden />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Painting / interior finish */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80"
                  alt="Interior painting service"
                  fill
                  sizes="(min-width: 1024px) 25vw, 0px"
                  className="object-cover"
                />
              </div>
              {/* Glass partition / modern office */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                  alt="Modern glass partition fit-out"
                  fill
                  sizes="(min-width: 1024px) 25vw, 0px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="scroll-mt-20 mx-auto max-w-6xl px-4 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>
            What we do
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">Our services</h2>
          <p className="mt-3 text-slate-600 text-lg">
            End-to-end construction and fit-out services, delivered with precision.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-[#c4a052] hover:shadow-[0_8px_30px_-6px_rgba(196,160,82,0.2)] hover:bg-[#fdfbf7]"
            >
              <span
                className="grid place-items-center size-12 rounded-xl mb-4 transition-colors duration-200 group-hover:bg-[#f0e5c8]"
                style={{ background: "#f6efdd", color: "#8a6d1f" }}
              >
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="mt-1.5 text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our work ─────────────────────────────────────────────── */}
      <section id="work" className="scroll-mt-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>
              Portfolio
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold">Our work</h2>
            <p className="mt-3 text-slate-600 text-lg">
              A look at the spaces we&apos;ve transformed across Singapore.
            </p>
          </div>
          <div className="mt-12">
            <WorkGallery items={WORK} />
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://app.f2lengineering.com/portfolio"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full font-semibold text-white transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0e1a26]"
              style={{ background: NAVY }}
            >
              View our completed projects
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────────── */}
      <section id="why" className="scroll-mt-20" style={{ background: NAVY }}>
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>
              Why choose us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why F2L Engineering</h2>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              We transform spaces through expertise, dedication and a client-focused
              approach — ensuring results that exceed expectations on every project.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {WHY.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-200">
                <CheckCircle2 className="size-5 mt-0.5 shrink-0" style={{ color: GOLD }} aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 mx-auto max-w-6xl px-4 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>
              Get in touch
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold">Start your next project</h2>
            <p className="mt-3 text-slate-600 text-lg max-w-md">
              Ready to begin? Get in touch today for a consultation or a no-obligation quote.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-full font-semibold text-white transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0e1a26]"
              style={{ background: NAVY }}
            >
              <Phone className="size-4" aria-hidden />
              Call {PHONE}
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 divide-y divide-slate-200 overflow-hidden">
            <a href={PHONE_HREF} className="flex items-center gap-4 p-5 hover:bg-slate-50 transition-colors">
              <span className="grid place-items-center size-11 rounded-xl shrink-0" style={{ background: "#f6efdd", color: "#8a6d1f" }}>
                <Phone className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-500">Phone</span>
                <span className="block font-semibold">{PHONE}</span>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-5 hover:bg-slate-50 transition-colors">
              <span className="grid place-items-center size-11 rounded-xl shrink-0" style={{ background: "#f6efdd", color: "#8a6d1f" }}>
                <Mail className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-500">Email</span>
                <span className="block font-semibold truncate">{EMAIL}</span>
              </span>
            </a>
            <a href={MAP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 hover:bg-slate-50 transition-colors">
              <span className="grid place-items-center size-11 rounded-xl shrink-0" style={{ background: "#f6efdd", color: "#8a6d1f" }}>
                <MapPin className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-500">Visit us</span>
                <span className="block font-semibold">{ADDRESS}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 p-5">
              <span className="grid place-items-center size-11 rounded-xl shrink-0" style={{ background: "#f6efdd", color: "#8a6d1f" }}>
                <Clock className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-500">Hours</span>
                <span className="block font-semibold">Mon–Sat, 9am–6pm</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{ background: NAVY }}>
        <div className="mx-auto max-w-6xl px-4 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-mark.png" alt="" width={32} height={32} className="size-8 rounded-lg" />
            <span className="font-semibold text-white">F2L Engineering Pte. Ltd.</span>
          </div>
          <p className="text-sm text-slate-400">© {year} F2L Engineering Pte. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
