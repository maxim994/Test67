export type TimelineEvent = {
  id: string;
  label: string;
  dateLabel: string;
  year: "1947" | "1948" | "1949";
  category: string;
  positionPx: number;
  side: "left" | "right";
  westText?: string;
  eastText?: string;
  timelineText?: string;
  timelineSteps?: string[];
  sources?: { label: string; url: string }[];
  image?: { url: string; alt: string; caption: string };
};

export const timelineHeightPx = 1500;

export const timelineEvents: TimelineEvent[] = [
  {
    id: "a",
    label: "Marshall-Plan",
    dateLabel: "3. April 1948",
    year: "1948",
    category: "Wirtschaft/Gesellschaft",
    positionPx: 520,
    side: "left",
    westText:
      "US-Praesident Harry S. Truman setzt das European Recovery Program (ERP) in Kraft. Der Marshall-Plan foerdert den Wiederaufbau in Westeuropa, stabilisiert Wirtschaft und Infrastruktur und staerkt die Bindung an die USA.",
    eastText:
      "Unter sowjetischem Druck nahmen osteuropaeische Staaten nicht teil. Damit verfestigte sich die Trennung in zwei Wirtschaftsraeume.",
    timelineText:
      "Von 1948 bis 1952 stellten die USA insgesamt rund 12,4 Milliarden US-Dollar bereit, davon etwa 1,5 Milliarden fuer Westdeutschland.",
    timelineSteps: [
      "5. Juni 1947: George C. Marshall praesentiert das European Recovery Program.",
      "27. Juni 1947: Aussenministertreffen in Paris; Molotow verlaesst die Verhandlungen.",
      "12. Juli 1947: 16 Staaten sagen ihre Teilnahme in Paris zu.",
      "22. September 1947: Beteiligte Staaten einigen sich auf einen Vertrag.",
      "3. April 1948: US-Kongress beschliesst das ERP, Truman setzt es in Kraft.",
      "1948-1952: Finanzierung, Lieferungen und Kredite fuer Wiederaufbau in Europa."
    ],
    sources: [
      { label: "LeMO (HDG)", url: "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/marshall-plan-und-waehrungsreform.html" },
      { label: "StudySmarter", url: "https://www.studysmarter.de/schule/geschichte/nachkriegszeit/marshall-plan/" },
      { label: "ERP-Originalquelle", url: "https://catalog.archives.gov/id/299857" }
    ],
    image: {
      url: "https://www.hdg.de/lemo/bestand/objekt/plakat-erp-marshall-plan.html",
      alt: "Plakat Marshall-Plan mit Segel aus europaeischen Flaggen",
      caption: "Plakat: Marshall-Plan (LeMO/HDG)"
    }
  },
  { id: "b", label: "Ereignis B", dateLabel: "1947", year: "1947", category: "Platzhalter", positionPx: 170, side: "right" },
  { id: "c", label: "Ereignis C", dateLabel: "1947", year: "1947", category: "Platzhalter", positionPx: 320, side: "left" },
  { id: "d", label: "Ereignis D", dateLabel: "1948", year: "1948", category: "Platzhalter", positionPx: 730, side: "right" },
  { id: "e", label: "Ereignis E", dateLabel: "1948", year: "1948", category: "Platzhalter", positionPx: 930, side: "left" },
  { id: "f", label: "Ereignis F", dateLabel: "1949", year: "1949", category: "Platzhalter", positionPx: 1110, side: "right" },
  { id: "g", label: "Ereignis G", dateLabel: "1949", year: "1949", category: "Platzhalter", positionPx: 1280, side: "left" },
  { id: "h", label: "Ereignis H", dateLabel: "1949", year: "1949", category: "Platzhalter", positionPx: 1410, side: "right" }
];
