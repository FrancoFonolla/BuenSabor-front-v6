import React from 'react';
import { Box, Typography, Grid, Paper, useMediaQuery } from '@mui/material';

const TestimonialsSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}
      >
        Testimonios de Clientes
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              "Increíble variedad de sabores"
            </Typography>
            <Typography variant="body2">
            Este restaurante es increíble por su variedad constante de platos nuevos para descubrir. Cada visita es una deliciosa experiencia.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              "Entrega rápida y comida fresca"
            </Typography>
            <Typography variant="body2">
            Siempre impresionado por la rapidez y la frescura de mi pedido en este lugar. Nunca decepciona y lo recomiendo sin reservas.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
