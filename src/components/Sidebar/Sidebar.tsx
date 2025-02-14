import { Globe, Hexagon, Link2, Settings } from "lucide-react";
import IconButton from "../IconButton/IconButton";

const Sidebar = () => {
  return (
    <>
      <IconButton
        name="Rest"
        direction="right"
        height="flex justify-center items-center border-l-[3px] border-btn h-[46px] w-full bg-search-bg-hover text-white"
      >
        <Link2 size={17} />
      </IconButton>

      <IconButton
        name="GraphQL"
        direction="right"
        height="flex justify-center items-center h-[46px] w-full hover:bg-search-bg"
      >
        <Hexagon size={17} />
      </IconButton>

      <IconButton
        name="Realtime"
        direction="right"
        height="flex justify-center items-center h-[46px] w-full hover:bg-search-bg"
      >
        <Globe size={17} />
      </IconButton>

      <IconButton
        name="Settings"
        direction="right"
        height="flex justify-center items-center h-[46px] w-full hover:bg-search-bg"
      >
        <Settings size={17} />
      </IconButton>
    </>
  );
};

export default Sidebar;
