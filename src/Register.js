// src/components/Register.js

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUsername = (username) => /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(username);

  const handleRegister = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    else if (!validateUsername(username)) newErrors.username = 'Username must contain letters and numbers, with at least one letter';

    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Enter a valid email';

    // Removed password validation restriction
    if (!password) newErrors.password = 'Password is required'; 

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const user = { username, email, password };
      localStorage.setItem('user', JSON.stringify(user)); // Store user details
      navigate('/login'); // Redirect to login page after successful registration
    }
  };

  return (
    <Box className="container">
      <Box className="register-container">
        <Typography variant="h4">Register</Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
        />
        <Button variant="contained" onClick={handleRegister} fullWidth>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Register;