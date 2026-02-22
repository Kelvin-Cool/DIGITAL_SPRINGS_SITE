import React from 'react'
import './Jobs.css'
import { useLoaderData, Link } from 'react-router-dom';

const Jobs = () => {
    const jobsData=useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link >
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
  )
}

export default Jobs

export const JobsLoader = async () => {
    try {
        const response = await fetch('http://localhost:5000/Jobs');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}