export interface Link {
    name: string,
    url: string,
}

export interface Project {
    title: string,
    description: string,
    links: Link[],
}

export interface Social {
    name: string,
    url: string,
    image: string,
}

