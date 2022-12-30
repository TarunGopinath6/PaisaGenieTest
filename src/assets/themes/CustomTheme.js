import { createTheme } from '@mui/material/styles';


const CustomTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#2F2F2F',
        },
        secondary: {
          main: '#0e20bf',
        },
        neutral: {
          main: "#ffffff",
        }
      },
  });
  

export default CustomTheme;

// https://bareynol.github.io/mui-theme-creator/