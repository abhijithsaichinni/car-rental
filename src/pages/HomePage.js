// src/pages/HomePage.js

import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

const products = [
  { id: 1, name: 'Tesla', price: 79999, img: 'assets/tesla.jpg' },
  { id: 2, name: 'BMW', price: 64999, img: 'assets/bmw.jpg' },
  { id: 3, name: 'Audi', price: 54999, img: 'assets/audi.jpg' },
  { id: 4, name: 'Buggati', price: 54999, img: 'assets/buggati.jpg' },
  { id: 5, name: 'Maserati', price: 54999, img: 'assets/maserati.jpg' },
  { id: 6, name: 'Lamborghini', price: 54999, img: 'assets/lamborghini.jpg' },
  { id: 7, name: 'Ferrari', price: 54999, img: 'assets/ferrari.jpg' },
  { id: 8, name: 'Ford', price: 54999, img: 'assets/ford.jpg' },
  { id: 9, name: 'Pagani', price: 54999, img: 'assets/pagani.jpg' }
  // More products here
];

const HomePage = () => {
  return (
    <div>
      <Header /> {/* Add Header */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <img src={product.img} alt={product.name} style={{ width: '100%' }} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">${product.price}</Typography>
                <Link to={`/product/${product.id}`}>
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default HomePage;
