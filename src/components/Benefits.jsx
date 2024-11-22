// src/components/Benefits.jsx

import React from "react";
import Slider from "react-slick";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { useTheme } from "@emotion/react"; // Import useTheme hook
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Benefits = () => {
  const theme = useTheme(); // Access the theme

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    customPaging: (i) => <div className="dot"></div>,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section
      id="benefits"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-full lg:max-w-full"
          title="87% of employers say graduates lack key skills needed for the job market. Edulga reimagining education by mapping the world's knowledge into personalized learning pathways."
        />
        <Slider {...settings}>
          {benefits.map((item) => (
            <div key={item.id} className="p-4">
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                  backgroundColor: theme.secondary,
                }}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6" style={{ color: theme.text }}>
                    {item.text}
                  </p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p
                      className="ml-auto font-code text-xs font-bold uppercase tracking-wider"
                      style={{ color: theme.primary }}
                    >
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5"
                  style={{
                    clipPath: "url(#benefits)",
                    backgroundColor: theme.background,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Benefits;
