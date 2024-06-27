import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500', // Rojo oscuro
    },
    secondary: {
      main: '#ffcc00', // Amarillo
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
