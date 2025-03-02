import {Social} from "../models/models.ts";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const github: Social = {
    name: "GitHub",
    url: "https://github.com/justforjan",
    image: FaGithub
}

const linkedin: Social = {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jan-schneider-b0864a1bb/",
    image: FaLinkedin
}

const mail: Social = {
    name: 'Email',
    url: 'mailto:jan_schdr@outlook.de',
    image: MdOutlineMailOutline
}

export const socials: Social[] = [
    github,
    linkedin,
    mail,
]