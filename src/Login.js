import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    // Check if user exists and credentials are valid
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('auth', true); // Store authentication status
      navigate('/home'); // Redirect to home page after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  const handleInputChange = (e) => {
    setError(''); // Clear error on input change
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <Box className="container" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box className="login-container" sx={{ width: '300px' }}> {/* Set a fixed width */}
        <Typography variant="h4">Login</Typography>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          value={email}
          onChange={handleInputChange}
          fullWidth
          error={!!error}
          sx={{ marginBottom: 2 }} // Adjust margin as needed
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={password}
          onChange={handleInputChange}
          fullWidth
          error={!!error}
          helperText={error}
          sx={{ marginBottom: 2 }} // Adjust margin as needed
        />
        <FormControlLabel
          control={<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />}
          label="Show Password"
        />
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
        <Link to="/register" className="signup-link" style={{ display: 'block', marginTop: '10px' }}>
          Don’t have an account? Sign up
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
