import {useParams} from "react-router";
import {useEffect} from "react";
import {Project as ProjectType} from "../models/models.ts";
import {getProject} from "../services/BackendConnector.ts";

export default function ProjectPage() {

    let project: ProjectType | undefined;

    const { pid } = useParams();

    useEffect(() => {
        async function fetchProject() {
            project = await getProject(pid);
            console.log(project)
        }
        fetchProject();
    }, []);

    return <p>This is a sample Project Page for Project {pid}</p>
}