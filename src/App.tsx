import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import RightPanel from "./components/RightPanel/RightPanel";
import RouteHeader from "./components/LeftPanel/RouteHeader";

function App() {
  const [leftWidth, setLeftWidth] = useState(75);
  const [rightWidth, setRightWidth] = useState(25);
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const MIN_WIDTH = 64.9;
  const MAX_WIDTH = 75;

  const startResizing = () => {
    isResizing.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResizing);
  };

  const handleResize = (e: MouseEvent) => {
    if (!isResizing.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const newLeftWidth =
      ((e.clientX - containerRect.left) / containerWidth) * 100;

    // Enforce min/max width
    if (newLeftWidth < MIN_WIDTH) setLeftWidth(MIN_WIDTH);
    else if (newLeftWidth > MAX_WIDTH) setLeftWidth(MAX_WIDTH);
    else setLeftWidth(newLeftWidth);
  };

  const stopResizing = () => {
    isResizing.current = false;
    // document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResizing);
  };

  useEffect(() => {
    if (containerRef.current) {
      setRightWidth(100 - leftWidth);
    }
  }, [leftWidth]);

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex w-full h-[89dvh] border border-gray-700/30 overflow-hidden">
        {/* Sidebar */}
        <div className="lg:block hidden w-12" style={{ height: "34%" }}>
          <Sidebar />
        </div>

        {/* Container */}
        <div
          ref={containerRef}
          className="flex w-full border-l border-gray-700/30"
        >
          {/* Left Panel */}
          {/* Large Device */}
          <div className="lg:block hidden" style={{ width: `${leftWidth}%` }}>
            <RouteHeader />
          </div>

          {/* Small Device */}
          <div className="lg:hidden" style={{ width: `${leftWidth}%` }}>
            <RouteHeader />
          </div>

          {/* Resizer */}
          <div
            onMouseDown={startResizing}
            className="lg:block hidden hover:w-[5px] w-[2px] bg-zinc-800/60 cursor-col-resize hover:bg-btn transition-colors h-full"
          />

          {/* Right Panel */}
          <div style={{ width: `${rightWidth}%` }} className="lg:flex hidden">
            <RightPanel />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="lg:flex hidden justify-between items-center h-[4.5dvh] px-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
