import {Project} from "../models/models.ts";

const project1: Project = {
    title: "My first project",
    description: "This is a small description of my first project",
    links: [{
        name: "Github",
        url: "https://github.com/justforjan"
    }, {
        name: "Website",
        url: "#"
    }]
}

const project2: Project = {
    title: "My second project",
    description: "This is a longer summary of my second ever software engineering project that I did as a final project ofCS50",
    links: [{
        name: "Github",
        url: "https://github.com/justforjan"
    }]
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
    project1,
    project2,
    project3
];
