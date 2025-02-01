import {Job} from "../models/models.ts";

const mannheim: Job = {
    title: 'B. Sc. Engineering and Management',
    at: 'Hochschule Mannheim',
    from: new Date('2018-09'),
    to: new Date('2023-03'),
    skills: []
}

const hpi: Job = {
    title: 'B. Sc. IT-Systems Engineering',
    at: 'Hasso-Plattner-Institut',
    from: new Date('2023-10'),
    skills: ['C', 'C++', 'Python', 'Django']
}

export const educations: Job[] = [
    mannheim,
    hpi,
]