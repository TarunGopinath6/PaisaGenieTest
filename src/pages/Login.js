import { useEffect, useState, forwardRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

import useHeaderVisiblityStore from './../storages/HeaderVisibility';
import CustomTheme from './../assets/themes/CustomTheme'

import { useNavigate } from "react-router-dom";
import useConsent from '../utils/Consent';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


function Copyright(props) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" >
                Paisa Genie
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignIn() {

    const navigate = useNavigate();
    const { getConsent, loading } = useConsent();

    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(process.env.REACT_APP_HOST_URL);

        const data = new FormData(event.currentTarget);

        let response = await getConsent(data.get('phone'))

        if (response["code"] === 200){
            window.location.replace(response.data.redirectionUrl);
        }
        else {
             setError(true);
             setMessage(JSON.stringify(response.data));
        }
    };

    const { setHideUserOptions } = useHeaderVisiblityStore();

    useEffect(() => {
        setHideUserOptions(true);
    }, [setHideUserOptions])


    return (
        <ThemeProvider theme={CustomTheme}>

            <Container style={{display: "flex", flexDirection: "column",
}}>
            <Container component="main" maxWidth="xs" 
            sx={{backgroundColor: "rgb(245, 245, 245, 0.5)", marginTop: 5, borderRadius: "15px"}}
            >
                <CssBaseline />

                <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        <> { message } </>
                    </Alert>
                </Snackbar>

                <Snackbar open={loading} autoHideDuration={3000}>
                    <Alert severity="info" sx={{ width: '100%' }}>
                        Redirecting...
                    </Alert>
                </Snackbar>

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h4" sx={{ pt: 1, pb: 2 }}>
                        Sign in
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            autoFocus
                            defaultValue={"9987600001"}
                            type="tel"
                            />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            </Container>
        </ThemeProvider>
    );
}