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

  const jsonData = {
    method: "GET",
    args: {},
    data: "",
    headers: {
      "accept-encoding": "gzip",
      "cdn-loop": "netlify",
      host: "echo.hoppscotch.io",
      "user-agent": "Proxyscotch/1.1",
      "x-country": "US",
      "x-forwarded-for": "169.254.169.126:17756, 2600:1900:0:2d01::2401",
      "x-nf-account-id": "5e2b91527eb7a24fb0054390",
      "x-nf-account-tier": "account_type_pro",
      "x-nf-client-connection-ip": "2600:1900:0:2d01::2401",
      "x-nf-request-id": "01JM2RB8VTJ5T1KA9JFYFSKFT1",
    },
    path: "/",
    isBase64Encoded: true,
  };

  const formatJsonLines = (obj: any, indent = 2): string[] => {
    const lines: string[] = [];
    const pad = " ".repeat(indent);

    lines.push(`${pad}{`);

    const entries = Object.entries(obj);
    entries.forEach(([key, value], index) => {
      const comma = index < entries.length - 1 ? "," : "";
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        lines.push(`${pad}  "${key}": {`);
        const subEntries = Object.entries(value);
        subEntries.forEach(([subKey, subValue], subIndex) => {
          const subComma = subIndex < subEntries.length - 1 ? "," : "";
          lines.push(`${pad}    "${subKey}": "${subValue}"${subComma}`);
        });
        lines.push(`${pad}  }${comma}`);
      } else if (typeof value === "string") {
        lines.push(`${pad}  "${key}": "${value}"${comma}`);
      } else {
        lines.push(`${pad}  "${key}": ${value}${comma}`);
      }
    });

    lines.push(`${pad}}`);
    return lines;
  };

  const lines = formatJsonLines(jsonData);

  return (
    <div className="overflow-y-scroll">
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

      <div className="rounded-md ove h-full overflow-scroll">
        <h2 className="mb-2 text-lg font-semibold">HTTP Request Example</h2>
        {lines.map((line, index) => (
          <div key={index} className="flex items-start">
            <div className="w-10  text-gray-500 text-xs text-center">
              {index + 1}
            </div>
            <div className="pl-3 border-l border-search-bg">
              {line.split(/("[^"]*":)/g).map((part, idx) =>
                part.match(/^"/) ? (
                  <span
                    key={idx}
                    className="text-blue-400 text-sm font-bold pl-4"
                  >
                    {part}
                  </span>
                ) : part.match(/".*"/) ? (
                  <span
                    key={idx}
                    className="text-purple-400 text-sm font-semibold pl-4"
                  >
                    {part}
                  </span>
                ) : (
                  <span key={idx} className="text-white  pl-4">
                    {part}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Response;
