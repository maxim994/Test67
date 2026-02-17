import { useEffect, useState } from "react";
import { EventMarker } from "./EventMarker";
import { TimelineEventPreview } from "./TimelineEventPreview";
import type { TimelineEvent } from "../data/placeholderEvents";
import { timelineHeightPx } from "../data/placeholderEvents";

type TimelineProps = {
  events: TimelineEvent[];
  selectedEventId: string | null;
  onSelectEvent: (id: string) => void;
};

export function Timeline({ events, selectedEventId, onSelectEvent }: TimelineProps) {
  const selectedEvent = events.find((event) => event.id === selectedEventId) ?? null;
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setShowDetails(false);
  }, [selectedEventId]);

  return (
    <section className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-panel backdrop-blur-sm">
      <h2 className="font-display text-2xl text-slate-900">Zeitstrahl</h2>
      <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
        Uebersicht: 1947 bis 1949 markieren zentrale Wendepunkte der deutschen Teilung. Waehle eine Zeitmarke fuer eine
        Kurzinfo direkt am Marker.
      </p>

      <div className="relative mt-6 overflow-visible" style={{ minHeight: `${timelineHeightPx}px` }}>
        <div
          className="absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-west-500 via-timeline-500 to-east-500"
          style={{ height: `${timelineHeightPx}px` }}
          aria-hidden="true"
        />

        <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700">
          1947
        </span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700">
          1948
        </span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700">
          1949
        </span>

        {events.map((event) => (
          <EventMarker
            key={event.id}
            event={event}
            selected={event.id === selectedEventId}
            onSelect={onSelectEvent}
          />
        ))}

        {selectedEvent && (
          <TimelineEventPreview
            event={selectedEvent}
            expanded={showDetails}
            onToggleExpanded={() => setShowDetails((prev) => !prev)}
          />
        )}
      </div>

      {selectedEvent && showDetails && (
        <article className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {selectedEvent.dateLabel} | {selectedEvent.category}
          </p>
          <h3 className="mt-1 font-display text-xl text-slate-900">{selectedEvent.label}</h3>

          {selectedEvent.timelineText && <p className="mt-2 text-sm text-slate-700">{selectedEvent.timelineText}</p>}

          {selectedEvent.timelineSteps && selectedEvent.timelineSteps.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {selectedEvent.timelineSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          )}

          {selectedEvent.image && (
            <p className="mt-3 text-xs text-slate-600">
              {selectedEvent.image.caption}:{" "}
              <a
                className="font-semibold text-west-700 underline decoration-west-500/60 underline-offset-2"
                href={selectedEvent.image.url}
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          )}

          {selectedEvent.sources && selectedEvent.sources.length > 0 && (
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quellen</p>
              <ul className="mt-1 space-y-1 text-xs text-slate-700">
                {selectedEvent.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900"
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      )}
    </section>
  );
}
