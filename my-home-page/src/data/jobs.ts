import {Job} from "../models/models.ts";

const codecentric: Job = {
    title: 'Working Student Software Development',
    from: new Date('2024-12-01'),
    at: 'Codecentric AG',
    description: 'I worked as a Software Engineer at Codecentric as part of the Dashboard team. I worked in the front end, backend and infratructure',
    skills: ['React', 'Scala', 'Docker', 'Typescript'],
    link: 'https://www.codecentric.de/',
}

const bikeclub: Job = {
    title: 'Entrepreneur in Residence',
    from: new Date('2023-01-14'),
    to: new Date('2024-01-10'),
    at: 'Bike Club',
    description: 'I defined several key processes covering operations, IT, logistics and customer operations',
    skills: ['Process Management','Customer Operations', 'Salesforce', 'Automation', 'Notion', 'Entrepreneursip'],
}

const stocard: Job = {
    title: 'Business Development Intern',
    from: new Date('2021-08-01'),
    to: new Date('2022-02-14'),
    at: 'Stocard GmbH',
    description: 'I supporeted Sales and Business Development with Analyses.',
    skills: ['Salesforce', 'Data Analytics'],
    link: 'https://stocardapp.com/'
}

export const jobs: Job[] = [
    codecentric,
    bikeclub,
    stocard,
]