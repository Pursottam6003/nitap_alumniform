
import logo from '../media/alumni.jpg'
import React from 'react'
import { height } from '@mui/system'
import { Button } from '@mui/material'
import {Typography} from '@mui/material'

const topbarLinks =[
    {label:"Home" ,links:"https://nitap.ac.in"},
    {label:"About NITAP Alumni" ,links:"https://google.com"},
    {label:"President's Message" ,links:"http://facebook.com"}, 
    {label:"Previous Talk" ,links:"https://abcd.com"},
    {label:"Gallery" ,links:"https://iitb.ac.in"},
    {label:"More" ,links:"https://pqrs.com"},      
    {label:"Join Us" ,links:"https://gmail.com"},   
]


const Navigation = () => {
  return (
    <>
    <div className='navBox'>
        <div className='logoBox'>
        <img src={logo} style={{height:"100px"}}></img>
        </div>

        <div className='navLinks'>
        { topbarLinks.map((data,i) =>{
              return (
                <div className ="navEle" key ={data.links}> <a  target="_blank" href={data.links}>
                {data.label} 
                </a></div>
              )
            })
        }
      </div>

        <div style={{display:"flex" ,gap:"20px" ,paddingRight:"30px"}}>
            <Button  variant='outlined' to='/login'>
              <Typography textAlign="center">Login</Typography>
            </Button>

            <Button  variant='outlined' to='/register'>
              <Typography textAlign="center">Register</Typography>
            </Button>
        </div>
    </div>




    
    </>
  )
}

export default Navigation