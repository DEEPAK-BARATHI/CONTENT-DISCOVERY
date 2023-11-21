// Dashboard.js

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Paper,
  Button,
  InputBase,
  Typography,
  CssBaseline,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import image1 from './logo.jpg';

const Dashboard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <CssBaseline />

      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img src={image1} alt="Logo" style={{ marginRight: '10px', height: '60px', width: '130px' }} />
          </div>

          {/* Container for Home, About Us, Quirky buttons */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: 'auto' }}>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('/dashboard/home')}
                style={{ fontFamily: 'inherit', color: '#ffffff', marginLeft: '10px' }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('/dashboard/about-us')}
                style={{ fontFamily: 'inherit', color: '#ffffff', marginLeft: '10px' }}
              >
                About Us
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick('/dashboard/quirky')}
                style={{ fontFamily: 'inherit', color: '#ffffff', marginLeft: '10px' }}
              >
                Quirky
              </Button>
            </div>

            {/* Search Bar */}
            <Paper component="form" style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px', borderRadius: '20px' }}>
              <IconButton edge="start" color="inherit" aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search..."
                style={{ flex: 1, marginLeft: '5px' }}
                // Implement search functionality as needed
              />
            </Paper>

            {/* Move AccountCircleIcon to the right */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleLogout} style={{ color: '#000000' }}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h4" style={{ color: '#000000', fontFamily: 'Bangers', fontSize: '70px' }}>
          GET INFORMED
        </Typography>
        <Typography variant="h4" style={{ color: '#000000', fontFamily: 'Bangers', fontSize: '70px' }}>
          GET INSPIRED
        </Typography>
        <div style={{ backgroundColor: '#FF0000', height: '8px', width: '350px', margin: '10px auto', borderRadius: '10px' }}></div>
        <Typography variant="h4" style={{ color: '#000000', fontFamily: 'Cookie' }}>
          Stories Curated For You
        </Typography>
      </div>
    </div>
  );
};

export default Dashboard;
