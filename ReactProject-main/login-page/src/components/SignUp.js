// SignUp.js

import React, { useState } from 'react';
import { Typography, Button, TextField, Link, Grid, CssBaseline, Container } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Simulate a sign-up request. Replace with actual sign-up logic.
    // In a real application, you might use a service like Firebase or send a request to a server.
    if (fullName && email && password) {
      // Store user details in local storage
      const userDetails = { fullName, email, password };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));

      // Redirect to the sign-in page after successful sign-up
      navigate('/');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundImage: `url('https://wallpaper.dog/large/20459121.jpg')`,
      width:'1920px',
      height:'1080px',
      backgroundPosition: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', backgroundSize:'cover',borderRadius:'10px'}}>
        <CssBaseline />
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', width: '80%' }}>
            <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg?w=2000" alt="Modern Design" style={{ height: '450px', width: '450px', borderRadius: '10px', marginRight: '20px' }} />
            <div style={{ width: '60%' }}>
              <Typography variant="h4" gutterBottom>
                Create an Account
              </Typography>
              <form onSubmit={handleSignUp} style={{width:'350px'}}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
                  Sign Up
                </Button>
              </form>
              <Typography variant="body2" style={{ marginTop: 10 }}>
                Already have an account? <Link component={RouterLink} to="/" color="primary">Sign In</Link>
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
