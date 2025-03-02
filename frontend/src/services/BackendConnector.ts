import {Job as JobType, Project as ProjectType} from "../models/models.ts"

import {jobs} from "../data/jobs.ts";
import {projects} from "../data/projects.ts";
import {educations} from "../data/education.ts";


export async function getAllJobs(): Promise<JobType[]> {
    return jobs.sort((a,b) => b.from.valueOf() - a.from.valueOf());
}

export async function getJob(id: number): Promise<JobType | undefined> {
    return jobs.find((job) => job.id == id);
}

export async function getAllProjects(): Promise<ProjectType[]> {
    return projects;
}

export async function getProject(id: number | string| undefined): Promise<ProjectType | undefined> {
    if(typeof id === 'string') {
        id = parseInt(id);
    }
    return projects.find((project) => project.id == id);
}

export async function getAllEducation(): Promise<JobType[]> {
    return educations.sort((a, b) => b.from.valueOf() - a.from.valueOf());
}
