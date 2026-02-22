import React from 'react'
import './job-details.css';
import { useLoaderData } from 'react-router-dom';


const JobDetails = () => {
    
    const jobDetails= useLoaderData();
    // Here you would typically fetch the job details using the id
  return (
    <div className='job-details'>
    <p><b>Job Title:</b>{jobDetails.title}</p>
    <p><b>Company:</b>{jobDetails.company}</p>
    <p><b>Location:</b>{jobDetails.location}</p>
    <p><b>Salary:</b>{jobDetails.salary}</p>
    <p><b>Description:</b>Do you want to apply?</p>
    <p><b>Deadline:</b>{jobDetails.deadline}</p>
    <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`http://localhost:5000/Jobs/` + id);
    
    return response.json();
};
