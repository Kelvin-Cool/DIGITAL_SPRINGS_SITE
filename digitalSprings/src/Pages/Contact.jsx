import React, { useState, useEffect } from 'react';
import './Contact.css';
function Contact() {
const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    access_key: '83e883a5-a1b5-4ab3-8539-5fa429327c52'
});
  const [wordCount, setWordCount] = useState(0);
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(true);

  useEffect(() => {
    setWordCount(form.message.length);
  }, [form.message]);

  useEffect(() => {
    if (result) {
      setShowResult(true);
      const timer = setTimeout(() => {
        setShowResult(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name === "Phone Number" ? "phone" : name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Please wait...');
    setShowResult(true);

    const payload = {
      access_key: form.access_key,
      name: form.name,
      email: form.email,
      "Phone Number": form.phone,
      program: form.program,
      message: form.message
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (response.status === 200) {
        setResult('Form submitted successfully');
        setForm({
          name: '',
          email: '',
          phone: '',
          program: '',
          message: '',
          access_key: '83e883a5-a1b5-4ab3-8539-5fa429327c52'
        });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult('Something went wrong!');
    }
  };

  return (
    <>
      <div className="contact-container">
        <form method="POST" className="contact-left" onSubmit={handleSubmit}>
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr />
          </div>
          <input type="hidden" name="access_key" value={form.access_key} />
    <div className="contact-inputs">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={form.email}
        onChange={handleChange}
      /><br/>
      <input
        type="tel"
        name="Phone Number"
        placeholder="Enter your Phone"
        required
        value={form.phone}
        onChange={handleChange}
      />
      <select
        id="Program"
        name="program"
        value={form.program}
        onChange={handleChange}
      >
        <option value="">What do you want to register for...</option>
        <option value="website">Website development</option>
        <option value="Data Analysis">Data Analysis</option>
        <option value="UI">UI/UX Design</option>
        <option value="python">Python Programming</option>
        <option value="Javascript">JavaScript</option>
               <option value="react">React</option>
                      <option value="vue">Vue</option>
                             <option value="angular">Angular</option>
                                           <option value="typescript">Typescript</option>
                                                  <option value="firebase">Firebase</option>
      </select>
      <textarea
        name="message"
        rows="4"
        placeholder="How can we help you ?"
        className="contact-inputs"
        required
        value={form.message}
        onChange={handleChange}
      ></textarea>
      <p id="count">word count: <span id="count">{wordCount}</span></p>
     <button className="button">
  <div className="outline"></div>
  <div className="state state--default">
    <div className="icon">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style={{ filter: "url(#shadow)" }}>
          <path
            d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
            fill="currentColor"
          ></path>
          <path
            d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <filter id="shadow">
            <fedropshadow
              dx="0"
              dy="1"
              stdDeviation="0.6"
              floodOpacity="0.5"
            ></fedropshadow>
          </filter>
        </defs>
      </svg>
    </div>
    <p>
      <span style={{ "--i": 0 }}>S</span>
      <span style={{ "--i": 1 }}>e</span>
      <span style={{ "--i": 2 }}>n</span>
      <span style={{ "--i": 3 }}>d</span>
      <span style={{ "--i": 4 }}>M</span>
      <span style={{ "--i": 5 }}>e</span>
      <span style={{ "--i": 6 }}>s</span>
      <span style={{ "--i": 7 }}>s</span>
      <span style={{ "--i": 8 }}>a</span>
      <span style={{ "--i": 9 }}>g</span>
      <span style={{ "--i": 10 }}>e</span>
    </p>
  </div>
  <div className="state state--sent">
    <div className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        strokeWidth="0.5px"
        stroke="black"
      >
        <g style={{ filter: "url(#shadow)" }}>
          <path
            fill="currentColor"
            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
          ></path>
          <path
            fill="currentColor"
            d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
          ></path>
        </g>
      </svg>
    </div>
    <p>
      <span style={{ "--i": 5 }}>S</span>
      <span style={{ "--i": 6 }}>e</span>
      <span style={{ "--i": 7 }}>n</span>
      <span style={{ "--i": 8 }}>t</span>
    </p>
  </div>
</button>

      {showResult && <div id="result">{result}</div>}
    </div>
  </form>
  <div className="contact-right">
  </div>
</div>
</>
    );
    }

export default Contact;
