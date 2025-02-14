import Tippy from "@tippyjs/react";
import {
  CircleCheckBig,
  CircleHelp,
  Plus,
  SquarePen,
  Trash,
  Trash2,
} from "lucide-react";
import { useState } from "react";

interface QueryParameter {
  id: number;
  key: string;
  value: string;
  description: string;
}

const QueryParameterComponent = () => {
  const [parameters, setParameters] = useState<QueryParameter[]>([
    { id: 1, key: "", value: "", description: "" },
  ]);

  // Add Parameter
  const addParameter = () => {
    const newId = parameters.length + 1;
    setParameters([
      ...parameters,
      { id: newId, key: "", value: "", description: "" },
    ]);
  };

  // Remove Parameter
  const removeParameter = (id: number) => {
    if (parameters.length > 1) {
      setParameters(parameters.filter((param) => param.id !== id));
    }
  };

  // Clear All Parameters
  const clearAll = () => {
    setParameters([{ id: 1, key: "", value: "", description: "" }]);
  };

  // Handle Input Change
  const handleInputChange = (
    id: number,
    field: keyof QueryParameter,
    value: string
  ) => {
    setParameters((prev) =>
      prev.map((param) =>
        param.id === id ? { ...param, [field]: value } : param
      )
    );
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between py-2 items-center h-10 mt-1">
        <p className="text-xs text-zinc-500 font-bold px-4">Query Parameters</p>
        <div className="flex space-x-4">
          <Tippy content="Wiki" placement="top" theme="light">
            <button className="text-zinc-400 hover:text-white">
              <CircleHelp size={16} />
            </button>
          </Tippy>

          <Tippy content="Clear All" placement="top" theme="light">
            <button
              onClick={clearAll}
              className="text-zinc-400 hover:text-white"
            >
              <Trash2 size={16} />
            </button>
          </Tippy>

          <Tippy content="Bulk Edit" placement="top" theme="light">
            <button className="text-zinc-400 hover:text-white">
              <SquarePen size={16} />
            </button>
          </Tippy>

          <Tippy content="Add New" placement="top" theme="light">
            <button
              onClick={addParameter}
              className="text-zinc-400 hover:text-white"
            >
              <Plus size={16} />
            </button>
          </Tippy>
        </div>
      </div>

      {/* Input Fields */}
      {parameters.map((param) => (
        <div key={param.id} className="flex justify-between h-9">
          <div className="border-t border-l border-b border-search-bg w-10"></div>

          <div className="w-full grid grid-cols-9">
            {["key", "value", "description"].map((field) => (
              <div
                key={field}
                className="col-span-3 border-[0.5px] border-search-bg"
              >
                <input
                  type="text"
                  className="w-full ps-2 placeholder:text-xs placeholder-zinc-600 placeholder:font-semibold focus:outline-none h-full text-xs"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={param[field as keyof QueryParameter]}
                  onChange={(e) =>
                    handleInputChange(
                      param.id,
                      field as keyof QueryParameter,
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex space-x-1 border-r border-t border-b border-search-bg px-2">
            <Tippy content="Turn Off" placement="top" theme="light">
              <button className="text-zinc-400 hover:text-white px-1">
                <CircleCheckBig size={16} color="green" />
              </button>
            </Tippy>

            <div className="flex justify-center w-full">
              <Tippy content="Remove" placement="top" theme="light">
                <button
                  onClick={() => removeParameter(param.id)}
                  className="text-zinc-400 hover:text-white border-l border-search-bg ps-2"
                >
                  <Trash size={16} color="red" />
                </button>
              </Tippy>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QueryParameterComponent;
