import {Job as JobType} from "../models/models.ts";
import { formatDateToYearMonth } from "../utils/helper.ts";



function Job({job}: { job: JobType }) {

    return (
        <div className=" my-4 border-indigo-300">
            <div className="m-3">
                <div className="flex justify-between">
                    <h3 className="font-bold">{job.title}</h3>
                    <p>{job.end ? `${formatDateToYearMonth(job.start)} - ${formatDateToYearMonth(job.end)}` : `${formatDateToYearMonth(job.start)} - Today`}</p>
                </div>
                <p className="">{job.link ? <a target="_blank" rel="noopener noreferrer" href={job.link}>@ {job.at}</a> : `@ ${job.at}`}</p>
                <p className="text-justify mb-1">{job.description ?? job.description}</p>
                {job.skills ? <div className="flex flex-wrap my-2">
                    { job.skills.map(skill => <div className="skill">{skill}</div>)}
                </div> : <></>}
            </div>
        </div>
    )
}

export default Job;