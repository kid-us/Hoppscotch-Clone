import Tippy from "@tippyjs/react";
import {
  Columns2,
  PanelRight,
  ShieldCheck,
  Zap,
  Share2,
  PanelLeftOpen,
  CircleHelp,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Tippy
          content={
            <span className="text-[10px] font-semibold">Expand Sidebar</span>
          }
          placement="top"
          theme="light"
        >
          <button className="text-gray-400 hover:text-white">
            <PanelRight size={17} />
          </button>
        </Tippy>

        <Tippy
          content={
            <span className="text-[10px] font-semibold">Interceptor</span>
          }
          placement="top"
          theme="light"
        >
          <button className="text-gray-400 hover:text-white">
            <ShieldCheck size={17} />
          </button>
        </Tippy>
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-gray-400 hover:text-white text-xs font-semibold me-10">
          <CircleHelp size={17} />
          <span>Help & feedback</span>
        </button>

        <Tippy
          content={
            <span className="text-[10px] font-semibold">
              Shorts
              <span className="bg-gray-400 rounded-[2px] mx-1 px-1">ctrl</span>
              <span className="bg-gray-400 rounded-[2px] px-1">/</span>
            </span>
          }
          placement="top"
          theme="light"
        >
          <button className="text-gray-400 hover:text-white">
            <Zap size={17} />
          </button>
        </Tippy>

        <Tippy
          content={<span className="text-[10px] font-semibold">Share</span>}
          placement="top"
          theme="light"
        >
          <button className="text-gray-400 hover:text-white">
            <Share2 size={17} />
          </button>
        </Tippy>

        <Tippy
          content={
            <span className="text-[10px] font-semibold">Horizontal Layout</span>
          }
          placement="top"
          theme="light"
        >
          <button className="text-gray-400 hover:text-white">
            <Columns2 size={17} />
          </button>
        </Tippy>

        <Tippy
          content={
            <span className="text-[10px] font-semibold">Collapse Sidebar</span>
          }
          placement="top"
          theme="light"
        >
          <button className="text-gray-400 hover:text-white">
            <PanelLeftOpen size={17} />
          </button>
        </Tippy>
      </div>
    </>
  );
};

export default Footer;
