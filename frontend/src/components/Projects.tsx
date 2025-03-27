import Project from "./Project.tsx";
import { useEffect, useState } from "react";
import {Project as ProjectType} from "../models/models.ts";
import api from "../services/ApiService.ts";

export default function Projects() {

    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(() => {
        async function fetchData() {
            const projects = await api.getAllProjects();
            setProjects(projects);
        }
        fetchData();
        }, []
    )

    return(
        <>
            <h2 className="subtitle">💻 Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
        </>
    )
}