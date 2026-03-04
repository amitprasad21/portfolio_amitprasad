import {  scholarrank,gdsc ,college } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences =  [
  {
    title: "Data Analytics Intern",
    company_name: "ScholarRank.Ai (Remote)",
    icon: scholarrank, // add your company logo in assets
    iconBg: "#E6DEDD",
    date: "February 2025 - May 2025",
    points: [
      "Developed 10+ interactive dashboards using Power BI and Tableau, reducing reporting time by 40%.",
      "Performed data cleaning and transformation, reducing inconsistencies by 30% and improving model accuracy by 20%.",
      "Conducted market research on AI pricing models and analyzed industry trends.",
      "Collaborated with cross-functional teams to optimize AI-driven pricing strategies."
    ],
  },
  {
    title: "Co-Lead, Web Development",
    company_name: "Google Developer Student Clubs (GDSC)",
    icon: gdsc, // add GDSC logo in assets
    iconBg: "#B7E4C7",
    date: "December 2022 - August 2023",
    points: [
      "Facilitated web development workshops and mentored students in frontend and backend technologies.",
      "Led a team in building scalable web applications.",
      "Organized technical events and collaborative coding sessions.",
      "Strengthened leadership and project management skills."
    ],
  },
  {
    title: "B.Tech in Computer Science (AIML)",
    company_name: "Dronacharya Group of Institutions",
    icon: college, // optional college logo
    iconBg: "#FBC3BC",
    date: "November 2022 - Expected June 2026",
    points: [
      "Specializing in Artificial Intelligence and Machine Learning.",
      "Built multiple AI and full-stack projects including crowd prediction and gender recognition systems.",
      "Maintaining a CGPA of 7.7/10.0.",
      "Actively participating in hackathons and technical communities."
    ],
  },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/amitprasad21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/amitprasad21/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Resumind',
        description: 'Resumind is an AI-powered Resume Analyzer built with React, React Router v7, and Puter.js that helps candidates optimize their resumes based on specific companies and job roles. It provides personalized feedback and suggestions to enhance resume effectiveness, increasing the chances of landing interviews.',
        link: 'https://wanderlust-wis2.onrender.com/',
        github: 'https://github.com/amitprasad21/WanderLust-FULL_STACK-',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'WanderLust',
        description: 'An Airbnb-inspired full-stack web application that allows users to explore, book, and list travel accommodations. WanderLust provides an interactive map experience, secure authentication, image uploads, responsive UI, and a complete end-to-end booking workflow.',
        link: 'https://wanderlust-wis2.onrender.com/',
        github: 'https://github.com/amitprasad21/WanderLust-FULL_STACK-',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'LearnHub',
        description: 'LearnHub is a responsive React + TypeScript frontend for discovering age-appropriate learning courses for kids, with filters for subjects, instructors, and schedules.',
        link: 'https://learn-hub21.vercel.app/',
        github: 'https://github.com/amitprasad21/LearnHub21',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: ' Simon Says Game',
        description: 'Simon Says Game A simple Simon Says memory game built using HTML, CSS, and JavaScript. The player must repeat the sequence of colors shown by the game. Each round, the sequence gets longer, testing memory and focus.',
        link: 'https://simonsaygame01.netlify.app/',
        github: 'https://github.com/amitprasad21/WanderLust-FULL_STACK-',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Image Generator',
        description: 'A simple and fast tool to convert your text into customizable images.',
        link: 'https://text-img.netlify.app/',
        github: 'https://github.com/amitprasad21/AI_text_to_Image',
    },
    
    
];