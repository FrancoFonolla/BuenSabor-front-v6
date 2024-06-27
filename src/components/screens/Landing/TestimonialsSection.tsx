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
        Nuestros Clientes:
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              "La variedad: 10/10"
            </Typography>
            <Typography variant="body2">
              El lugar tiene variedad de platos nunca vista sin dejar de lado variedades ni perder calidad. Definitivamente volvería.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              "No mienten con el delívery"
            </Typography>
            <Typography variant="body2">
              El delivery es super rápido, mi comida aún estaba caliente cuando llegó. Nunca antes visto, nuevo cliente.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
