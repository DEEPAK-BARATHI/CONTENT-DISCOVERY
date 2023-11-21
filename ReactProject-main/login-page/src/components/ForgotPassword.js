//ForgotPassword.js

import React, { useState } from 'react';
import { Typography, Button, TextField, Link, Grid, CssBaseline, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Simple logic: Display a success message in the console
    console.log(`Password reset requested for email: ${email}`);
    setResetRequested(true);

    // In a real-world scenario, you would send a reset link to the user's email
    // and handle the password reset process on the server side.
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
            <img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=2000" alt="Modern Design" style={{ height: '450px', width: '450px', borderRadius: '10px', marginRight: '20px' }} />
            <div style={{ width: '60%' }}>
              <Typography variant="h4" gutterBottom>
                Forgot Password
              </Typography>
              {resetRequested ? (
                <div>
                  <Typography variant="body1" style={{ marginBottom: 20 }}>
                    Password reset link sent to your email. Please follow the instructions to reset your password.
                  </Typography>
                  <Button component={RouterLink} to="/" variant="contained" color="primary" fullWidth>
                    Back to Sign In
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleResetPassword} style={{ width: '250px' }}>
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
                  </Grid>
                  <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
                    Reset Password
                  </Button>
                </form>
              )}
              <Typography variant="body2" style={{ marginTop: 10 }}>
                Remember your password? <Link component={RouterLink} to="/" color="primary">Sign In</Link>
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ForgotPassword;
