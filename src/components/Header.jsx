// src/components/Header.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { logo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import ChangeTheme from "./dark-light-mode/components/ChangeTheme"; // Adjust import as needed

const Header = ({ toggleTheme, currentTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    openNavigation ? enablePageScroll() : disablePageScroll();
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (itemUrl) => {
    if (itemUrl.startsWith("/#")) {
      const sectionId = itemUrl.substring(2);
      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    } else if (itemUrl.startsWith("/")) {
      navigate(itemUrl);
    } else {
      window.open(itemUrl, "_blank");
    }
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      scrollToSection(sectionId);
    }
  }, [location]);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 backdrop-blur-sm ${
        openNavigation ? "bg-n-8/90" : "bg-transparent"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <div
          className="block w-[5rem] xl:mr-8 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={logo} width={190} height={40} alt="Edulga" className="dark:invert" />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-transparent lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                onClick={() => handleClick(item.url)}
                className={`block relative font-code text-2xl uppercase text-black dark:text-white transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  location.pathname === item.url
                    ? "lg:text-black dark:lg:text-white"
                    : "lg:text-black/50 dark:lg:text-white/50"
                } lg:leading-5 lg:hover:text-black dark:lg:hover:text-white xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Toggle Button and Menu Button for Mobile */}
        <div className="ml-auto lg:flex lg:items-center lg:space-x-4">
          <div className="absolute right-[3%] top-4 lg:relative lg:right-0 text-sm lg:text-base">
            <ChangeTheme toggleTheme={toggleTheme} currentTheme={currentTheme} />
          </div>
          <Button className="lg:hidden" px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
