import React from "react";
import "./Home.css"
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="Home">
          <div className="home-zone">
            <div className="home-pic-1"></div>
            <div className="home-txt">
              <span id="home-txt-1">𝐜𝐨𝐦𝐢𝐧𝐠 𝐬𝐨𝐨𝐧</span>
            </div>
            <div className="home-button-zone">
              <button
                class="home-button"
                onClick={() => {
                  localStorage.setItem("hasVisitedLuvlyFancy", "true");
                  navigate("/");
                }}
              >
                ❤︎
                <span>BACK</span>
              </button>
            </div>
          </div>
        </div>
      );
}

export default Home;
