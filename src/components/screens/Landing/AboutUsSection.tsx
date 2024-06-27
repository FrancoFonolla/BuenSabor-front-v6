import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container, useMediaQuery } from '@mui/material';

const AboutUsSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ py: 6, backgroundColor: '#FFA500', color: '#fff', textAlign: 'center' }}>
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch" mt={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.goiko.com/es/wp-content/uploads/2023/10/SMASH-3.png"
                alt="Misión"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  gutterBottom 
                  variant="h6"
                  sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                >
                  Nuestro Lema:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  "Un Buen Sabor a un buen precio"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://www.saboresdeargentina.com/wp-content/uploads/2022/04/panchos-varios.jpg"
                alt="Visión"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  gutterBottom 
                  variant="h6"
                  sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}
                >
                  Nuestra Visión:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Queremos porveer la mejor experiencia gastronómica a un precio acorde, reinventando el concepto de comida rápida.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Button variant="contained" color="secondary" size="large" sx={{ mt: 4 }}>
        ¡Conocenos!
      </Button>
    </Box>
  );
};

export default AboutUsSection;
