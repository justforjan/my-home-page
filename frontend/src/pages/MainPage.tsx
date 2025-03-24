import {useEffect, useState} from "react";
import {Job as LifeStationType} from "../models/models.ts";
import api from "../services/ApiService.ts";
import Header from "../components/Header.tsx";
import AboutMe from "../components/AboutMe.tsx";
import LifeStations from "../components/LifeStations.tsx";
import Projects from "../components/Projects.tsx";

export default function MainPage() {

    const [jobs, setJobs] = useState<LifeStationType[]>([]);
    const [education, setEducation] = useState<LifeStationType[]>([]);

    useEffect(() => {
        async function fetchData() {
            const jobs = await api.getAllJobs();
            const education = await api.getAllEducation();
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
                <LifeStations title="🏢 Jobs" life_stations={jobs}/>
                <LifeStations title="🎓 Education" life_stations={education}/>
                <Projects/>

            </div>
        </div>

    )
}