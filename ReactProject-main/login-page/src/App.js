// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import QuirkyPage from './components/QuirkyPage'; // Adjust the import based on your actual file structure

const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/signup"
            element={
              <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <SignUp />
              </Container>
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/dashboard/quirky"
            element={
                <QuirkyPage />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <ForgotPassword />
              </Container>
            }
          />
          <Route
            path="/"
            element={
              <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <SignIn />
              </Container>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
