import React from 'react'
import background from "../assets/images/home.png";

import { Box } from '@mui/system';
import { Button, Container, Typography } from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import CustomTheme from '../assets/themes/CustomTheme';

import '@fontsource/roboto/300.css';

const Home = () => {
  return (
    <Box style={{
      height: "calc(100vh - 64px)", display: "flex", flexDirection: "column",
      backgroundImage: `url(${background})`, backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }} >

      <Box style={{
        height: "calc(100vh - 64px)",
        display: "flex", flexDirection: "column",
        backgroundColor: "rgb(0,0,0,0.7)"
      }}>
<ThemeProvider theme={CustomTheme}>
        <Container style={{display: "flex", flexDirection: "column",  height: "fit-content", margin: "auto", textAlign: "center" }}>
          <Typography variant="h1" gutterBottom style={{color: "white"}}> Take Control of Your Financial History </Typography>
          <Typography variant="h3" gutterBottom style={{color: "white", marginBottom: "0.75em"}}> One-stop Financial Genie at Your Fingertips </Typography>
          <Button variant="outlined" size="large" color="neutral">Sign Up with the Acccount Aggregator Framework</Button>
          
        </Container>
        </ThemeProvider>

      </Box>

    </Box>
  )
}

export default Home