import project_default from "../assets/project_default.jpg"
import { Project as ProjectType } from "../models/models.ts";


function Project({ project }: { project: ProjectType }) {

    const lengt_of_description: number = 60;

    return (
    <div className="shadow-lg border rounded-lg overflow-hidden hover:shadow">
        <div className="aspect-[16/9] w-full object-cover">
            <img alt="image for project" className="w-full h-full" src={project.image ? project.image : project_default}></img>
        </div>
        <div className="p-3">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description.substring(0, lengt_of_description)}{project.description.length > lengt_of_description ? '...' : ''}</p>
            <div className="flex mt-4">
                {project.links.map((link) => (
                    <a className="link-button" target="_blank" rel="noopener noreferrer" href={link.url}>{link.name}</a>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Project;