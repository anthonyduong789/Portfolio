import "./AboutMePage.css";
import School from "./images/School.jpg";
import Skills from "./images/Skills.png";
import WorkExperience from "./images/WorkExperience.png";
import HeadingAnimation from "./Compnents/headingAnimation";

function AboutMePage() {
    return (
      <div
      id="about"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F2F1EB",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F2F1EB",
          }}
        >
          <HeadingAnimation
            header={"About Me"}
            headerColor={"black"}
            underlineColor={"black"}
          />
        </div>

        <div className="AboutPageMain">
          <ul className="AboutPageCards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={School} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Education</h2>
                  <div className="card_text">
                    <p>
                      "I studied Computer Science at the University of Santa
                      Cruz, where I gained a comprehensive understanding of
                      programming, algorithms, and data structures through
                      rigorous coursework. I actively participated in hands-on
                      projects, including developing a mobile app in a team
                      setting, which honed my practical skills. This educational
                      journey at Santa Cruz not only equipped me with technical
                      expertise but also fostered critical thinking and
                      problem-solving skills, essential for my professional
                      development in the tech industry."
                    </p>
                  </div>
                  <h2 className="card_title">Relevant Courses</h2>
                  <div className="card_text">
                    <p>
                      Data Structures and Algorithms, Computer Science/C
                      Programming, Principles of Computer System Design, and
                      Computer Architecture, and Software Engineering A.
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={Skills} />
                </div>
                <div className="card_content">
                  <h2
                    className="card_title"
                    style={{ textDecoration: "underline" }}
                  >
                    Skills
                  </h2>
                  <h2 className="card_title">Languages</h2>
                  <div className="card_text">
                    <p>
                      - Python, JavaScript, C, C++, HTML, CSS SCSS, Typescript
                    </p>
                  </div>
                  <h2 className="card_title">Frameworks</h2>
                  <div className="card_text">
                    <p>
                      - React, React Native, Tailwind, NodeJS, Express, jQuery
                    </p>
                  </div>
                  <h2 className="card_title">DataBases</h2>
                  <div className="card_text">
                    <p>- MySQL SQl</p>
                  </div>
                  <h2 className="card_title">Tools / Practices</h2>
                  <div className="card_text">
                    <p>
                      - Git, GitHub Copilot, Google Cloud Services, knowledge of
                      Scrum practices, Agile Development, full-stack ,
                      digitalocean , Netlify, VSCode
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    src={WorkExperience}
                    alt="A side view of a plate of figs and berries. "
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">
                    Interpersonal Skills and Varied Work Experience
                  </h2>

                  <h2 className="card_title">
                    Five Guys Training Manager (2021-2023)
                  </h2>
                  <div className="card_text">
                    <p>
                      In addition to my technical skills, I have a diverse set
                      of soft skills that I have developed through my
                      experiences in the workforce. I have worked in the food
                      industry for over 5 years and have been a training manager
                      at Five Guys for over 2 years. Working at Five Guys during
                      college sharpened my communication. skills. I learned to
                      lead diverse age groups, consistently conveying ideas with
                      respect and clarity.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
};


export default AboutMePage;