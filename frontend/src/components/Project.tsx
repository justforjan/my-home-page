import project_default from "../assets/project_default.jpg"
import { Project as ProjectType } from "../models/models.ts";
import {Link} from "react-router";


function Project({ project }: { project: ProjectType }) {

    const length_of_description: number = 60;

    return (
        <Link to={"project/" + project.id} className="text-black">
            <div className="shadow-lg border rounded-lg overflow-hidden hover:shadow">
                <div className="aspect-[16/9] w-full object-cover">
                    <img alt="image for project" className="w-full h-full" src={project.image ? project.image : project_default}></img>
                </div>
                <div className="p-3">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    {project.description ? <p className="mt-2">{project.description.substring(0, length_of_description)}{project.description.length > length_of_description ? '...' : ''}</p> : <></>}
                </div>
            </div>
        </Link>
    )
}

export default Project;