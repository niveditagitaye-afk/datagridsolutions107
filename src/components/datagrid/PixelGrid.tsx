/**
 * Decorative animated pixel grid inspired by Datagrid's logo mark.
 * Uses brand orange palette with staggered pulse animation.
 */
export function PixelGrid({
  cols = 8,
  rows = 4,
  className = "",
}: {
  cols?: number;
  rows?: number;
  className?: string;
}) {
  const palette = [
    "bg-redorange",
    "bg-orange-bright",
    "bg-orange",
    "bg-orange-yellow",
    "bg-orange-light",
    "bg-orange-pale",
  ];
  const cells = Array.from({ length: cols * rows });
  return (
    <div
      className={`grid gap-1 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {cells.map((_, i) => {
        const filled = Math.random() > 0.35;
        const color = palette[i % palette.length];
        return (
          <div
            key={i}
            className={`aspect-square rounded-[3px] ${
              filled ? color : "bg-white/5"
            } animate-pixel-pulse`}
            style={{ animationDelay: `${(i % 12) * 0.15}s` }}
          />
        );
      })}
    </div>
  );
}
