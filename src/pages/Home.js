import React from 'react'
import Carosal from '../pages/SectionCarosal'
import AlumniLogo from "../media/alumniLogo.jpg"
import directorImage from "../media/director.jpg"
import { Button } from '@mui/material'
import {Typography} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Badge from '@mui/material/Badge';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import Chip from '@mui/material/Chip';
import { fontFamily } from '@mui/system'

const ActualNews= [
  {label:"2nd Online Alumni Meet Session 2023 Achievement" , src:"http://www.google.com", tag:"latest", date:"15 Mar 2023"},

  {label:"Vikash Kumar CSE 4th Year 2020 Batch NIT Arunachal Pradesh" , src:"http://www.facebook.com", tag:"latest", date:"13 Jul 2022"},

  {label:"NIT Alumni wins gold medal in Olympics held in mars " , src:"http://www.nodejs.com", tag:"old", date:"20 April 2022"},

  {label:"Chingari NIT AP alumni Startup recieves 100 crores of funding from Govt of India" , src:"http://www.youtube.com", tag:"old",  date:"6 Jul 2022"},
  {label:"Alumni Akhil Kumar Verma Mechanical student 2024 batch achieves UPSC rank 12th" , src:"http://www.comics.com", tag:"latest",  date:"20 Jul 2020"},
]

const Home = () => {
  return (
    <>
      <Carosal/>
      <div className='mainSection'>
      <div className='componentBox'>
        <h1>Alumni Association</h1>
        The NIT Arunachal Pradesh  Alumni Association (NITAPAA), established in 2015, maintains a long-lasting connection between the Institute and its 1100+-member strong alumni base spread across the world. Dedicated volunteers work with the Alumni Association to develop an active alumni network. Whether it’s volunteering, attending events conducted by the Institute or participating in the Institute’s diverse legacy projects – active and involved alums add phenomenal value to NIT  Arunachal Pradesh, which in turn helps preserve its position as one of the world’s premier institutes. The Alumni Association continues to seek innovative ways to serve alumni by providing social, educational and professional opportunities that will appeal to our alums, their peers and extended network.

      </div>
      <img style ={{width:"auto",height:"350px"}}src={AlumniLogo}/>
      </div>

      <h2 className='directorHeading'>Message from Director</h2>
      <div className='mainSection'>
      <div className='DirectorsMessage'>
        <div style={{display:"flex" ,gap:"20px",fontFamily:"monospace",marginLeft:"100px",padding:"10px" }}>
          <img src={directorImage} style={{height:"150px"}}></img>
          <div>
            <p style={{fontSize:"16px"}}><strong>Prof. Pinakeswar Mahanta</strong><br/>
            Director<br/>
            NIT, Arunachal Pradesh<br/>
            E-mail: director@nitap.ac.in<br/>
            Phone No. : 0360-2284801/2001581/2001583</p>
          </div>
        </div>

        <div className='Message'>
        <p>Dear <b>NITians of Arunachal Pradesh</b>,</p>

        <p><strong>Welcome to your Alma Mater! </strong></p>

        <p>A landmark of academic excellence bludgeoned with extracurricular activities and enriched research environment in Arunachal Pradesh.</p>

        <p>Since its inception, <b>NIT Arunachal Pradesh</b> has proved to be one of the best institutions in North East India for imparting knowledge through best practices in academia and established high-end research environment on cutting edge topics. It is in this endeavour for resplendence, series of events are organized to promote sustained quality education to ensure that our students are globally competent.</p>
        </div>

        <div style={{display:"flex",justifyContent:"center"}}>
        <Button  variant='contained' to='/register' >
              <Typography textAlign="center">Read More</Typography>
        </Button>
        </div>
      
      </div>

      <div className='News'>
        <p style={{fontSize:"30px", fontFamily:"cursive"}}>News & <span style={{color:"red"}}> Events</span></p>
        <div className='ActualNews'>
        {ActualNews.map((news,i) =>{
          return(
            <>
            <div className='newsArticle'> 
            <p  key={news.src} style={{fontWeight:"bold"}}>{news.label}</p>
              <Chip
               label={news.date}
                component="a"
                href="#basic-chip"
                icon={<CalendarMonthIcon/>}
                variant="outlined"
                clickable
                sx={{ml:1}}
              >
              </Chip>
            

              {news.tag=="latest" ? <>
              <Badge badgeContent={"latest"} color="error">   
              <Chip
               label="Web Article"
                component="a"
                href="#basic-chip"
                icon={<ArticleIcon/>}
                variant="outlined"
                clickable
                sx={{ml:2}}
              >
              </Chip>
              </Badge>
               </> : <> 
       
              <Chip
               label="Web Article"
                component="a"
                href="#basic-chip"
                icon={<ArticleIcon/>}
                variant="outlined"
                clickable
                sx={{ml:2}}
              >
              </Chip>
            
               </>}

              <Chip
               label="Open"
                component="a"
                href="#basic-chip"
                icon={<LaunchIcon/>}
                variant="outlined"
                clickable
                sx={{ml:3}}
              >
              </Chip>

  
               
            </div>
            </>
          )
        })
        }

        <div style={{marginTop:"10px"}}><Button
        variant="contained"
        color="error"
        style={{margin:"auto",display:"block"}}
        >View All</Button></div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Home