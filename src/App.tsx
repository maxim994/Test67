import { useMemo, useState } from "react";
import { PageHeader } from "./components/PageHeader";
import { Timeline } from "./components/Timeline";
import { InfoPanel } from "./components/InfoPanel";
import { timelineEvents } from "./data/placeholderEvents";

function App() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const selectedEvent = useMemo(
    () => timelineEvents.find((event) => event.id === selectedEventId) ?? null,
    [selectedEventId]
  );

  return (
    <main className="mx-auto w-full max-w-7xl p-4 pb-12 sm:p-6">
      <PageHeader />

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(320px,420px)_minmax(0,1fr)]">
        <div className="order-2 md:order-1">
          <InfoPanel title="West" selectedEvent={selectedEvent} accentClass="md:border-l-4 md:border-west-500" />
        </div>

        <div className="order-1 md:order-2">
          <Timeline events={timelineEvents} selectedEventId={selectedEventId} onSelectEvent={setSelectedEventId} />
        </div>

        <div className="order-3">
          <InfoPanel title="Ost" selectedEvent={selectedEvent} accentClass="md:border-r-4 md:border-east-500" />
        </div>
      </div>
    </main>
  );
}

export default App;
