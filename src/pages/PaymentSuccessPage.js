// src/pages/PaymentSuccessPage.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';  // Import Header
import Footer from '../components/Footer';  // Import Footer

const PaymentSuccessPage = () => {
  return (
    <div>
      <Header />  {/* Add Header */}
      
      <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Payment Successful!
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Thank you for your purchase. Your order is being processed.
        </Typography>

        <Link to="/">
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Go to Home
          </Button>
        </Link>
      </Box>

      <Footer />  {/* Add Footer */}
    </div>
  );
};

export default PaymentSuccessPage;
