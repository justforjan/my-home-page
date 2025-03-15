import {Project} from "../models/models.ts";
import homepage_screenshot from "../assets/homepage_screenshot.png";
import squeak_td from "../assets/squeak_td.png";
import cs50project from "../assets/cs50project.png"

const personal_website: Project = {
    id: 1,
    title: "My personal Website",
    date: new Date('2021-03-01'),
    description: "The website you are looking at is my very first one. I built it as an exercise to learn how to develop front-ends and how to build simple deployments pipelines. I built it using ReactJS, Docker, and Github Actions",
    links: [{
        name: "Github",
        url: "https://github.com/justforjan/my-home-page"
    },],
    image: homepage_screenshot,
    tools: ['ReactJS', 'Docker', 'Github Actions', 'Tailwind'],
}

const squeak: Project = {
    id: 2,
    title: "Tower Defense Game in Squeak/Smalltalk",
    date: new Date('2025-01-01'),
    description: 'We were tasked with creating a game in Squeak/Smalltalk in the University Module "Software Architecture"',
    links: [{
        name: "Github",
        url: "https://github.com/hpi-swa-teaching/swa24-25-group17"
    }],
    image: squeak_td,
    tools: ['Squak/Smalltalk']
}

const cs50finalproject: Project = {
    id: 3,
    title: "CS50 Final Project",
    date: new Date('2021-01-01'),
    description: "This is my capstone project of CS50. CS50 is a course developes by David Malan and hist team at Harvard and Yale. The course material is freely available online and covers basics of Computer Science. We learned the principles of programming in C, Python and SQL, Datastructures and Algorithms and Web Development. As a final project I developed an Expense Tracker with Flask. I currently is not deployed but I am thinking about deploying it in the near future for demonstration purposes.",
    links: [{
        name: 'YouTube',
        url: 'https://youtu.be/aA5bLuLiqWE?si=ckbiVcr8N4LS3vTG'
    }, {
        name: "Github",
        url: "https://github.com/justforjan/FinanceTracker"
    }],
    image: cs50project,
    tools: ['Flask', 'Python', 'Jinja', 'HMTL', 'Bootstrap']
}

const ttt: Project = {
    id: 4,
    title: 'TicTacToe',
    date: new Date('2024-06-01'),
    description: 'As part of the lecture "Distributed Systems" we were tasked with developing a small distributed System. We decided to build a TicTacToe web application based on cookies. The app is currently not deployed but I would love to deploy in the in the future.',
    links: [{
        name: 'Gitlab',
        url: '123',
    }
    ],
    tools: ['Djano', 'Python', 'PostgreSQL', 'Docker']
}

// const sampleProject: Project = {
//     id: 3,
//     title: "My third project",
//     description: "This is a small description of my third project",
//     links: [{
//         name: "Github",
//         url: "https://github.com/justforjan"
//     }, {
//         name: "Website",
//         url: "#"
//     }]
// }

export const projects: Project[]  = [
    personal_website,
    squeak,
    cs50finalproject,
    ttt,
];
