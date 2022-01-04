import React, { useRef } from "react";
import "./App.css";

export default function App() {
  const scrollToSection = useRef();
  const scrollToSection1 = useRef();

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            scrollToSection.current.scrollIntoView({ behavior: "smooth" });
          }}>Scroll to Bottom
        </button>
        <div className="bigDiv" >
          {/* <input type="text" placeholder="Enter the Name" />
          <input type="email" placeholder="Enter the Email" />
          <input type="password" placeholder="Enter the Password" /> */}

        </div>

        <div className="bigDiv" ref={scrollToSection}>
          Scrolled Here First
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            scrollToSection1.current.scrollIntoView({ behavior: "smooth" });
          }}>Scroll to Bottom Bottom
        </button>
        <div className="bigDiv" />
        <div className="bigDiv" ref={scrollToSection1}>
          Scrolled Here Second
        </div>
      </div>
    </div>
  );
}