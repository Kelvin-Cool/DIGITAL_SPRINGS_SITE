import React from 'react'
import './Jobs.css'
import { useLoaderData, Link } from 'react-router-dom';
import jobsDataLocal from '../assets/Data.json';


const Jobs = () => {
    const jobsData=useLoaderData();
  return (
    <>
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={`/Jobs/${job.id || job._id}`} key={job.id || job._id}>
            <div>
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>{job.description}</p>
              <p>{job.deadline}</p>
            </div>
          </Link>
        );
      })}
    </div>
    </>
  )
}

export default Jobs

export const JobsLoader = async () => {
    return jobsDataLocal;
}