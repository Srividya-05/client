// src/components/Home.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Clear authentication status
    localStorage.removeItem('user'); // Optional: Clear user details
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <AppBar position="static" sx={{ background: '#4caf50' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            KLU ERP
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: '200px',
            bgcolor: '#e0e0e0',
            height: '100%',
            padding: '20px',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          }}
        >
          <Button fullWidth component={Link} to="/courses" sx={{ marginBottom: '10px' }}>
            Courses
          </Button>
          <Button fullWidth component={Link} to="/faculty" sx={{ marginBottom: '10px' }}>
            Faculty
          </Button>
          <Button fullWidth component={Link} to="/timetable" sx={{ marginBottom: '10px' }}>
            Timetable
          </Button>
          <Button fullWidth component={Link} to="/student" sx={{ marginBottom: '10px' }}>
            Students
          </Button>
          <Button fullWidth component={Link} to="/library" sx={{ marginBottom: '10px' }}>
            Library
          </Button>
        </Box>

        {/* Main Content */}
        <Box sx={{ padding: '20px', flexGrow: 1, bgcolor: '#f9f9f9', minHeight: '100%' }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {user?.username || 'Guest'}!
          </Typography>
          <Typography variant="body1">This is your dashboard where you can manage courses, faculty, timetable, and more.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;