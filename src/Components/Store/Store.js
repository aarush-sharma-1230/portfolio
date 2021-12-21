import footballImage from "../../Images/football.jpg";
import mailTrackingSystemImage from "../../Images/mail-tracking-system.jpg";
import seleniumImage from "../../Images/Python Selenium.png";
import sharepointImage from "../../Images/Sharepoint.png";
import productionSupport from "../../Images/Production-Support.png";

export const hobbies = [
  {
    title: "FOOTBALL",
    content:
      "I have been playing football since a very small age. I explored this passion thoroughly in my college years where I trained and played for the college team. I learnt life changing lessons as I played and strugggled through these last few years. I love the game and hope to keep on improving my abilities.",
  },
  {
    title: "READING",
    content:
      "Reading is something which gives me peace. I feel more calm and in control of my thoughts. I like to read psychological and self help genre as it helps me understand more about my self. I am open to suggestions though.",
  },
  {
    title: "Trekking",
    content:
      "I like going to different places and blowing off some steam time to time. Going to the mountains, trekking and reaching different peaks excites me. I have been to some cool places and done some adventurous treks.",
  },
];

export const projects = [
  {
    title: "FOOTBALL DATA",
    content:
      "The web application utilizes a third party API to fetch and show football data across the major european leagues. The data includes leagues tables and standings as well as upcoming games for the week.",
    tools: "React JS, Axios",
    image: `${footballImage}`,
  },
  {
    title: "MAIL TRACKING SYSTEM",
    content:
      "This was built to recognize, process, collect and store data from the mails sent by the users. The auomation would enable us to get the user data within minutes thereby reducing the manual efforts and time consumed.",
    tools: "Pywin32, Pandas",
    image: `${mailTrackingSystemImage}`,
  },
  {
    title: "TICKET HANDLING SYSTEM",
    content:
      "I designed this to automate the production support ticket resolving process. I used the selenium module in python to create/ resolve the ticket handling process in my application. ",
    tools: "Selenium, Pandas",
    image: `${seleniumImage}`,
  },
  {
    title: "SHAREPOINT AUTOMATION",
    content:
      "The script would connect to my team's sharepoint and modify/ fetch the required data. This automation utilized the Microsoft SharePoint REST API for connection and data altering purposes.",
    tools: "Requests",
    image: `${sharepointImage}`,
  },
  {
    title: "PRODUCTION SUPPORT",
    content:
      "I worked in a production support team to assist user queries and troubleshoot application failures. This included coordinating with various teams to deploy the application and sort out the issues",
    tools: "",
    image: `${productionSupport}`,
  },
];
