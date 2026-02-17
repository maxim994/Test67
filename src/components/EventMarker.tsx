import type { TimelineEvent } from "../data/placeholderEvents";

type EventMarkerProps = {
  event: TimelineEvent;
  selected: boolean;
  onSelect: (id: string) => void;
};

export function EventMarker({ event, selected, onSelect }: EventMarkerProps) {
  const sideClass =
    event.side === "left"
      ? "left-1/2 ml-6 items-start text-left md:left-auto md:right-1/2 md:mr-6 md:ml-0 md:items-end md:text-right"
      : "left-1/2 ml-6 items-start text-left";

  return (
    <button
      type="button"
      className={`absolute flex -translate-y-1/2 flex-col rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${sideClass}`}
      style={{ top: `${event.positionPx}px` }}
      onClick={() => onSelect(event.id)}
      aria-pressed={selected}
      aria-label={`Marker ${event.label} aus ${event.year}`}
    >
      <span
        className={`h-4 w-4 rounded-full border-2 transition ${
          selected
            ? "border-timeline-700 bg-slate-100 ring-4 ring-slate-300/70"
            : "border-timeline-500 bg-white hover:bg-slate-100"
        }`}
      />
      <span
        className={`mt-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
          selected
            ? "border-timeline-700 bg-timeline-700 text-white"
            : "border-slate-300 bg-white/95 text-slate-700"
        }`}
      >
        {event.label} - {event.dateLabel}
      </span>
    </button>
  );
}
