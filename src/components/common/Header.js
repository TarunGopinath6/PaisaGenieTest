import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';

import './../../assets/styles/index.css'
import CustomTheme from '../../assets/themes/CustomTheme';

import useHeaderVisiblityStore from '../../storages/HeaderVisibility';
import useAuthStore from "../../storages/AuthStore";


export default function ButtonAppBar() {

  const { hideUserOptions } = useHeaderVisiblityStore();
  const { UserDeleteEverything } = useAuthStore();
  const navigate = useNavigate();

  return (

    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={CustomTheme}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>

            <Typography variant="h6" sx={{ textDecoration: "none", color: "white" }} component={Link} to="/">Paisa Genie</Typography>

            {hideUserOptions ? <></> : <Button color="inherit" onClick={() => { navigate('/'); UserDeleteEverything(); }}> Logout </Button>}

          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Toolbar />
    </Box>
  );
}
