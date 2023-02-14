import React from 'react'
import Carosal from '../pages/SectionCarosal'
import AlumniLogo from "../media/alumniLogo.jpg"
import directorImage from "../media/director.jpg"

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


      <div className='DirectorMsg'>
      <div class="col-md-7" style={{width: "58.33333333%"}}>
        <div class="meet-doctors">
                <p align="justify"></p><h3>Message from Director</h3>

        <table border="0" cellpadding="0" cellspacing="0" style={{width:"100%"}}>
          <tbody>
            <tr>
              <td style={{width:"160px"}}>
              {/* <img alt="" src="https://www.nitap.ac.in/assets/director/Prof.%20Pinakeswar%20Mahanta.jpg" style={{width: "150px", height: "141px"}}/>
              </td>

              <td style={{textAlign: "left", verticalAlign: "top"}}>
              <p><strong>Prof. Pinakeswar Mahanta</strong><br>
              Director</br>
              NIT, Arunachal Pradesh<br/>
              E-mail: director@nitap.ac.in<br/>
              Phone No. : 0360-2284801/2001581/2001583</p> */}

              <img src={directorImage} style={{width: "150px", height: "142px"}}/>
              </td>
 
              <td style={{verticalAlign:"top"}}>

              <p ><strong>Prof. Pinakeswar Mahanta</strong><br/>
              Director<br/>
              NIT, Arunachal Pradesh<br/>
              E-mail: director@nitap.ac.in<br/>
              Phone No. : 0360-2284801/2001581/2001583</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p>Dear <b>NITians of Arunachal Pradesh</b>,</p>

        <p><strong>Welcome to your Alma Mater! </strong></p>

        <p>A landmark of academic excellence bludgeoned with extracurricular activities and enriched research environment in Arunachal Pradesh.</p>

        <p>Since its inception, <b>NIT Arunachal Pradesh</b> has proved to be one of the best institutions in North East India for imparting knowledge through best practices in academia and established high-end research environment on cutting edge topics. It is in this endeavour for resplendence, series of events are organized to promote sustained quality education to ensure that our students are globally competent.</p>

        {/* <p><a class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30" href="http://nitap.ac.in/section/section-page-details?section=217a7db823&amp;page=981320b8de&amp;name=Message-from-Director"><strong>Read more</strong></a></p><p></p> */}
                      </div>
              
              
            </div>
      </div>
    </>
  )
}

export default Home