import { useState } from "react";

interface Tabs {
  id: number;
  name: string;
}

const tabs: Tabs[] = [
  { id: 1, name: "Parameters" },
  { id: 2, name: "Body" },
  { id: 3, name: "Headers" },
  { id: 4, name: "Authorization" },
  { id: 5, name: "Pre-request Script" },
  { id: 6, name: "Tests" },
];

const RequestSection = () => {
  const [tap, setTab] = useState<string>("Parameters");

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.name)}
            className={`text-[13px] font-bold text-zinc-400 hover:text-white ${
              tap === t.name &&
              "underline underline-offset-6 decoration-btn decoration-2"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Query Parameter */}

      
    </div>
  );
};

export default RequestSection;
