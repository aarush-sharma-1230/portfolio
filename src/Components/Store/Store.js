import footballImage from "../../Images/football.jpg";
import mailTrackingSystemImage from "../../Images/mail-tracking-system.jpg";
import seleniumImage from "../../Images/Python Selenium.png";
import sharepointImage from "../../Images/Sharepoint.png";
import productionSupport from "../../Images/Production-Support.png";

export const aboutMe = {
  intro:
    "I have always been fascinated by how the tech around us works and evolves. Thats how I got myself into programming.",
  main: "Graduating with B-Tech from Indian Institute of Technology - BHU, I began learning to code, solving competitive algorithmic problems. Being lazy by nature, I built a python automation script as my first project. As I explored around, I began learning the fundamentals of web development and enjoyed an artistic emotion as I created various projects. These days I am working on building web applications using the MERN stack.",
};

export const hobbies = [
  {
    serial_key: "H01",
    title: "FOOTBALL",
    content:
      "I have been playing football since a very small age. I explored this passion thoroughly in my college years where I trained and played for the college team. I learnt life changing lessons as I played and struggled through these last few years. I love the game and hope to keep on improving my abilities.",
  },
  {
    serial_key: "H02",
    title: "READING",
    content:
      "Reading is something which gives me peace. I feel more calm and in control of my thoughts. I like to read psychological and self help genre as it helps me understand more about my self. I introspect a lot while reading which helps me becoming more self aware.",
  },
  {
    serial_key: "H03",
    title: "Trekking",
    content:
      "I like going to different places and blowing off some steam time to time. Going to the mountains, trekking and reaching different peaks excites me. Trekking helps me feel more connected to myself and I enjoy a life outside work.",
  },
];

export const projects = [
  {
    serial_key: "P01",
    title: "FOOTBALL DATA",
    content:
      "The web application utilizes a third party API to fetch and show football data across the major european leagues. The data includes league tables and standings as well as upcoming games for the week.",
    tools: "React JS, Axios",
    image: `${footballImage}`,
  },
  {
    serial_key: "P02",
    title: "MAIL TRACKING SYSTEM",
    content:
      "This was built to recognize, process, collect and store data from the mails sent by the users. It's a real time tracking system which listens for email events and triggers the necessary action associated. The automation enabled us to get the user data within minutes thereby reducing the manual efforts and time consumed.",
    tools: "Pywin32, Pandas",
    image: `${mailTrackingSystemImage}`,
  },
  {
    serial_key: "P03",
    title: "TICKET HANDLING SYSTEM",
    content:
      "I designed this to automate the production support ticket resolving process. This would recognize and troubleshoot the ticket based on the user data within and the nature of the request.",
    tools: "Selenium, Pandas",
    image: `${seleniumImage}`,
  },
  {
    serial_key: "P04",
    title: "SHAREPOINT AUTOMATION",
    content:
      "The script would connect to a sharepoint site and modify/ fetch the required data. This automation utilized the Microsoft SharePoint REST API for connection and data altering purposes.",
    tools: "Requests",
    image: `${sharepointImage}`,
  },
  {
    serial_key: "P05",
    title: "PRODUCTION SUPPORT",
    content:
      "I worked in a production support team to assist user queries and troubleshoot application failures. This included coordinating with various teams to deploy the application for users and sorting out the issues.",
    tools: "",
    image: `${productionSupport}`,
  },
];
