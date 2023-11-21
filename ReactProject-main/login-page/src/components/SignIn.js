// SignIn.js

import React, { useState } from 'react';
import { Typography, Button, TextField, Link, Grid, CssBaseline, Container } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import image1 from './logo.jpg'; 

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    const storedUserDetails = localStorage.getItem('userDetails');

    if (storedUserDetails) {
      const userDetails = JSON.parse(storedUserDetails);

      if (email === userDetails.email && password === userDetails.password) {
        // Log a message to confirm successful login
        console.log('Login successful! Navigating to the dashboard.');

        // Redirect to the dashboard after successful login
        navigate('/dashboard', { state: { user: userDetails } });
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('User not found. Please sign up.');
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', backgroundSize: 'cover', borderRadius: '10px' }}>
        <CssBaseline />
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', width: '80%' }}>
            <img src="https://img.freepik.com/vecteurs-premium/illustration-vectorielle-personnage-dessin-anime-graphique-connexion_516790-1261.jpg?w=2000" alt="Modern Design" style={{ height: '450px', width: '450px', borderRadius: '10px', marginRight: '20px' }} />
            <div style={{ width: '60%' }}>
            <Typography variant="h4" gutterBottom>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={image1}
                    alt="Modern Design"
                    style={{
                      height: '60px',
                      width: '130px',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                </div>
              </Typography>
              <form onSubmit={handleSignIn} style={{ width: '350px' }}>
                <Grid container spacing={2}>
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
                  Sign In
                </Button>
              </form>
              <Typography variant="body2" style={{ marginTop: 10 }}>
                Don't have an account? <Link component={RouterLink} to="/signup" color="primary">Sign Up</Link>
              </Typography>
              <Typography variant="body2" style={{ marginTop: 10 }}>
                <Link component={RouterLink} to="/forgot-password" color="primary">Forgot Password?</Link>
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
