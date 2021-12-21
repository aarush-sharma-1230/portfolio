import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <div className="footer frosted-pane center">
      <div className="footer-icons">
        <a href="mailto:aarush.sharma.1230@gmail.com">
          <MailIcon style={{ fill: "white", fontSize: "1.2rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/aarush-sharma"
          rel="noreferrer nofollow"
          target="_blank"
        >
          <LinkedInIcon style={{ fill: "white", fontSize: "1.2rem" }} />
        </a>
        <a
          href="https://github.com/aarush-sharma-1230"
          rel="noreferrer nofollow"
          target="_blank"
        >
          <GitHubIcon style={{ fill: "white", fontSize: "1.2rem" }} />
        </a>
      </div>
      <hr></hr>
      <small>©Aarush Sharma {currentYear}</small>
    </div>
  );
};

export default Footer;
