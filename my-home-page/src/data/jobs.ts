import {Job} from "../models/models.ts";

const job1: Job = {
    title: 'Working Student Software Development',
    from: new Date('2024-12-01'),
    at: 'Codecentric AG',
    description: 'I worked as a Software Engineer at Codecentric as part of the Dashboard team. I worked in the front end, backend and infratructure',
    skills: ['React', 'Scala', 'Docker', 'Typescript'],
    link: 'https://www.codecentric.de/',
}

const job2: Job = {
    title: 'Entrepreneur in Residence',
    from: new Date('2023-01-14'),
    to: new Date('2024-01-10'),
    at: 'Bike Club',
    description: 'I defined several key processes covering operations, IT, logistics and customer operations',
    skills: ['Process Management','Customer Operations', 'Salesforce', 'Automation', 'Notion', 'Entrepreneursip'],
}

export const jobs: Job[] = [
    job1,
    job2,
]