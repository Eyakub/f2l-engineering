"use client";

import * as React from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  Flame,
  Hammer,
  Layers,
  Paintbrush,
  Pickaxe,
  SquareStack,
  X,
  type LucideIcon,
} from "lucide-react";

// String keys (not components) cross the server→client boundary; resolve here.
const ICONS: Record<string, LucideIcon> = {
  hammer: Hammer,
  pickaxe: Pickaxe,
  flame: Flame,
  layers: Layers,
  paintbrush: Paintbrush,
  partition: SquareStack,
  glass: DoorOpen,
};

export interface WorkItem {
  category: string;
  /** Drop a real photo in /public and set this (e.g. "/work/renovation-1.jpg"). */
  src?: string;
  from: string;
  to: string;
  icon: keyof typeof ICONS | string;
}

function tileStyle(item: WorkItem): React.CSSProperties {
  return { background: `linear-gradient(135deg, ${item.from} 0%, ${item.to} 100%)` };
}

/** Responsive project grid with a keyboard-accessible lightbox. Works with
 *  gradient placeholders today; swap in real photos via item.src later. */
export function WorkGallery({ items }: { items: WorkItem[] }) {
  const [open, setOpen] = React.useState<number | null>(null);

  const show = open !== null;
  const close = React.useCallback(() => setOpen(null), []);
  const step = React.useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  React.useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Hammer;
          return (
            <button
              key={item.category + i}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View ${item.category} work`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c4a052]"
              style={item.src ? undefined : tileStyle(item)}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={`${item.category} project`}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <Icon
                  className="absolute right-3 top-3 size-10 text-white/15 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                />
              )}
              {/* legibility scrim + label */}
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" aria-hidden />
              <span className="absolute left-3 bottom-3 right-3">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e8d6a4]">
                  Our work
                </span>
                <span className="block font-semibold text-white leading-tight">{item.category}</span>
              </span>
            </button>
          );
        })}
      </div>

      {show && open !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${items[open].category} project`}
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
          >
            <X className="size-6" aria-hidden />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
          >
            <ChevronLeft className="size-6" aria-hidden />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 size-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
          >
            <ChevronRight className="size-6" aria-hidden />
          </button>

          <figure
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full h-[70vh] rounded-2xl overflow-hidden grid place-items-center"
              style={items[open].src ? undefined : tileStyle(items[open])}
            >
              {items[open].src ? (
                <Image
                  src={items[open].src!}
                  alt={`${items[open].category} project`}
                  fill
                  sizes="(min-width:768px) 448px, 100vw"
                  className="object-contain"
                />
              ) : (
                React.createElement(ICONS[items[open].icon] ?? Hammer, {
                  className: "size-24 text-white/25",
                  "aria-hidden": true,
                })
              )}
            </div>
            <figcaption className="mt-3 text-center text-white font-semibold">
              {items[open].category}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
