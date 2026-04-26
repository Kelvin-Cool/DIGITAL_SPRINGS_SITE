import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Apply.css';

const Apply = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const jobTitle = location.state?.jobTitle || "Job Advertisement";

    const [formData, setFormData] = useState({
        fullName: '',        email: '',
        phone: '',
        cv: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState('');

    // Effect to clear success message and redirect
    React.useEffect(() => {
        if (result === 'Application submitted successfully!') {
            const timer = setTimeout(() => {
                navigate('/Jobs');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [result, navigate]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult('Processing your application...');

        // Simulate API call and email sending
        setTimeout(() => {
            // 1. Success Feedback
            setResult('Application submitted successfully!');
            
            // 2. Notification simulation
            console.log(`Email sent to ${formData.email}: Confirmation for ${jobTitle}`);
            alert(`Success! A confirmation has been sent to ${formData.email}.`);
            
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <>
        <div className="apply-container">
            <div className="apply-box">
                <h2>Apply for: {jobTitle}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cv">Upload CV (PDF/Doc):</label>
                        <input
                            type="file"
                            id="cv"
                            name="cv"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
                {result && <div className={`form-result ${result.includes('success') ? 'success' : ''}`}>{result}</div>}
            </div>
        </div>
        </>
    );
};

export default Apply;