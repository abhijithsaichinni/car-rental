// src/pages/ProductPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mock API call
    const fetchedProduct = {
      id,
      name: `Car ${id}`,
      price: id * 10000,
      description: 'This is a great car!',
      img: 'assets/bmw.jpg',
    };
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Header /> {/* Add Header */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={product.img} alt={product.name} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Button variant="contained" color="primary" href="/payment">
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default ProductPage;
