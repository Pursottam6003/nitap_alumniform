import React, { useState, useEffect } from 'react';

import Pincode from 'react-pincode';
import {Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid,Box,Typography,Container,Autocomplete,Alert,AlertTitle} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NoteOutlined } from '@mui/icons-material';

const theme = createTheme();


const Pin = () => {
    const [pincodeData, setPincodeData] = useState('');

    if(pincodeData) console.log(pincodeData);

    // const handlepincodeData =(e)=>{
    //   console.log(e.target.value);

    //     return (
    //     <Pincode
    //     invalidError="Please check pincode"
    //     lengthError="check length"
    //     // data={e.target.value}

    //     getData={(data) => {
    //       console.log(data)
    //      setPincodeData(data)}

    //     }
    //   />

    //     )
      
    // }
    return (
      <>

      <ThemeProvider theme ={theme}>
        <Container component="main"  maxWidth="xs"> 
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Current Address"
            fullWidth
            autoComplete="applicant address"
            variant="standard"
          />
          <br></br>
        </Grid>

        {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Pincode"
              type="number"
              onChange={value=>handlepincodeData(value) }
              id="password"
              autoComplete="current-password"
          />
           */}
          
        <Grid item xs={12} sx={{m:3}} >
        <Pincode
        invalidError="Please check pincode"
        lengthError="check length"
        className="container"
        // data={e.target.value}
        pincodeInput={{
          width: "189px",
          height: "30px",
          fontSize: "15px",
          borderTopStyle: "hidden",
          borderRightStyle: "hidden",
          borderLeftStyle: "hidden",
          borderBottomStyle: "groove",
          borderColor: "#e0e0e0",
          boxshadow:"none",
          outlined:"none"        
        }}
        getData={(data) =>{
          console.log(data);
          setPincodeData(data)
        } }/>
        
        </Grid>
        </Box>

        </Container>
      </ThemeProvider>
      {/* <div className="App">
        <Pincode
          Container={{
            width:"200px"
          }}
          invalidError="Please check pincode"
          lengthError="check length"
          getData={(data) => setPincodeData(data)}
        />
      </div> */}
      </>
    );
}

export default Pin