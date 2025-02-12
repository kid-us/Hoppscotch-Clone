import Tippy from "@tippyjs/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
  direction?: "top" | "bottom" | "left" | "right";
  height?: string;
}

const IconButton = ({ children, direction = "right", name, height }: Props) => {
  return (
    <Tippy
      content={<span className="text-[10px] font-semibold">{name}</span>}
      placement={direction}
      theme="light"
    >
      <button className={`${height && height} text-gray-400 hover:text-white`}>
        {children}
      </button>
    </Tippy>
  );
};

export default IconButton;
