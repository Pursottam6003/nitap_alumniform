
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Autocomplete } from '@mui/material';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const auth = getAuth();



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const DeptList =[
  { label:"Mechanical Eng."},
  { label: "Computer Science Eng."},
  { label: "Civil Eng,"} ,
  { label: "Electronics and Comm. Eng"},
  { label: "Electrical Eng."},
  { label: "Dept of BAS"},
  { label: "Dept of CS"},
  { label: "Dept of VLSI"},
  { label: "Dept of ME"},
  { label: "Dept of physics"},
  { label: "Dept of Civil Eng"}
]

const BatchList =[
  {label:"UG 2010-14"},
  {label:"UG 2011-15"},
  {label:"UG 2012-16"},
  {label:"UG 2013-17"},
  {label:"UG 2014-18"},
  {label:"UG 2015-19"},
  {label:"UG 2016-20"},
  {label:"UG 2017-21"},
  {label:"UG 2018-22"},
  {label:"UG 2019-23"},
  {label:"UG 2020-24"},
  {label:"UG 2021-25"},
  {label:"UG 2022-26"},
  {label:"PG 2015-17"},
  {label:"PG 2016-18"},
  {label:"PG 2017-19"},
  {label:"PG 2018-20"} ,
  {label:"PG 2019-21"} ,
  {label:"PG 2020-22"} ,
  {label:"PG 2021-23"} ,
  {label:"PG 2022-24"} ,
  {label:"PHD 2013-18"} ,
  {label:"PHD 2014-19"} ,
  {label:"PHD 2015-20"} ,
  {label:"PHD 2016-21"} ,
  {label:"PHD 2017-22"} ,
  {label:"PHD 2018-23"} ,
  {label:"PHD 2019-24"} ,
  {label:"PHD 2020-25"} ,

]
const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    const user ={
      fullName:data.get('firstName')+' '+data.get('lastName'),
      email: data.get('email'),
      phoneNumber:value,
      passord: data.get('password'),
      batch: data.get('batch'),
      dept : data.get('department'),
    }

    console.log(user);

    createUserWithEmailAndPassword(auth, user.email, user.passord)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


  };

  const [value, setValue] = useState()

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
          {/* <Avatar sx={{ m: 4}}>
            <LockOutlinedIcon />

          </Avatar> */}
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-alumni-university-flaticons-flat-flat-icons-3.png"/>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}  >
              
                <PhoneInput
                  placeholder="  Phone Number *"
                  value={value}
                  onChange={setValue}
                  className="phoneNumber"
                  />
      
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Current Address"
                  type="text"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
              <Autocomplete 
                    id="combo-box-demo"
                    options={BatchList}
                    renderInput={(params) => <TextField {...params} 
                    autoComplete="batch"
                    name="batch"
                    required
                    fullWidth
                    id="batch"
                    label="Batch"
                    />}                  
                  />
              </Grid>

              <Grid item xs={12} sm={6}>
                
              <Autocomplete 
                    options={DeptList}
                    renderInput={(params) => <TextField {...params} 
                    autoComplete="department"
                    name="department"
                    required
                    fullWidth
                    id="department"
                    label="Department"
                    />}                  
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
 
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to receive updates and notifications of NIT AP Alumni Association"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}