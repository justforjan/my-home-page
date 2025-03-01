import {IconType} from "react-icons";

export interface Link {
    name: string,
    url: string,
}

export interface Project {
    id: number,
    title: string,
    description: string,
    links: Link[],
    image?: string,
    date: Date,
    tools?: string[],
}

export interface Social {
    name: string,
    url: string,
    image: IconType,
}

export interface Job {
    id: number,
    title: string,
    from: Date,
    to?: Date,
    at?: string,
    description?: string,
    skills?: string[],
    link?: string,
}

