import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material';
import {Button} from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider,MobileDatePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import {Autocomplete} from '@mui/material';
const handleChange=(e)=>{
  console.log('hello')
 
}


const courseList =[
  {label:"Bechlors of Technology [B Tech] (4Yrs)"},
  {label:"Masters of Technology [M Tech] (4Yrs)"},
  {label:"Doctor of Philosoph [PhD] (2-5 Yrs)"},
]
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

export default function PaymentForm() {
  const [value, setValue] = useState(dayjs());
  const [gradYear,setGradyear] = useState();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Course Details
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} >
          {/* <TextField
            required
            id="courseName"
            label="Course Completed"
            fullWidth
            autoComplete="courseName"
            variant="standard"
          /> */}

                    
          <Autocomplete 
            options={courseList}
            renderInput={(params) => <TextField {...params} 
            autoComplete="department"
            name="department"
            required
            variant="standard"
            fullWidth
            id="department"
            label="Department"
            />}                  
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <TextField
            required
            id="declipline"
            label="Declipline Studied"
            fullWidth
            autoComplete="decipline"
            variant="standard"
          /> */}

                    
          <Autocomplete 
            options={DeptList}
            renderInput={(params) => <TextField {...params} 
            autoComplete="department"
            name="department"
            variant="standard"
            required
            fullWidth
            id="department"
            label="Decipline Studied"
            />}                  
          />
        </Grid>
        
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="gradYear"
            label="Year of Graduation"
            fullWidth
            autoComplete="gradYear"
            variant="standard"
          />
        </Grid> */}

        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}> 

        <DatePicker
          views={['year']}
          required
          fullWidth
          label="Year of Graduation"
          value={gradYear}
          variant="standard"
          onChange={(newValue) => {
            setGradyear(newValue);
          }}
          renderInput={(params) => <TextField {...params} fullWidth   variant="standard"  helperText={null} />}
        />
        </LocalizationProvider>
        </Grid>

   

        <Grid item xs={12}>
        <FormLabel mt={2} component="legend">Which Membership do you require ?</FormLabel>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Membership Level 1 -Yes! I am Interested to
get information and networking only.
"          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Membership Level 2 -Yes! I am Interested in
volunteering for events and activities. 
"          />
        </Grid>

  
        <Grid item xs={12} md={6}>
          <FormLabel mt={2} component="legend">Your Signature </FormLabel>
          <Button
            variant="contained"
            component="label"
          >
            Upload File
            <input
              type="file"
              hidden
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
          <MobileDatePicker
          label="Date"
          value={value}
          required
          id="date"
          name="date"
          fullWidth
          autoComplete="date"
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


        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I confirm the Course Details are correct"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}