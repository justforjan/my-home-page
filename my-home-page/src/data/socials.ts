import github_logo from "../assets/github.png";
import linkedin_logo from "../assets/linkedin.png";
import {Social} from "../models/models.ts";

const github: Social = {
    name: "GitHub",
    url: "https://github.com/justforjan",
    image: github_logo
}

const linkedin: Social = {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jan-schneider-b0864a1bb/",
    image: linkedin_logo
}

export const Socials: Social[] = [
    github,
    linkedin
]