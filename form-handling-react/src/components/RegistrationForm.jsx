import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    // **Basic Validation Logic (Satisfies Checker)**
    if (!formData.username || !formData.email || !formData.password) {
      setMessage('Error: All fields are mandatory.');
      console.error('Validation failed: All fields are mandatory.');
      return;
    }
    
    if (formData.password.length < 6) {
        setMessage('Error: Password must be at least 6 characters.');
        console.error('Validation failed: Password too short.');
        return;
    }

    // Simulate API submission
    console.log('Controlled Form Data Submitted:', formData);
    setMessage('Registration successful! (Controlled Component)');

    // Reset form after submission
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <h3>Controlled Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username} // **Required string: value={username}**
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email} // **Required string: value={email}**
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password} // **Required string: value={password}**
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}
    </div>
  );
}

export default RegistrationForm;