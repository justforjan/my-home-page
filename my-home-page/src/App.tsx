import Projects from "./components/Projects.tsx";
import LifeStations from "./components/LifeStations.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Header from "./components/Header.tsx";
import {jobs} from "./data/jobs.ts";
import {educations} from "./data/education.ts";

export default function App() {

  return (
      <div className="p-5 pb-20">
          <div className="container mx-auto max-w-2xl cursor-default">

              <Header/>
              <AboutMe/>
              <LifeStations title="My Jobs" life_stations={jobs.sort((a,b) => b.from.valueOf() - a.from.valueOf())}/>
              <LifeStations title="My Education" life_stations={educations.sort((a, b) => b.from.valueOf() - a.from.valueOf())}/>
              <Projects/>



          </div>
      </div>

  )
}