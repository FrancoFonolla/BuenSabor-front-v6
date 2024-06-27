import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const BenefitsSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ py: 4, backgroundColor: '#FFA500', color: '#fff' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}
      >
        Nuestras Competencias:
      </Typography>
      <Carousel style={{ width: '100%' }}>
        <Carousel.Item>
          <Box sx={{ pb: 6, width: '100%' }}>
            <Typography variant="h6" align="center" sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Opciones para todos...
            </Typography>
            <Typography variant="body2" align="center">
              Tenemos una extensa variedad de platos para todos los gustos.
            </Typography>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box sx={{ pb: 6, width: '100%' }}>
            <Typography variant="h6" align="center" sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Entregas rápidas...
            </Typography>
            <Typography variant="body2" align="center">
              Con el servicio de delívery más rápido de la ciudad, le garantizamos que en menos de 28 minutos, usted disfrutará de un Buen Sabor sin salir de casa.
            </Typography>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box sx={{ pb: 6, width: '100%' }}>
            <Typography variant="h6" align="center" sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Buen Sabor = Buena Calidad
            </Typography>
            <Typography variant="body2" align="center">
              Utilizamos los mejores ingredientes seleccionados para garantizar los mejores platos.
            </Typography>
          </Box>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default BenefitsSection;
