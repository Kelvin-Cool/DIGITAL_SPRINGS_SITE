import React, { useState, useEffect } from 'react';
import './Register.css';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Utility function to check password strength
  const getPasswordStrength = (password) => {
    if (password.length < 6) return 'weak password';
    if (password.length < 8) return 'strong password';
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      return 'very strong password';
    }
    return 'strong password';
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    script.type = 'module';
    document.body.appendChild(script);

    const nomoduleScript = document.createElement('script');
    nomoduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    nomoduleScript.noModule = true;
    document.body.appendChild(nomoduleScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(nomoduleScript);
    };
  }, []);

  // Dummy sendAuthEmail function to simulate sending an email
  const sendAuthEmail = async (email) => {
    // Simulate API call delay
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleSendAuthEmail = async (email) => {
    try {
      await sendAuthEmail(email);
      alert(
        `A verification email has been sent to ${email}. Please check your inbox and follow the link to log in.`
      );
      navigate('/Login', { state: { email } });
    } catch (err) {
      setError('Failed to send authentication email. Please try again.');
    }
  };

  // Update handleSubmit to send the authentication email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Simulate registration API call
      // await api.register(formData);
      // After successful registration, send authentication email
      await handleSendAuthEmail(formData.email);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div>
      <div className="wrapper1">
        <div className="form">
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label htmlFor="username">Username:</label>
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email:</label>
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password:</label>
              <span className="icon" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                <ion-icon name={showPassword ? "eye-outline" : "eye-off-outline"}></ion-icon>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <div className={`password-strength ${getPasswordStrength(formData.password)}`}>
                Strength: {getPasswordStrength(formData.password)}
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <span className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                <ion-icon name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}></ion-icon>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <div className="error-message">Passwords do not match</div>
              )}
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                id="check"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="check">Remember me</label>
              <NavLink to="/Reset">Forgot Password?</NavLink>
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Signup</button>
            <div className="login-link2">
              <p>
                Already have an account? <NavLink to="/Login">Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
