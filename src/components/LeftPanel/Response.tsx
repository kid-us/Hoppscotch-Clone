import { useState } from "react";
import { Tabs } from "./RequestSection";
import IconButton from "../IconButton/IconButton";
import { Copy, Download, Ellipsis, Filter, Save, WrapText } from "lucide-react";

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
    <div className="">
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

      <div className="flex justify-between">
        <h2 className="mt-4 mb-3 font-semibold text-xs text-zinc-500">
          Response Body
        </h2>

        <div className="flex space-x-5">
          <IconButton name="Wrap Lines" direction="top">
            <button className="text-blue-500 hover:text-white">
              <WrapText size={16} />
            </button>
          </IconButton>
          <IconButton name="Filter" direction="top">
            <button className="text-zinc-500 hover:text-white">
              <Filter size={16} />
            </button>
          </IconButton>
          <IconButton name="Download File" direction="top">
            <button className="text-zinc-500 hover:text-white">
              <Download size={16} />
            </button>
          </IconButton>
          <IconButton name="Save" direction="top">
            <button className="text-zinc-500 hover:text-white">
              <Save size={16} />
            </button>
          </IconButton>
          <IconButton name="Save" direction="top">
            <button className="text-zinc-500 hover:text-white">
              <Copy size={16} />
            </button>
          </IconButton>
          <IconButton name="Copy Link" direction="top">
            <button className="text-zinc-500 hover:text-white">
              <Ellipsis size={16} />
            </button>
          </IconButton>
        </div>
      </div>

      {/* Response */}
      <div className="border border-search-bg pt-3 h-96 pb-24 overflow-y-scroll">
        {lines.map((line, index) => (
          <div key={index} className="flex items-start">
            <div className="w-10  text-gray-500 text-xs text-center">
              {index + 1}
            </div>
            <div className="pl-3 border-l border-search-bg leading-5">
              {line.split(/("[^"]*":)/g).map((part, idx) =>
                part.match(/^"/) ? (
                  <span
                    key={idx}
                    className="text-blue-400 text-[13px] font-semibold pl-4"
                  >
                    {part}
                  </span>
                ) : part.match(/".*"/) ? (
                  <span
                    key={idx}
                    className="text-purple-400 text-[13px] font-semibold pl-4"
                  >
                    {part}
                  </span>
                ) : (
                  <span key={idx} className="text-white text-[13px] pl-4">
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
