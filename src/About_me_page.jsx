import React from "react";
import fast_logo from "./images/fast.png";
import Card_logo from "./Card_Logo";
import me from "./images/me.png";
import t1 from "./images/t1.png";
import team from "./images/c1.png";

import "./About_me_page.scss";

function AboutMePage() {
  const title = "Fast";
  const description = "I like to get things done quickly and efficiently.";

  const team_title = "Great Team";
  const communicate = "Excellent<br/>communicator";

  return (
    <div class="view">
      <div class="about-container">
        <h1 class="about">About Me</h1>
        <div class="underline"></div>

        <div class="card_4">
          <div>
            <Card_logo img={t1} title={"Great Team"} description={""} />
          </div>
          <div>
            <Card_logo img={team} title={communicate} description={""} />
          </div>
          <div>
            <Card_logo
              img={fast_logo}
              title={title}
              description={description}
            />
          </div>
          <div>
            <Card_logo
              img={fast_logo}
              title={title}
              description={description}
            />
          </div>
        </div>
        <div>
          <div class="card_2">
            <div class="b2">
              <img src={me} alt="logo" class = "me-image"/>
              {/* <div> */}
              <h1 class = "title1">Who is this guy?</h1>
              {/* </div> */}

              <div class="a2">
                I'm a Computer
                Science undergraduate from UC Santa Cruz. Eager to dive into web
                development and software engineering, I'm on the lookout for
                dynamic opportunities to learn and contribute in these fields.
              </div>
            </div>

            <div>
              <div>
                <h1>My techinical Experiences</h1>
              </div>

              <div class="b3">
                I'm a <mark>full-stack developer</mark> with a passion for{" "}
                <mark>front-end development</mark>. I'm also a{" "}
                <mark>team player</mark> and <mark>quick learner</mark> who's
                always looking for ways to improve my skills and knowledge.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;

// export default AboutMePage;
