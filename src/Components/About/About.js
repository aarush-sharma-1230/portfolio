import React from "react";
import myPicture from "../../Images/Aarush_Sharma.jpg";
import { hobbies } from "../Store/Store";
import "./About.css";

const About = () => {
  return (
    <div className="box">
      <div className="about-intro frosted-pane">
        <div className="intro-title center">
          <h1 className="title-regular">ABOUT ME</h1>
        </div>
        <img src={myPicture} alt="Me"></img>
        <div className="about-intro-content">
          <p>
            I have always been fascinated by how the tech around us works and
            evolves. Thats how I got myself into programming.
            <br />
            <br />
            Graduating with B-Tech from Indian Institute of Technology - BHU, I
            began learning to code, solving competitive algorithmic problems.
            Being lazy by nature, I built a python automation script as my first
            project. As I explored around, I began learning the fundamentals of
            web development and enjoyed an artistic emotion as I created various
            front apps. These days I am working on building web applications
            using the MERN stack.
          </p>
          <a
            href="https://drive.google.com/file/d/1XmDEnfjcfgOrGiMLtu-PT2yD-R2kcd1c/view?usp=sharing"
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
