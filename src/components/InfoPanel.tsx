import type { TimelineEvent } from "../data/placeholderEvents";

type InfoPanelProps = {
  title: "West" | "Ost";
  selectedEvent: TimelineEvent | null;
  accentClass: string;
};

export function InfoPanel({ title, selectedEvent, accentClass }: InfoPanelProps) {
  const detailText =
    title === "West"
      ? selectedEvent?.westText ?? `Ausgewaehltes Ereignis: ${selectedEvent?.label ?? ""}`
      : selectedEvent?.eastText ?? `Ausgewaehltes Ereignis: ${selectedEvent?.label ?? ""}`;

  return (
    <section
      className={`rounded-2xl border border-white/70 bg-white/85 p-5 shadow-panel backdrop-blur-sm md:sticky md:top-6 ${accentClass}`}
      aria-label={`${title} Panel`}
    >
      <h2 className="font-display text-2xl text-slate-900">{title}</h2>
      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        {!selectedEvent && <p className="text-sm text-slate-600">Waehle ein Ereignis aus.</p>}

        {selectedEvent && (
          <div className="space-y-2 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">{selectedEvent.label}</p>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              {selectedEvent.dateLabel} | {selectedEvent.category}
            </p>
            <p>{detailText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
