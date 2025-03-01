import Job from "./Job.tsx";
import {Job as JobType} from "../models/models.ts";

export default function LifeStations({title, life_stations}: {title: string, life_stations: JobType[] }) {
    return (
        <>
            <h2 className="subtitle">{title}</h2>

            {life_stations.map(job =>
                <>
                    <Job job={job}/>
                    <hr className="border-indigo-50"/>
                </>
            )}
        </>
    )
}