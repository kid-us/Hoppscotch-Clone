import { useState } from "react";
import { Tabs } from "./RequestSection";

const Response = () => {
  const responseHeader: Tabs[] = [
    { id: 1, name: "JSON" },
    { id: 2, name: "Raw" },
    { id: 3, name: "Headers" },
    { id: 4, name: "Test Results" },
  ];

  const [responseH, setResponseH] = useState<string>("JSON");

  return (
    <div>
      <div className="flex space-x-4">
        {responseHeader.map((r) => (
          <button
            key={r.id}
            onClick={() => setResponseH(r.name)}
            className={`text-[13px] font-bold hover:text-white ${
              responseH === r.name
                ? "underline underline-offset-10 decoration-btn decoration-2 text-white"
                : "text-zinc-500"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Response;
