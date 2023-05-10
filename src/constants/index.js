import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    navyug,
    nsut,
    sbdav,
    ai,
    ml,
    os,
    comp,
    gt,
    dsa,
    gold,
    chat,
    realchat
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Programmer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor of Technology",
      company_name: "Netaji Subhas University of Technology,Delhi",
      icon: nsut,
      iconBg: "#383E56",
      date: "2020-present",
      points: [
        "Computer Science Engineering with specializing in Artificial intelligence",
      ],
    },
    {
      title: "10+2",
      company_name: "Navyug School Moti Bagh",
      icon: navyug,
      iconBg: "#E6DEDD",
      date: "2018-2020",
      points: [
        "Science Stream,PCM",
        "Scored 94.4 percent in CBSE class 12th exam",
      ],
    },
    {
      title: "High School",
      company_name: "SBDAV,Vasant Vihar",
      icon: sbdav,
      iconBg: "#383E56",
      date: "2017-2018",
      points: [
        "Scored 90.8 percent in CBSE class 10th exam",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Operating System",
      image:os,
    },
    {
      testimonial:
        "Data Structure and Algorithm",
      image: dsa,
    },
    {
      testimonial:
        "Artificial Intelligence",
      image: ai,
    },
    {
      testimonial:
        "Machine Learning",
      image: ml,
    },
    {
      testimonial:
        "Compiler Design",
      image: comp,
    },
    {
      testimonial:
        "Game Theory",
      image: gt,
    },
  ];
  
  const projects = [
    {
      name: "Gold Price Prediction",
      description:
        "A Gold Prediction Model in Python would involve developing a machine learning algorithm that can forecast the price of gold based on historical data. The model would utilize Python libraries such as Pandas, NumPy, and Scikit-learn to preprocess and analyze the data, and develop predictive models using regression .",
      tags: [
        {
          name: "Numpy",
          color: "blue-text-gradient",
        },
        {
          name: "Panda",
          color: "green-text-gradient",
        },
        {
          name: "RandomForestRegressor",
          color: "pink-text-gradient",
        },
      ],
      image: gold,
      source_code_link: "https://github.com/NishantRaj29/Gold_Price_Prediction/blob/main/Gold_data.ipynb",
    },
    {
      name: "Whatsapp Chat Analysis",
      description:
        "WhatsApp Chat Analysis in Python involves analyzing and visualizing the chat data obtained from a WhatsApp conversation using various Python libraries and tools. This analysis can help uncover insights and trends about the chat's participants, such as the most active users, most discussed topics, and peak chat hours.   ",
      tags: [
        {
          name: "Sentiment Analysis",
          color: "blue-text-gradient",
        },
        {
          name: "matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/NishantRaj29?tab=repositories",
    },
    {
      name: "TextFlow",
      description:
        "Real-Time Chats with Users and Rooms using socket.io, Node.js, and Express enables users to engage in instant messaging by establishing WebSocket connections, facilitating real-time communication and the creation of chat rooms for multiple participants.",
      tags: [
        {
          name: "socket",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: realchat,
      source_code_link: "https://github.com/NishantRaj29/TextFlow",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };