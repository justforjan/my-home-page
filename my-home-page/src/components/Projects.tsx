import Project from "./Project.tsx";
import { useEffect, useState } from "react";
import {Project as ProjectType} from "../models/models.ts";
import { getAllProjects } from "../services/BackendConnector.ts";

export default function Projects() {

    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(() => {
        async function fetchData() {
            const projects = await getAllProjects();
            setProjects(projects);
        }
        fetchData();
        }
    )

    return(
        <>
            <h2 className="subtitle">My Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <Project project={project}/>
                ))}
            </div>
        </>
    )
}