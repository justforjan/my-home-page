import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {Project as ProjectType} from "../models/models.ts";
import {getProject} from "../services/BackendConnector.ts";

export default function ProjectPage() {

    const [project, setProject] = useState<ProjectType | undefined>();

    const { pid } = useParams();

    useEffect(() => {
        async function fetchProject() {
            const p = await getProject(pid);
            setProject(p);
        }
        fetchProject();
    }, [pid]);

    const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
    }



    if(project) {
        const formattedDate = project.date.toLocaleDateString(undefined, dateOptions);
        return (
            <>
                <h1 className="subtitle">{project.title}</h1>
                <p className="mb-2">{formattedDate}</p>
                {project.image ? <img alt={"This is a screenshot of my project " + project.title} src={project.image} /> : <></>}
                <p className="mb-3">{project.description}</p>
                {project.tools ?
                    <div>
                        <hr className="border-indigo-50"/>
                        <h2 className="subtitle" >Tools and Technologies</h2>
                        <div className="flex flex-wrap my-2">
                            {project.tools.map((tool) => {
                                return <div className="skill">{tool}</div>
                            })}
                        </div>
                    </div>
                 : <></>
                }
                <hr className="border-indigo-50 mb-3"/>
                <h2 className="subtitle" >Relevant Links</h2>
                <div className="flex mt-4">
                    {project.links.map((link) => (
                        <a className="link-button" target="_blank" rel="noopener noreferrer" href={link.url}>{link.name}</a>
                    ))}
                </div>

            </>

        )}
    return (
        <p>There is no project with the id {pid}</p>
    )
}