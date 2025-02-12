import { ChevronDown, Eye, Layers, Plus, X } from "lucide-react";
import IconButton from "../IconButton/IconButton";
import { useState } from "react";
import Tippy from "@tippyjs/react";

const RouteHeader = () => {
  const [count, setCount] = useState<number>(1);
  const [activeTab, setActiveTap] = useState(count);

  return (
    <div className="bg-search-bg-hover h-13 pe-3">
      <div className="grid grid-cols-9">
        <div className="flex  items-center h-full relative col-span-7">
          <div className="flex items-center h-full overflow-x-auto">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveTap(index + 1)}
                className={`flex items-center justify-between px-5 space-x-4 w-40 h-full  text-center cursor-pointer ${
                  activeTab === index + 1
                    ? "bg-primary border-t-[3px] border-btn text-white"
                    : "text-zinc-400 hover:bg-search-bg"
                } group`}
              >
                <p className="text-xs">GET</p>
                <p className="font-semibold text-xs">Untitled</p>

                {Array.from({ length: count }).length > 1 ? (
                  <Tippy
                    content={
                      <span className="text-[10px] font-semibold">Close</span>
                    }
                    placement="top"
                    theme="light"
                  >
                    <button
                      onClick={() => {
                        setCount(count - 1);
                        setActiveTap(count);
                      }}
                      className="sticky right-0 invisible group-hover:visible"
                    >
                      <X size={14} />
                    </button>
                  </Tippy>
                ) : (
                  <button></button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setCount(count + 1);
              setActiveTap(count + 1);
            }}
            className="ms-4"
          >
            <Plus size={17} />
          </button>
        </div>

        <div className="col-span-2 flex justify-end space-x-5 items-center h-13">
          <IconButton direction="top" name="Select environment">
            <div className="flex items-center space-x-8">
              <div className="flex space-x-2 items-center">
                <Layers size={15} />
                <span className="text-[13px] font-semibold">
                  Select environment
                </span>
              </div>
              <ChevronDown size={17} />
            </div>
          </IconButton>

          <IconButton name="Environment Quick Peek" direction="top">
            <Eye size={15} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default RouteHeader;
