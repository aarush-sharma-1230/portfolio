import React from "react";
import myPicture from "../../Images/Aarush_Sharma.jpg";
import { hobbies, aboutMe } from "../Store/Store";
import "./About.css";

const About = () => {
  const { intro, main } = aboutMe;
  return (
    <div className="box">
      <div className="about-intro frosted-pane">
        <div className="intro-title center">
          <h1 className="title-regular">ABOUT ME</h1>
        </div>
        <img src={myPicture} alt="Me"></img>
        <div className="about-intro-content">
          <p>
            {intro}
            <br />
            <br />
            {main}
          </p>
          <a
            href="https://drive.google.com/file/d/1GSmyCZ6CRYXZFANvW2LII9hK37wDOQmA/view?usp=sharing"
            rel="noreferrer nofollow"
            target="_blank"
          >
            <button className="transparent-button">My Resume</button>
          </a>
        </div>
      </div>

      <div className="about-hobbies frosted-pane">
        <div className="center">
          <h1 className="title-regular">HOBBIES AND INTERESTS</h1>
        </div>
        <div>
          {hobbies.map((hobby) => {
            const { serial_key, title, content } = hobby;
            return (
              <div className="hobby" key={serial_key}>
                <h2>{title}</h2>
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
