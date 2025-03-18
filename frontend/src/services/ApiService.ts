import {Job as LifeStationType, Project as ProjectType} from "../models/models.ts"

import {educations} from "../data/education.ts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const JOBS = "jobs"
const PROJECTS = "projects"

class ApiService {
    async getAllJobs(): Promise<LifeStationType[]> {
        try {
            console.log("fetching jobs");
            const response = await fetch(`${API_BASE_URL}/${JOBS}`);
            if (!response.ok) throw new Error("Failed to fetch jobs");
            return (await response.json()) as LifeStationType[];
        } catch (error) {
            console.error("Error fetching jobs:", error);
            return [];
        }
    }

    async getJob(id: string): Promise<LifeStationType | undefined> {
        try{
            console.log(`fetching job ${id}`);
            const response = await fetch(`${API_BASE_URL}/${JOBS}/${id}`);
            if (!response.ok) throw new Error("Failed to fetch jobs");
            return (await response.json()) as LifeStationType;
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }


    async getAllProjects(): Promise<ProjectType[]> {
        try {
            console.log("fetching projects");
            const response = await fetch(`${API_BASE_URL}/${PROJECTS}`);
            if (!response.ok) throw new Error("Failed to fetch jobs");
            return (await response.json()) as ProjectType[];
        } catch (error) {
            console.error("Error fetching jobs:", error);
            return [];
        }
    }

    async getProject(id: number | string | undefined): Promise<ProjectType | undefined> {
        if(typeof id === 'string') {
            id = parseInt(id)
        }
        try{
            console.log(`fetching project ${id}`);
            const response = await fetch(`${API_BASE_URL}/${PROJECTS}/${id}`);
            if (!response.ok) throw new Error("Failed to fetch jobs");
            const data = await response.json();
            console.log(`fetched project : ${data}`)
            return data as ProjectType;
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }

    async getAllEducation(): Promise<LifeStationType[]> {
        console.log("fetching education");
        return educations.sort((a, b) => b.start.valueOf() - a.start.valueOf());
    }
}

const apiService = new ApiService();
export default apiService;

