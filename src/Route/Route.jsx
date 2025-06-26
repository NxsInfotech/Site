import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../Asserts/NXS-infotech-icon.png";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import Testimonial from "../Pages/Testimonial";
import Home from "../Pages/Home";
import Header from "../Pages/Header";
import About_us from "../Pages/About_us";
import Career from "../Pages/Career";
import Contact_us from "../Pages/Contact_us";
import Footer from "../Pages/Footer";
import Wordpress from "../Dropdown/Wordpress";
import Shopify from "../Dropdown/Shopify";
import Notfound from "../Pages/Notfound";
import Graphic from "../Dropdown/Graphic";
import Animation from "../Dropdown/Animation";
import PHP_development from "../Career/PHP_development";
import Wordpress_development from "../Career/Wordpress_development";
import Shopify_development from "../Career/Shopify_development";
import Career_Form from "../Career/Career_Form";
import ReactGA from "react-ga4";
import Blog from "../Pages/Blog";

// Define the GA functions

const TRACKING_ID = "G-02DVH6KJK1";
ReactGA.initialize(TRACKING_ID);

const Index = () => {
  //state or hooks
  const [pages, setPages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //function calling
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });
  }, []);
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/pages/`;
    axios
      .get(url)
      .then((res) => {
        setPages(res.data);
        setIsLoading(false);
        // console.log("acf:", res.data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-[#4f4f4f]">
        <div className="w-20 h-20  border-4 border-dashed rounded-full animate-spin ">
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
  if (error || !pages || pages.length === 0) {
    return <Notfound />;
  }
  return (
    <div>
      {isLoading ? (
        <>
          <div>No Data Found</div>
        </>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About_us />} />
            <Route path="/career" element={<Career />} />
            <Route path="/careerform" element={<Career_Form />} />
            <Route
              path="/career/phpdevelopment"
              element={<PHP_development />}
            />
            <Route
              path="/career/wordpressdevelopment"
              element={<Wordpress_development />}
            />
            <Route
              path="/career/shopifydevelopment"
              element={<Shopify_development />}
            />
            <Route path="/ourservice/wordpress" element={<Wordpress />} />
            <Route path="/ourservice/shopify" element={<Shopify />} />
            <Route path="/ourservice/graphic" element={<Graphic />} />
            <Route path="/ourservice/animation" element={<Animation />} />
            <Route path="/contact-us" element={<Contact_us />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
