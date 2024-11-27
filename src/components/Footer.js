// src/components/Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', padding: '10px 0', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Car E-commerce. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <a href="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ textDecoration: 'none', color: 'inherit' }}> Terms of Service</a>
      </Typography>
    </Box>
  );
};

export default Footer;
