import Tippy from "@tippyjs/react";
import { Globe, Link2, LoaderPinwheel, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <Tippy
        content={<span className="text-[11px] font-semibold">Rest</span>}
        placement="right"
        theme="light"
      >
        <button className="flex justify-center items-center border-l-[3px] border-btn h-[6.5vh] w-full bg-search-bg">
          <Link2 size={17} />
        </button>
      </Tippy>

      <Tippy
        content={<span className="text-[11px] font-semibold">GraphQL</span>}
        placement="right"
        theme="light"
      >
        <button className="flex justify-center items-center h-[6.8vh] w-full text-gray-400 hover:text-white hover:bg-search-bg-hover">
          <LoaderPinwheel size={17} />
        </button>
      </Tippy>

      <Tippy
        content={<span className="text-[11px] font-semibold">Realtime</span>}
        placement="right"
        theme="light"
      >
        <button className="flex justify-center items-center h-[6.8vh] w-full text-gray-400 hover:text-white hover:bg-search-bg-hover">
          <Globe size={17} />
        </button>
      </Tippy>

      <Tippy
        content={<span className="text-[11px] font-semibold">Settings</span>}
        placement="right"
        theme="light"
      >
        <button className="flex justify-center items-center h-[6.8vh] w-full text-gray-400 hover:text-white hover:bg-search-bg-hover">
          <Settings size={17} />
        </button>
      </Tippy>
    </>
  );
};

export default Sidebar;
