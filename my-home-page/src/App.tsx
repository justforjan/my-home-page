import { useState, useEffect} from "react";
import { Job as LifeStationType } from "./models/models.ts"

import Projects from "./components/Projects.tsx";
import LifeStations from "./components/LifeStations.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Header from "./components/Header.tsx";
import { getAllJobs, getAllEducation } from "./services/BackendConnector.ts"

export default function App() {

    const [jobs, setJobs] = useState<LifeStationType[]>([]);
    const [education, setEducation] = useState<LifeStationType[]>([]);

    useEffect(() => {
        async function fetchData() {
            const jobs = await getAllJobs();
            const education = await getAllEducation();
            setJobs(jobs);
            setEducation(education);
        }
        fetchData();

    }, []) // runs only once

    return (
        <div className="p-5 pb-20">
            <div className="container mx-auto max-w-2xl cursor-default">

                <Header/>
                <AboutMe/>
                <LifeStations title="My Jobs" life_stations={jobs}/>
                <LifeStations title="My Education" life_stations={education}/>
                <Projects/>

            </div>
        </div>

    )
}