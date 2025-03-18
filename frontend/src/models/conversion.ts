import {Job, Link, Project} from "./models.ts";

interface backendProjectResponse {
    id: number,
    title: string,
    description: string,
    links: Link[],
    image?: string,
    date: string,
    tools?: string[],
}

interface backendJobResponse {
    id: number,
    title: string,
    start: string,
    end?: string,
    at?: string,
    description?: string,
    skills?: string[],
    link?: string,
}

interface backendEducationResponse {
    id: number,
    title: string,
    start: string,
    end?: string,
    at?: string,
    description?: string,
    skills?: string[],
    link?: string,
}


export function toProject(request: backendProjectResponse): Project {
    return {...request, date: new Date(request.date)};
}

export function toProjects(request: backendProjectResponse[]): Project[] {
    return request.reduce<Project[]>((acc, response) => {
        acc.push(toProject(response));
        return acc;
    }, [])
}

export function toJob(request: backendJobResponse): Job {
    return {...request, start: new Date(request.start), end: request.end ? new Date(request.end) : undefined };
}

export function toJobs(request: backendJobResponse[]): Job[] {
    return request.reduce<Job[]>((acc, response) => {
        acc.push(toJob(response));
        return acc
    }, [])
}

export function toEducation(request: backendEducationResponse) {
    return toJob(request);
}

export function toEducations(request: backendEducationResponse[]) {
    return toJobs(request);
}

