import './styles/index.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react"; // Import ThemeProvider
import { lightTheme, darkTheme } from "./components/theme"; // Import your themes

import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import PostCard from "@/components/hyGraph/PostCard";
import PostDetail from "@/components/hyGraph/PostDetail";
import { getPosts } from "./services"; 
import { StarsCanvas } from "./components/canvas";
import Contact from '@/components/Contact';
import ScrollToTop from "./components/ScrollToTop";

// Team 
import Team from '@/components/team/Team'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

// Pages
import Blog from '@/blog/Blog'; 
import BlogPage from '@/blog/BlogPage'; 
import CategoryPage from '@/blog/CategoryPage'; 



const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light"); // Add theme state

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> {/* Wrap components */}
      <Header toggleTheme={toggleTheme} currentTheme={theme} /> {/* Pass props to Header */}
      <ScrollToTop />

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Collaboration />
                <Benefits />
                {/* <Pricing /> */}
                <Services />
                <Roadmap />
              </>
            }
          />
          <Route path="/blog" element={<Blog posts={posts} />} /> 
          <Route path="blog/post/:slug" element={<BlogPage />} /> 
          <Route path="/blog/category/:slug" element={<CategoryPage />} /> 
          <Route path="/team" element={<Team />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <StarsCanvas />
        <Footer />
      </div>
      <ButtonGradient />
    </ThemeProvider>
  );
};

export default App;
