import {Job as JobType, Project as ProjectType} from "../models/models.ts"

import {jobs} from "../data/jobs.ts";
import {projects} from "../data/projects.ts";
import {educations} from "../data/education.ts";

const API_BASE_URL = "api.justforjan.eu"
const JOBS = "jobs"
// const PROJECTS = "projects"

class ApiService {
    async getAllJobs(){
        console.log("fetching jobs")
        fetch(`http://${API_BASE_URL}/${JOBS}`).then(res => res.json()).then(res => console.log(res));
    }
}

const apiService = new ApiService();


export async function getAllJobs(): Promise<JobType[]> {
    await apiService.getAllJobs();
    return jobs.sort((a,b) => b.start.valueOf() - a.start.valueOf());
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
    return educations.sort((a, b) => b.start.valueOf() - a.start.valueOf());
}
