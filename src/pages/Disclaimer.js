import React from "react";
import "./Disclaimer.css";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Disclaimer">
      <div className="disclaimer-zone">
        <div className="disclaimer-pic-1"></div>
        <div className="disclaimer-txt">
          <span id="disclaimer-txt-1">⋆ 𝑫𝒊𝒔𝒄𝒍𝒂𝒊𝒎𝒆𝒓</span>
          <span id="disclaimer-txt-2">
            made for roleplay purpose only , n̲o̲t̲h̲i̲n̲g̲ real
          </span>
        </div>
        <div className="disclaimer-button-zone">
          <button
            class="disclaimer-button"
            onClick={() => {
              localStorage.setItem("hasVisitedLuvlyFancy", "true");
              navigate("/home");
            }}
          >
            ❤︎
            <span>HOME</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
