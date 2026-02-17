import type { TimelineEvent } from "../data/placeholderEvents";

type TimelineEventPreviewProps = {
  event: TimelineEvent;
  expanded: boolean;
  onToggleExpanded: () => void;
};

export function TimelineEventPreview({ event, expanded, onToggleExpanded }: TimelineEventPreviewProps) {
  const sideClass =
    event.side === "left"
      ? "left-1/2 ml-16 md:left-auto md:right-1/2 md:mr-20 md:ml-0"
      : "left-1/2 ml-16 md:left-1/2 md:ml-20";

  return (
    <aside
      className={`absolute z-20 w-[min(18rem,calc(100%-5rem))] -translate-y-1/2 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-panel backdrop-blur-sm ${sideClass}`}
      style={{ top: `${event.positionPx}px` }}
      aria-live="polite"
    >
      <p className="text-[11px] uppercase tracking-wide text-slate-500">
        {event.dateLabel} | {event.category}
      </p>
      <h3 className="mt-1 font-display text-lg text-slate-900">{event.label}</h3>
      <p className="mt-1 text-sm text-slate-700">
        {event.timelineText ?? "Kurze Uebersicht zum ausgewaehlten Ereignis."}
      </p>
      <button
        type="button"
        className="mt-3 rounded-md border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        onClick={onToggleExpanded}
      >
        {expanded ? "Ausfuehrliche Infos ausblenden" : "Ausfuehrliche Infos anzeigen"}
      </button>
    </aside>
  );
}
