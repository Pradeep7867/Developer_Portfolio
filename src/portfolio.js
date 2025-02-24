/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pradeep Sajnani",
  title: "Hi all, Am Pradeep",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WxwjU-y1ETPksZ6ZgtJngUvBoOolLLCe/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Pradeep7867",
  linkedin: "https://www.linkedin.com/in/pradeep-sajnani-ab99a91b7/",
  gmail: "prdeepsajnani742@gmail.com",
  gitlab: "#",
  facebook: "#",
  medium: "https://www.scaler.com/academy/profile/306bc23f7e25/",
  stackoverflow: "#",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Poornima University",
      logo: require("./assets/images/PoornimaUniversity.png"),
      subHeader: "Bachelors of Technology in Computer Science",
      duration: "August 2018 - December 2022",
      desc: "Specialization in Cloud Computing & Information Security",
      descBullets: ["Secured First Division with Distinction (8.1) CGPA"]
    },
    {
      schoolName: "All Saints Sen Sec School,",
      logo: require("./assets/images/AllSaints.png"),
      subHeader: "",
      duration: "September 2016 - June 2018",
      desc: "Secondary Education: Science & Math’s. ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "SinghSoft Technologies",
      companylogo: require("./assets/images/SinghSoft.png"),
      date: "Nov 2024 – Present",
      desc: "",
      descBullets: [
        "Work here as part of the Cloud and DevOps team",
        "Managing both Frontend and Backend teams to ensure smooth project delivery.",
        "My role also involves designing and building scalable cloud infrastructure services."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Nagarro",
      companylogo: require("./assets/images/nagarro.webp"),
      date: "Jul 2022 – Sept 2023",
      descBullets: [
        "Engineered and deployed robust full-stack applications, enhancing system performance by 30% through optimized algorithms and efficient code.",
        "Developed cloud-based solutions on AWS, including Elastic Beanstalk deployments and Lambda functions, ensuring high availability and scalability"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "DotSquares Technologies",
      companylogo: require("./assets/images/DotSquares.png"),
      date: "Jan 2022 – Jul 2022",
      desc: "",
      descBullets: [
        "Learned and implemented Power Apps, successfully building Mobile & Desktop applications for streamline business processes",
        "Created functions for data flow and retrieved data from Azure Active Directory, enhancing the integration of applications"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "THESE IDEAS EMPOWER INDIVIDUALS TO GROW AND SOLVE REAL-LIFE PROBLEMS.🚀",
  projects: [
    {
      image: require("./assets/images/NaukriWala.png"),
      projectName: "JobPortal",
      projectDesc: " Developing a web-based job portal application that allows users to register, log in, search for jobs, and apply for positions. The application also includes an admin panel for managing job postings and companies. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://job-portal-mocha-eight.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ComingSoon.png"),
      projectName: "Restuant Management System",
      projectDesc: "A web-based Restaurant Management System that allows customers to scan a QR code to access the restaurant’s digital menu. The system enables restaurant owners to manage menus, orders, and analytics efficiently through an admin panel.",
      footerLink: [
        {
          name: "Coming Soon",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solution Architect Associate ",
      subtitle:
        "Validated expertise in designing scalable, secure, and efficient cloud-based solutions on AWS.",
      image: require("./assets/images/Aws.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Rj6Fm7ZL18h0v9EAuvicutiXWCEdP-x1/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1Rj6Fm7ZL18h0v9EAuvicutiXWCEdP-x1/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "Microsoft Certified: AZ-900",
      subtitle:
        "Azure-Fundamentals",
      image: require("./assets/images/AZ900.jpg"),
      imageAlt: "AZ-900 ",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Qk5w_5oHeBGMmdrZZvFmUmnfi0GVCRsd/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Microsoft Certified: AI-900",
      subtitle: "Completed Certifcation from Microsoft Azure AI fundamentals",
      image: require("./assets/images/AI900.jpg"),
      imageAlt: "AI-900 Certification",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://drive.google.com/file/d/1zYhvkQoEOMa1mdqrYz8VEJc4UesDxhY1/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "#",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["#"],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-637XXXXXXX",
  email_address: "pradeepsajnani742@gmail.com",
  display : true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
