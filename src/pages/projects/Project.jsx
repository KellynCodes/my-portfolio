import React, { useEffect } from "react";
import "./project.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Kelly from "../../assets/projects/kelly.JPG";
import MedIProf from "../../assets/projects/mediprof.JPG";
import Meals from "../../assets/projects/newMealHero.JPG";
import emaldaUnizike from "../../assets/projects/emaldaunizik.jpg";
import SpecialOrthopedic from "../../assets/projects/specializedorthopedic.PNG";
import Sobol from "../../assets/projects/sobol.PNG";
import OptimalOrthomed from "../../assets/projects/optimalorthopedic.PNG";
import SteveWien from "../../assets/projects/stevewien.PNG";
import NorthWestMedical from "../../assets/projects/north-west.PNG";
import Web5Hackathon from "../../assets/projects/web5-hackathon.PNG";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="projects" className="project_page">
      <div className="header_text">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="projects">
        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={emaldaUnizike} alt="Project img" />
            <h5>Unizike Hostel Management System</h5>
          </div>

          <div className="button">
            {/* <a
              href="https://elmadaunizikhostels.com/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a> */}
            <a
              href="https://elmadaunizikhostels.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={SpecialOrthopedic} alt="Project img" />
            <h5>Orthopedic Website | Angular</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/sosinc"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://specializedorthosurgeons.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={Sobol} alt="Project img" />
            <h5>Orthopedic Website | Angular</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/sobol-orthopedic"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://sobolorthomed.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={OptimalOrthomed} alt="Project img" />
            <h5>Orthopedic Website | Angular </h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/optimal-orthopedic"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://optimalorthomed.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        {/* <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={NorthWestMedical} alt="Project img" />
            <h5>Orthopedic Website | Angular </h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/north-west-medical"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://north-west-medical.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div> */}
        We
        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={Web5Hackathon} alt="Project img" />
            <h5>Web5 Hackathon | NextJs & TBD</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/OmniVerse"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://omniverze.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={SteveWien} alt="Project img" />
            <h5>SteveWien Law | Angular</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/Professional-Law-Corporation"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://stevewien.com/home"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={MedIProf} alt="Project img" />
            <h5>Hospital Website | Angular & NestJs</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/engkelly?tab=repositories&q=mediprof&type=&language=&sort="
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://mediprof.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-down">
          <div className="project_img">
            <img src={Meals} alt="Project img" />
            <h5>Food Ordering app | Angular & NestJs</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/engkelly?tab=repositories&q=meal&type=&language=&sort="
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://meal-ui.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="flip-right">
          <div className="project_img">
            <img src={Kelly} alt="Project img" />
            <h5>Portfolio/Blog site | Angular & .NET</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes?tab=repositories&q=kelly&type=&language=&sort="
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://engkelly.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
