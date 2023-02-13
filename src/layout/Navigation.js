
import logo from '../media/alumni.jpg'
import React from 'react'
import { height } from '@mui/system'
import { Button } from '@mui/material'
import {Typography} from '@mui/material'

const topbarLinks =[
    {label:"Home" ,links:"nitap.ac.in"},
    {label:"About NITAP Alumni" ,links:"nitap.ac.in"},
    {label:"President's Message" ,links:"nitap.ac.in"}, 
    {label:"Previous Talk" ,links:"nitap.ac.in"},
    {label:"Gallery" ,links:"nitap.ac.in"},
    {label:"More" ,links:"nitap.ac.in"},      
    {label:"Join Us" ,links:"nitap.ac.in"},   
]


const Navigation = () => {
  return (
    <>
    <div className='navBox'>
        <div className='logoBox'>
        <img src={logo} style={{height:"100px"}}></img>
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


    <div className='navLinks'>
        { topbarLinks.map((data,i) =>{
                <button key ={data.links}> {data.label} </button>
            })
        }
    </div>

    
    </>
  )
}

export default Navigation