import React, { useState } from 'react';
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTheme } from '@mui/material/styles';

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePassword = (password) => {
  const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/;
  return re.test(password);
};

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const emailError = emailTouched && !validateEmail(email);
  const passwordError = passwordTouched && !validatePassword(password);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Box
        sx={{
          width: matchesSM ? '100%' : '450px',
          margin: 'auto', // Centrado horizontal
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.paper', // Aquí puedes cambiar el color si es necesario
          boxShadow: 1,
          borderRadius: 2,
          '& .MuiTextField-root': { width: '100%', mb: 2 },
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom sx={{mb: 2}}>
          Registration
        </Typography>
        <TextField
          required
          label="Email"
          variant="outlined"
          autoComplete="new-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          error={emailError}
          helperText={emailError ? "Please enter a valid email." : ""}
        />
        <TextField
          required
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          error={passwordError}
          helperText={passwordError ? "Password must be 8-20 characters long, include a number, a symbol, and an uppercase letter." : ""}
        />
        <Button
          variant="contained"
          disabled={emailError || passwordError}
        >
          Register
        </Button>
        <Typography variant="body2" sx={{ alignSelf: 'flex-start', mb: 1, mt: 2 }}>
          Register with:
        </Typography>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          sx={{
            mb: 1
          }}
        >
          Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          fullWidth
          sx={{
            mb: 1
          }}
        >
          Facebook
        </Button>
      </Box>
  );
};
