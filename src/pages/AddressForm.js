import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import dayjs from 'dayjs';
import { Autocomplete } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Pincode from 'react-pincode';


const TitleList =[
  {label: "Mr."},{label: "Miss"},{label:"Mrs"},{label:"Dr"},]
const NationalityList =[
  {label:"Indian"},{label:"Pakistani"},{label:"Srilankan"},{label:"Bangladeshi"},{label:"Nepali"},{label:"Chinese"}
]

const categoryList =[
  {label:"General"},{label:"OBC"},{label:"OBC-NCL"},{label:"Gen-EWS"},{label:"SC"},{label:"CT"},{label:"Others"}
]

const ReligionList =[
  {label:"Hindu"},{label:"Muslim"},{label:"Christian"},{label:"Sikh"},{label:"Jain"},{label:"Other"}
]


export default function AddressForm() {
  const [value, setValue] = React.useState(dayjs('2000-04-07'));

  const [pincodeData, setPincodeData] = useState('');

  if(pincodeData) console.log(pincodeData);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
     
        <Autocomplete 
          id="title"
          options={TitleList}
          renderInput={(params) => <TextField {...params} 
          autoComplete="title"
          name="title"
          required
          variant="standard"
          label="Title (eg Mr/Ms/Dr)"
          />}                  
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
          <MobileDatePicker
          label="Date of Birth"
          value={value}
          required
          id="dob"
          name="date of birth"
          fullWidth
          autoComplete="dob"
          variant="standard"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField
          required
          fullWidth
          {...params}
          variant="standard"
        />}
        />
        </LocalizationProvider>
        </Grid>


        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="middleName"
            name="MiddleName"
            label="Middle name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        {/* <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid> */}

        <Grid item xs={12} sm={4}>
          <Autocomplete 
            id="nationality"
            options={NationalityList}
            renderInput={(params) => <TextField {...params} 
            autoComplete="Nationality"
            name="Nationality"
            required
            variant="standard"
            fullWidth
            label="Nationality"
            />}                  
          />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Autocomplete 
            id="category"
            options={categoryList}
            renderInput={(params) => <TextField {...params} 
            autoComplete="category"
            name="category"
            required
            variant="standard"
            fullWidth
            label="Category"
            />}                  
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Autocomplete 
            id="religion"
            options={ReligionList}
            renderInput={(params) => <TextField {...params} 
            autoComplete="religion"
            name="religion"
            required
            variant="standard"
            fullWidth
            label="Religion"
            />}                  
          />
        </Grid>


        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Current Address"
            fullWidth
            autoComplete="applicant address"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
         <Pincode
          invalidError="Please check pincode"
          lengthError="check length"
          className="container"
        // data={e.target.value}
        pincodeContainer={{marginTop:"3px"}}
          pincodeInput={{
          width: "189px",
          height: "30px",
          marginTop:"12px",
          fontSize: "16px",
          borderTopStyle: "hidden",
          borderRightStyle: "hidden",
          borderLeftStyle: "hidden",
          borderBottomStyle: "groove",
          borderColor: "#e0e0e0",
          boxshadow:"none",
          outlined:"none"        
          }}
          cityContainer={{display:"none"}}
          districtContainer={{display:"none"}}
          stateContainer={{display:"none"}}
          areaContainer={{display:"none"}}
        getData={(data) =>{
          console.log(data);
          setPincodeData(data)
        } }/>
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="address"
            label="Pho"
            fullWidth
            autoComplete="applicant address"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="mobile"
            name="address"
            label="Current Address"
            fullWidth
            autoComplete="applicant address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}