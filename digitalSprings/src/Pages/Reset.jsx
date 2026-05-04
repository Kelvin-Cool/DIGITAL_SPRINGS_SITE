import React, { useEffect, useState } from 'react';
import './Login.css';
function Reset() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    script.type = 'module';
    document.body.appendChild(script);

    const nomoduleScript = document.createElement('script');
    nomoduleScript.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    nomoduleScript.noModule = true;
    document.body.appendChild(nomoduleScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(nomoduleScript);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Show error only after confirmPassword is entered and does not match password
    if (name === 'confirmPassword') {
      if (value && value !== form.password) {
        setError('Passwords do not match');
      } else {
        setError('');
      }
    } else if (name === 'password') {
      if (form.confirmPassword && form.confirmPassword !== value) {
        setError('Passwords do not match');
      } else {
        setError('');
      }
    }
  };

  // Simulate sending authentication email
  const sendAuthEmail = async (email) => {
    // In a real app, call your backend API to send the email
    // Example: await api.sendAuthEmail(email);
    // For simulation, just resolve after a timeout
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  // Remove navigate since it's not defined, or import useNavigate if needed
  // import { useNavigate } from 'react-router-dom';
  // const navigate = useNavigate();

  const handleSendAuthEmail = async (email) => {
    try {
      await sendAuthEmail(email);
      alert(
        `A verification email has been sent to ${email}. Please check your inbox and follow the link to log in.`
      );
      // navigate('/Login', { state: { email } }); // Uncomment if using react-router
    } catch (err) {
      setError('Failed to send authentication email. Please try again.');
    }
  };

  // Update handleSubmit to send the authentication email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Simulate registration API call
      // await api.register(form);
      // After successful registration, send authentication email
      await handleSendAuthEmail(form.email);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };
  return (
    <div>
      <div className="wrapper2">
        <div className="form">
          <h10>Reset Password</h10>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label htmlFor="email">Email:</label>
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">New Password:</label>
              <span className="icon" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                <ion-icon name={showPassword ? "eye-outline" : "eye-off-outline"}></ion-icon>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <span className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                <ion-icon name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}></ion-icon>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                required
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                id="check"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="check">Remember me</label>
            </div>
           {error && <div className="error-message">{error}</div>}
            <button type="submit">Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
