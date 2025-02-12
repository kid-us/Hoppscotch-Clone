import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [leftWidth, setLeftWidth] = useState(950); // Initial width for left div
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const MIN_WIDTH = 950;
  const MAX_WIDTH = 1080;

  const startResizing = () => {
    isResizing.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResizing);
  };

  const handleResize = (e: MouseEvent) => {
    if (!isResizing.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let newLeftWidth = e.clientX - containerRect.left;

    // Enforce min/max width
    if (newLeftWidth < MIN_WIDTH) newLeftWidth = MIN_WIDTH;
    if (newLeftWidth > MAX_WIDTH) newLeftWidth = MAX_WIDTH;

    setLeftWidth(newLeftWidth);
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResizing);
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex w-full h-[89dvh] border border-gray-700/30">
        {/* Left Fixed Panel (Optional) */}
        <div className="w-13" style={{ height: "33.3333%" }}></div>

        {/* Resizable Container */}
        <div
          ref={containerRef}
          className="flex w-full border-l border-gray-700/30"
        >
          {/* Left Panel */}
          <div
            style={{ width: leftWidth }}
            className="p-4 flex items-center justify-center"
          >
            Left Panel
          </div>

          {/* Resizer */}
          <div
            onMouseDown={startResizing}
            className="w-2 cursor-ew-resize bg-gray-500 hover:bg-gray-600 transition-colors"
            style={{ height: "100%" }}
          />

          {/* Right Panel */}
          <div className="flex-1 p-4 flex items-center justify-center">
            Right Panel
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center h-[4.5dvh] px-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
