import {useState} from 'react';
import React from 'react';
import {Grid,Typography,TextField,FormControlLabel,Checkbox,Autocomplete} from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider,MobileDatePicker } from '@mui/x-date-pickers';
//import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Pincode from 'react-pincode';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

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
  const [value, setValue] = useState(dayjs('2000-04-07'));
  const [pincodeData, setPincodeData] = useState('');
  const [myphoneVal, setPhoneVal] = useState(null)
  const [alternateNo,setAlternateNo] = useState(null)
  if(pincodeData) console.log(pincodeData);

  const handleControl = (e)=>{
    console.log('hendle control')
  }

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
          handleControl();

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
          <PhoneInput
            placeholder="  Phone Number *"
            defaultCountry='IN'
            value={myphoneVal}
            onChange={setPhoneVal}
            className="phoneNumber removeborder"
            
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <PhoneInput
            placeholder="  Alternate Phone Number *"
            value={alternateNo}
            defaultCountry='IN'
            onChange={setAlternateNo}
            className="phoneNumber removeborder"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="occupation"
            name="occupation"
            label="Occupation"
            fullWidth
            autoComplete="occupation"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="jobtitle"
            name="job title"
            label="Job Title"
            fullWidth
            autoComplete="jobtitle"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I confirm the Personal Details are authentic"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}