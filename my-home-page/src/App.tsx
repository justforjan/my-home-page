import Project from "./components/Project";
import {projects} from "./data/projects.ts";


export default function App() {


  return (
    <div className="container mx-auto max-w-2xl m-10">

      <div className="justify-self-center pt-10">
        <h1 className="text-4xl font-bold mb-8">This is <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1 rounded-md text-white">Jan Schneider</span></h1>
      </div>

      <div className="text-center p-2">
        <p className="text-gray-500">I am a 25 year old computer science student at <a href="https://hpi.de/">HPI</a> in Potsdam.</p>
      </div>

      {}

      <h2 className="text-center text-3xl font-bold m-8">My Life</h2>

      <h2 className="text-center text-3xl font-bold m-8">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Project title={project.title} description={project.description} links={project.links}/>
        ))}
      </div>


    </div>
    

  )
}