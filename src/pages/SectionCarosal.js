import React from "react";
import Slider from "react-slick";
import Covocation_new from "../media/convocation.jpg"
import Covocation_old from "../media/convocation2.jpg"
import Alumnni_meet from "../media/alumniMeet.jpg"
import DirectorImage from "../media/directorPhoto.jpg"
import OnlineAlumniMeet from "../media/onlineAlumniMeet.jpg"



const images = [
  {
    photo: Covocation_old,
    label: "7th Convocation at NIT Arunachal Pradesh"
  },
  {
    photo: Covocation_new,
    label: "9th Convocation at NIT Arunachal Pradesh"
  },
  {
    photo: Alumnni_meet,
    label: "Offline Alumni Meet at Banglore"
  },
  {
    photo: DirectorImage,
    label: "Director of NIT Arunachal Pradesh along with faculty members",
  },
  {
    photo: OnlineAlumniMeet,
    label:"Pallabi Mamdam Session ",
  }
];

// const image1 =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgZh9NCXFAHjx_uAQeKf6rRQjtNi08KLGTycKn_V1wyBFF2kS";
// const image2 =
//   "https://swiperxapp.com/wp-content/uploads/2016/10/SwipeRx-Winners2-2.jpg";
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      slickNext: true,
      slickPrevious: true,
      swipe: true
    };
    return (
      <Slider {...settings}>
        {images.map((step) => (
          <div key={step.label}>
            <img
              src={step.photo}
              alt={step.label}
              style={{
                borderRadius: "15px",
                height: "700px",
                display: "block",
                margin:"auto",
                // overflow: "hidden",
                justifyContent:"center",
                width: "90%",
                paddingTop:"10px"
              }}
              {...settings}
            />
          </div>
        ))}
      </Slider>
    );
  }
}

export default SimpleSlider;
