import project_default from "./assets/project_default.jpg"

interface ProjectProps {
    title: string;
}

function Project({title}: ProjectProps) {

    return <div className="shadow border">
        <img src={project_default}></img>
        <h2>{title}</h2>
        <p>This is a project</p>
    </div>

}

export default Project;