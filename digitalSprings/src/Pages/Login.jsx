import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Login()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic (replace with real API call)
    if (!email || !password) {
      setError('Email and password are required');
      return;
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Dummy check: replace with real authentication
    if (email === email  && password === password) {
      setError('');
      navigate('/Dashboard');
    } else {
      setError('Invalid Login');
    }
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    script.type = "module";
    document.body.appendChild(script);

    const nomoduleScript = document.createElement('script');
    nomoduleScript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    nomoduleScript.noModule = true;
    document.body.appendChild(nomoduleScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(nomoduleScript);
    };
  }, []);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  return (
    <div>
      <div className="wrapper2">
        <div className="form">
          <h10>Login</h10>
          <form action="/Login" method="POST" onSubmit={handleSubmit}>
            <div className="input-box">
              <label htmlFor="email">Email:</label>
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password:</label>
              <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="remember-me1">
              <input
                type="checkbox"
                id="check"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="check">Remember me</label>
              <NavLink to="/Reset">Reset password</NavLink>
            </div>
            <button type="submit">Login</button>
            <div className="login-link1"><br />
              <p>Don't have an account? <NavLink to="/Register">Register</NavLink></p><br/>
              <p className="liw">**************OR*************<br/><br/> Log in with</p>
            </div>
            <div className="icn">
             {/*<NavLink to="#"><ion-icon name="logo-facebook"></ion-icon></NavLink>*/}
             {/*<NavLink to="#"><ion-icon name="logo-instagram"></ion-icon></NavLink>*/}
            {/* <NavLink to="#"><ion-icon name="logo-twitter"></ion-icon></NavLink>*/}
             <NavLink to="#"><ion-icon name="logo-google"></ion-icon></NavLink>
            {/* <NavLink to="#"><ion-icon name="logo-skype"></ion-icon></NavLink>*/}
             <NavLink to="#"><ion-icon name="logo-github"></ion-icon></NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
