import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Blue color
    },
    background: {
      default: '#fff', // White background
    },
  },
});

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const validateEmail = () => {
    // ... rest of your code ...
  };

  const validatePassword = () => {
    // ... rest of your code ...
  };

  const handleInputChange = (e) => {
    // ... rest of your code ...
  };

  const handleSubmit = (event) => {
    // ... rest of your code ...
  };

  return (
    
    <div
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/pink-watercolor-abstract-background_52683-73541.jpg?size=626&ext=jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
      }}>
         <NavBar/>
    <ThemeProvider theme={customTheme}>
      <Grid container component="main" sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
                onBlur={validateEmail}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={validatePassword}
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
};

export default Login;
