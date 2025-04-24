import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Add your registration API call here
  };

  return (
    <section>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          
          <div className="input-box">
            <span className="icon"></span>
            <input 
              type="text" 
              id="username" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              required 
            />
            <label>Username</label>
          </div>

          <div className="input-box">
            <span className="icon"></span>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon"></span>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
            />
            <label>Password</label>
          </div>

          <button type="submit">Sign up</button>
          
          <div className="register-link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;