import React from "react";
import Slider from "react-slick";
import { backedBy, companyLogos } from "../constants";
import { StarsCanvas} from "../components/canvas";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyLogos = ({ className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    customPaging: (i) => (
      <div className="dot"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="relative py-16 bg-white dark:bg-transparent">
      <div className={`container mx-auto ${className}`}>
        <div className="px-4">
          <Slider {...settings}>
            {backedBy.map((logo, index) => (
              <div key={index} className="px-8 py-4">
        
                <div className="flex items-center justify-center h-24 bg-transparent">
                  <img 
                    src={logo} 
                    className="w-auto h-16 object-contain mx-auto" 
                    alt={`Partner Logo ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <StarsCanvas/>
    </div>
  );
};

export default CompanyLogos;
