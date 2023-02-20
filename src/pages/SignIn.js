
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid,Box,Typography,Container,Autocomplete,Alert,AlertTitle} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import {auth,provider,facebookProvider,microsoftProvider} from '../config/config'

import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"

//const auth = getAuth();



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NIT AP Alumni Association
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignIn() {
  const history  = useNavigate();

  function updateSignInRoutes()
{
  setTimeout(() => {
    history('/')
  }, 1000);
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
   const user ={
      email: data.get('email'),
      password: data.get('password'),
    };

    console.log(user);

    auth.signInWithEmailAndPassword(user.email,user.password).then(()=>{
      // sign ned sucessfully
      setSignedUp(true);
      console.log('signed in sucessfully')
      updateSignInRoutes();
    })
    .catch(error => console.log(error.message))
    
  };

  const [value,setValue] = useState('')
  const SignUpGoogle =()=>{
    
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    setSignedUp(true);
    updateSignInRoutes();
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const signUpFacebook =()=>{
    console.log('facebook authentication')
    setSignedUp(true);
    signInWithPopup(auth,facebookProvider)
    .then((result)=>{
      // signed in user info
      const user = result.user;
      console.log(user);
      updateSignInRoutes();
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  const signUpMicrosoft =()=>{
    console.log('Microsoft authentication')
    setSignedUp(true);
    signInWithPopup(auth,microsoftProvider)
      .then((result) =>{
        // user signed in 
        console.log(result);
      })

    .catch((error)=>{
      console.log(error);
    })
  }

  const [signedUp,setSignedUp] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-alumni-university-flaticons-flat-flat-icons-3.png"/>

          { signedUp && <>
            <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
            </Alert>
            </>}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />

            <div className='MoreOptions'>
              <h3>OR</h3>
              <div className='SignInOptions'>
              <div onClick={SignUpGoogle}>
              <img src="https://img.icons8.com/color/48/null/google-logo.png"/>
              </div>

              <div onClick={signUpFacebook}>
              <img src="https://img.icons8.com/fluency/48/null/facebook-new.png"/>
              </div>

              <div onClick={signUpMicrosoft}>
              <img src="https://img.icons8.com/color/48/null/microsoft.png"/>
              </div>
              </div>

            </div>
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            {/* {user ? <>hello </> :  <div>
              <button onClick={handleClick}>Sign in with google</button>
            </div>} */}
           
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}