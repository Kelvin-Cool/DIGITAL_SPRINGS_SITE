import React, { useState } from 'react'
import './job-details.css';
import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import jobsDataLocal from '../assets/Data.json';
import Apply from '../Pages/Apply';

const JobDetails = () => {
    
    const jobDetails= useLoaderData();
    const [showApply, setShowApply] = useState(false);

    if (showApply) {
        return <Apply jobTitleProp={jobDetails?.title} />;
    }

    if (!jobDetails) {
        return (
            <div className='job-details-container'>
                <div className='job-card'>
                    <h2 style={{ textAlign: 'center', color: '#ff342b' }}>Job not found</h2>
                    <div className="job-actions">
                        <Link to="/Jobs" className="back-link">Back to Jobs list</Link>
                    </div>
                </div>
            </div>
        );
    }

  return (
    <>
    <div className='job-details-container'>
      <div className='job-card'>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Company: </b>{jobDetails.company}</p>
        <p><b>Location: </b>{jobDetails.location}</p>
        <p><b>Salary: </b>{jobDetails.salary}</p>
        <p><b>Qualification: </b>{jobDetails.qualification}</p>
        <p><b>Work Experience: </b>{jobDetails.experience}</p>
        <p><b>Job Description: </b>{jobDetails.description}</p>
        <p><b>Deadline: </b>{jobDetails.deadline}</p>
        <div className="job-actions">
            <button type="submit" className="apply-btn"
                onClick={() => setShowApply(true)}
            >
                Apply Now
            </button>
            <Link to="/Jobs" className="back-link">Back to Jobs</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({ params }) => {
    const { id } = params;
    return jobsDataLocal.find(job => (job.id || job._id).toString() === id) || null;
};
