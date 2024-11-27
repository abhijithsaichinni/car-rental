import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import Header from '../components/Header';  // Import Header
import Footer from '../components/Footer';  // Import Footer
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  
  const navigate = useNavigate();  // Hook to navigate between pages

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
    });
    
    // Redirect to Payment Success page after payment is submitted
    navigate('/payment-success');
  };

  return (
    <div>
      <Header />  {/* Add Header */}
      <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom>
          Payment Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Card Number" fullWidth type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          <TextField label="Expiry Date (MM/YY)" fullWidth type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
          <TextField label="CVV" fullWidth type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
          <TextField label="Name on Card" fullWidth type="text" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} required />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Pay Now
          </Button>
        </form>
      </Box>
      <Footer />  {/* Add Footer */}
    </div>
  );
};

export default PaymentPage;
