import React from "react";
import Section from "./Section";
import { socials, navigation } from "../constants";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const LinkedInSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="text-black dark:text-white"
    viewBox="0 0 24 24"
  >
    <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.12 20.452H3.56V9h3.56zm-1.78-13.2a2.069 2.069 0 01-2.072-2.072 2.069 2.069 0 012.072-2.072A2.069 2.069 0 017.414 5.18a2.069 2.069 0 01-2.072 2.072zm15.32 13.2h-3.56v-5.633c0-1.343-.025-3.075-1.877-3.075-1.88 0-2.17 1.466-2.17 2.977v5.731h-3.56V9h3.42v1.563h.049c.477-.9 1.64-1.845 3.374-1.845 3.605 0 4.271 2.372 4.271 5.457v6.276z" />
  </svg>
);

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col gap-10">
        <div className="flex justify-center w-full">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navigation.map((item) => (
              !item.onlyMobile && (
                <Link
                  key={item.id}
                  to={item.url}
                  className="text-n-4 hover:text-n-1 transition-colors"
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <Link to="/" className="block w-[120px] h-auto">
            <img 
              src={logo} 
              alt="Edulga" 
              className="w-full h-auto dark:invert"
            />
          </Link>

          <p className="caption text-n-4">
            © {new Date().getFullYear()}. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:opacity-80"
              >
                {item.title === "LinkedIn" ? <LinkedInSVG /> : <img src={item.iconUrl} width={16} height={16} alt={item.title} className="dark:invert" />}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
