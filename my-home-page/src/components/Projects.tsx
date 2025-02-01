import {projects} from "../data/projects.ts";
import Project from "./Project.tsx";

export default function Projects() {
    return(
        <>
            <h2 className="text-3xl font-bold my-8">My Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <Project project={project}/>
                ))}
            </div>
        </>
    )
}