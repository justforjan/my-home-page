import {Project} from "../models/models.ts";
import homepage_screenshot from "../assets/homepage_screenshot.png";
import squeak_td from "../assets/squeak_td.png";

const personal_website: Project = {
    title: "My personal Website",
    description: "The website you are looking at is my very first one",
    links: [{
        name: "Github",
        url: "https://github.com/justforjan/my-home-page"
    },],
    image: homepage_screenshot,
    tools: ['ReactJS', 'Docker', 'Github Actions'],
}

const squeak: Project = {
    title: "Tower Defense Game in Squeak/Smalltalk",
    description: 'We were tasked with creating a game in Squeak/Smalltalk in the University Module "Software Architecture"',
    links: [{
        name: "Github",
        url: "https://github.com/hpi-swa-teaching/swa24-25-group17"
    }],
    image: squeak_td,
    tools: ['Squak/Smalltalk']
}

const project3: Project = {
    title: "My third project",
    description: "This is a small description of my third project",
    links: [{
        name: "Github",
        url: "https://github.com/justforjan"
    }, {
        name: "Website",
        url: "#"
    }]
}

export const projects: Project[]  = [
    personal_website,
    squeak,
    project3
];
