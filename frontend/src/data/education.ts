import {Job} from "../models/models.ts";

const mannheim: Job = {
    id: 1,
    title: 'B. Sc. Engineering and Management',
    at: 'Hochschule Mannheim',
    start: new Date('2018-09'),
    end: new Date('2023-03'),
    skills: [],
    link: 'https://www.wing.hs-mannheim.de/studierende/aktuelleshtml/bachelor-studiengang-wbi.html'
}

const hpi: Job = {
    id: 1,
    title: 'B. Sc. IT-Systems Engineering',
    at: 'Hasso-Plattner-Institut',
    start: new Date('2023-10'),
    skills: ['C', 'C++', 'Python', 'Django'],
    link: 'https://hpi.de/studium/'
}

export const educations: Job[] = [
    mannheim,
    hpi,
]