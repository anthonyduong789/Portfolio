import { useState, useEffect } from "react";
import five_guys from "./images/five-guys.gif";


function Interpersonal_page() {
  return (
    <div>
      <h1>Interpersonal Abilities and Diverse Professional Backgrounds</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
        <div
          class="card"
          style={{
            backgroundColor: "lightblue",
            border: "4px solid black",
          }}
        >
          <img src={five_guys} alt="Image" class="card-image" />
          <div class="card-description">
            <h2 class="card-title">Five Guys Training Manager</h2>
            <p class="card-text">
              In additon to my technical skills, I have a diverse set of soft
              skills that I have developed through my experiences in the
              workforce. I have worked in the food industry for over 5 years,
              and have been a training manager for over 2 years.
            </p>
          </div>
        </div>

        <div class="card">
          <h2 style={{ width: "30%", marginRight: "10px" }}>
            Excellent Communicator{" "}
          </h2>

          <div>
            <p class="card-text">
              "Working at Five Guys during college sharpened my communication
              skills. I learned to lead diverse age groups, consistently
              conveying ideas with respect and clarity."
            </p>
          </div>
        </div>
        <div class="card">
          <h2 style={{ width: "30%", marginRight: "10px" }}>Scrum</h2>

          <div>
            <p class="card-text">
              "Working at Five Guys during college sharpened my communication
              skills. I learned to lead diverse age groups, consistently
              conveying ideas with respect and clarity."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interpersonal_page;