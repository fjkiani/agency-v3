import React from "react";
import Slider from "react-slick";
import { backedBy, companyLogos } from "../constants";
import { StarsCanvas} from "../components/canvas";


// Import the slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BackedBy = ({ className }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show fewer logos at a time
    slidesToScroll: 1,
    arrows: true,
    customPaging: (i) => (
      <div className="dot"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerMode: true, // Enable center mode
    centerPadding: '60px', // Add padding to center
  };

  return (

    <div className={className}>
          <h2 className="text-center mb-4">Backed By</h2>
      <h5 className="tagline mb-6 text-center text-n-1/50" style={{ color: 'rgb(0, 0, 0) !important' }}>
      Backed By
      </h5>
      <Slider {...settings}>
        {backedBy.map((logo, index) => (
          <div key={index} className="px-8 py-4">
            <div className="flex items-center justify-center h-24 bg-transparent">
              <img 
                src={logo} 
                className="w-auto h-16 object-contain mx-auto"
                alt={`Logo ${index + 1}`} 
              />
            </div>
          </div>
        ))}
      </Slider>
      <StarsCanvas/>
    </div>
  );
};

export default BackedBy;
