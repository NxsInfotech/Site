import "../App.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../Asserts/NXS-infotech-icon.png";

import { useInView } from "react-intersection-observer";
//framer motion
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Cursor } from "react-simple-typewriter";
//gototop
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { CgArrowLongRight } from "react-icons/cg";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

/// sliders
const settingsproject = {
  infinite: true,
  speed: 1000,
  arrows: false,
};
const breakpoints = [
  { maxWidth: 768, slidesToShow: 1, slidesToScroll: 1 },
  { maxWidth: 1024, slidesToShow: 2, slidesToScroll: 2 },
  { minWidth: 1025, slidesToShow: 4, slidesToScroll: 4 },
];
const settingstestimo = {
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
};
const breakpointstesto = [
  { maxWidth: 768, slidesToShow: 1, slidesToScroll: 1 },
  { maxWidth: 1024, slidesToShow: 2, slidesToScroll: 2 },
  { minWidth: 1025, slidesToShow: 3, slidesToScroll: 1 },
];
const Home = () => {
  //states or hooks
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [counter, setCounter] = useState(false);
  //SLIDER
  const sliderref = useRef(null);
  const sliderrefs = useRef(null);
  const sliderrefss = useRef(null);
  const sectionrefs = [useRef(null)];
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  const [sliderTesto, setSliderTesto] = useState({
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  const [sliderCompany, setSliderCompany] = useState({
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  });
  //Animation
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger multiple times
  });
  //gototop

  const gototop = () => {
    window.scrollTo(0, 0);
  };

  //testimonial Slider
  const handleResizetesto = () => {
    const screenwidth = window.innerWidth;
    const breakdowntesto = breakpointstesto.find((bp) =>
      bp.maxWidth ? screenwidth <= bp.maxWidth : screenwidth > bp.minWidth
    );

    if (breakdowntesto) {
      setSliderTesto((prevSettings) => ({
        ...prevSettings,
        ...breakdowntesto,
      }));
    }
  };
  //SLIDER
  function truncateContent(content, maxLength) {
    if (!content) return ""; // Return empty string if content is not available
    if (content.split(" ").length <= maxLength) return content; // If content has less than or equal to maxLength words, return original content

    const words = content.split(" ").slice(0, maxLength); // Get first maxLength words
    const truncatedContent = words.join(" ") + "..."; // Join them and append "..."
    return truncatedContent;
  }
  //company Slider
  const handlecompanySlider = () => {
    const screenwidth = window.innerWidth;
    const breakdowncompany = breakpointscompany.find((bp) =>
      bp.maxWidth ? screenwidth <= bp.maxWidth : screenwidth > bp.minWidth
    );

    if (breakdowncompany) {
      setSliderCompany((prevSettings) => ({
        ...prevSettings,
        ...breakdowncompany,
      }));
    }
  };

  //Fetching api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nxsinfotech.com/server/wp-json/wp/v2/pages/285"
        );
        const response2 = await axios.get(
          "https://nxsinfotech.com/server/wp-json/wp/v2/pages/20"
        );
        const response3 = await axios.get(
          "https://nxsinfotech.com/server/wp-json/acf/v2/options"
        );
        const response4 = await axios.get(
          "https://nxsinfotech.com/server/wp-json/wp/v2/testimonial?per_page=100"
        );

        setData(response.data);
        setData1(response2.data);
        setImages(response3.data);
        setData2(response4.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-20 h-20  border-4 border-dashed  rounded-full animate-spin ">
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
  const ServiceSection = ({ imageSrc, heading, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={`rounded-xl hover:cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#999999] hover:shadow-2xl `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LazyLoadImage
          src={imageSrc}
          className="mx-auto mt-6 rotate-flip-effect"
          alt={heading}
          loading="lazy"
        />

        <h1 className="text-xl font-bold text-center mt-4">{heading}</h1>
        <hr className="w-[80%] mx-auto underline underline-offset-8 mt-2" />
        <p
          className={`mb-3 pt-5 text-sm  text-gray-600 w-[80%] mx-auto leading-6 ${
            isHovered ? "text-white" : ""
          }`}
        >
          {description}
        </p>
      </div>
    );
  };
  return (
    <div className="font-poppins relative  snap-y snap-mandatory w-full     h-auto ">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        ease={{ type: "linear" }}
        className="h-auto snap-start flex justify-center  max-w-screen-xl mx-auto"
      >
        <div className="container mx-auto mt-8 md:mt-20 flex flex-col md:flex-row items-center justify-center  lg:w-[80%] sm:w-full md:w-full ">
          <div className="w-full md:w-1/2 md:pl-12 pl-4 md:pt-0 pt-4">
            <div className="text-3xl md:text-4xl font-extrabold">
              {data &&
                data.acf &&
                data.acf.banner_section &&
                data.acf.banner_section.banner_title}
            </div>
            <div className="text-base md:text-lg text-gray-400 mt-2 md:mt-4">
              <span className="text-base md:text-lg text-gray-400">
                {data &&
                  data.acf &&
                  data.acf.banner_section &&
                  data.acf.banner_section.banner_desc}
                <Cursor cursorColor="black" />
              </span>
            </div>

            <Link to="/contact-us" onClick={gototop}>
              <button
                type="button"
                className="py-2 md:py-3 px-6 md:px-8 hover:bg-gray-200 border-l-4 border-b-4 border-t-4 border-r-4 mt-6 md:mt-8 rounded-md border-gray-900 text-black"
              >
                CONTACT NXS
              </button>
            </Link>

            <div className="flex justify-center md:justify-start items-center gap-20 pt-20 w-full">
              <div className="text-3xl font-bold flex justify-between gap-12 w-full  ">
                <div ref={ref} className="text-3xl font-bold flex">
                  {inView && <CountUp start={0} end={8} duration={3} />}+
                </div>
                <div ref={ref} className="text-3xl font-bold flex">
                  {inView && <CountUp start={0} end={300} duration={3} />}+
                </div>
                <div ref={ref} className="text-3xl font-bold flex">
                  {inView && <CountUp start={0} end={50} duration={3} />}+
                </div>
              </div>
            </div>

            <div className="flex justify-between md:justify-start gap-20  mt-2  text-gray-400">
              <div className="text-3xl font-bold flex justify-between gap-12 w-full  ">
                <div className="text-gray-400 w-20 text-xs ">
                  {data &&
                    data.acf &&
                    data.acf.banner_section &&
                    data.acf.banner_section.banner_number_desc}
                </div>

                <div className="text-gray-400 text-xs w-20">
                  {data &&
                    data.acf &&
                    data.acf.banner_section &&
                    data.acf.banner_section.banner_number1_desc}
                </div>

                <div className="text-gray-400 text-xs pl-8 w-20">
                  {data &&
                    data.acf &&
                    data.acf.banner_section &&
                    data.acf.banner_section.banner_number2_desc}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center ">
            <div className="bg-[#f8f8f8] rounded-full w-72 h-72 md:w-96 md:h-96 hidden md:block  relative">
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.experience &&
                  images.acf.experience.url
                }
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                // effect="blur"
              />
            </div>
          </div>
        </div>
      </motion.section>
      <section className=" mx-auto mt-10 max-w-screen-xl  h-auto   ">
        <motion.div className="text-center mt-20">
          <h1 className="text-3xl font-bold">Welcome To NXS</h1>
          <p className="pt-2 text-gray-600">India’s Leading IT Company</p>
        </motion.div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto mt-10">
            <ServiceSection
              imageSrc={
                images &&
                images.acf &&
                images.acf.social_media.profiles[3] &&
                images.acf.social_media.profiles[3].icon
              }
              heading={data1?.acf?.welcome_to__nxs.heading[3]?.h1}
              description={data1?.acf?.welcome_to__nxs.desc[3]?.desc}
            />
            <ServiceSection
              imageSrc={
                images &&
                images.acf &&
                images.acf.social_media.profiles[1] &&
                images.acf.social_media.profiles[1].icon
              }
              heading={data1?.acf?.welcome_to__nxs.heading[1]?.h1}
              description={data1?.acf?.welcome_to__nxs.desc[1]?.desc}
            />

            <ServiceSection
              imageSrc={
                images &&
                images.acf &&
                images.acf.social_media.profiles[2] &&
                images.acf.social_media.profiles[2].icon
              }
              heading={data1?.acf?.welcome_to__nxs.heading[2]?.h1}
              description={data1?.acf?.welcome_to__nxs.desc[2]?.desc}
            />
            <ServiceSection
              imageSrc={
                images &&
                images.acf &&
                images.acf.social_media.profiles[0] &&
                images.acf.social_media.profiles[0].icon
              }
              heading={data1?.acf?.welcome_to__nxs.heading[0]?.h1}
              description={data1?.acf?.welcome_to__nxs.desc[0]?.desc}
            />
          </div>
        </div>
      </section>
      <section
        className="w-auto  bg-[#1a1a1a]   h-auto mt-28  snap-start bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url(${
        //     images &&
        //     images.acf &&
        //     images.acf.testimonial[1] &&
        //     images.acf.testimonial[1].image.url
        //   })`,
        // }}
      >
        <div className="text-3xl font-bold     text-white text-center pt-20  ">
          {" "}
          {data1 &&
            data1.acf &&
            data1.acf.section_4[0] &&
            data1.acf.section_4[0].seciton_4_title}
        </div>
        <div className="max-w-screen-xl mx-auto md:h-auto h-auto grid md:grid-cols-3 p-5   ">
          <div className="md:w-[75%] w-full p-5 ">
            <p className=" text-[16px] text-gray-300  mt-7 text-start leading-6 ">
              {data1 &&
                data1.acf &&
                data1.acf.section_4[0] &&
                data1.acf.section_4[0].section_4_desc}
            </p>
          </div>
          <div>
            <ul className="md:mt-20 mt-0">
              <li className=" ">
                <div className="text-white text-lg font-bold flex items-center">
                  <span>
                    {/* <img
                      src={images && images.acf && images.acf.favicon}
                      alt=""
                    /> */}
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="text-lg pl-1 ">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_title1}
                  </p>
                </div>
                <div className="pl-8 md:w-[70%] w-full">
                  {" "}
                  <p className=" text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_desc1}
                  </p>
                </div>
              </li>
              <li className="mt-10 ">
                <div className="text-white font-bold flex items-center">
                  <span>
                    {/* <img
                      src={images && images.acf && images.acf.favicon}
                      alt=""
                    /> */}
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="text-lg pl-1 ">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_title2}
                  </p>
                </div>
                <div className="pl-8 md:w-[70%] w-full">
                  {" "}
                  <p className="text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_desc2}
                  </p>
                </div>
              </li>
              <li className="mt-10 ">
                <div className="text-white font-bold flex items-center">
                  <span>
                    {/* <img
                      src={images && images.acf && images.acf.favicon}
                      alt=""
                    /> */}
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="pl-1  text-lg">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_title3}
                  </p>
                </div>
                <div className="pl-8 md:w-[70%] w-full">
                  {" "}
                  <p className="text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_desc3}
                  </p>
                </div>
              </li>
              <li className="mt-10 ">
                <div className="text-white font-bold flex items-center">
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="pl-1 text-lg">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_title4}
                  </p>
                </div>
                <div className="pl-8 md:w-[55%] w-full">
                  {" "}
                  <p className="text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[0] &&
                      data1.acf.section_4[0].section_4_cl1_desc4}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="md:mt-20 mt-14">
              <li className=" ">
                <div className="text-white font-bold flex items-center">
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="pl-1  text-lg">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_title1}
                  </p>
                </div>
                <div className="pl-8 md:w-[70%] w-full">
                  {" "}
                  <p className=" text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_desc1}
                  </p>
                </div>
              </li>
              <li className="mt-10 ">
                <div className="text-white font-bold flex items-center">
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="pl-1  text-lg">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_title2}
                  </p>
                </div>
                <div className="pl-8 md:w-[80%] w-full">
                  {" "}
                  <p className="text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_desc2}
                  </p>
                </div>
              </li>
              <li className="mt-10 ">
                <div className="text-white font-bold flex items-center">
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="pl-1  text-lg">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_title3}
                  </p>
                </div>
                <div className="pl-8 md:w-[77%] w-full">
                  {" "}
                  <p className="text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_desc3}
                  </p>
                </div>
              </li>
              <li className="mt-10 ">
                <div className="text-white font-bold flex items-center">
                  <span>
                    <MdOutlineKeyboardDoubleArrowRight size={25} />
                  </span>

                  <p className="pl-1 text-lg">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_title4}
                  </p>
                </div>
                <div className="pl-8 md:w-[70%] w-full">
                  {" "}
                  <p className="text-[16px] pt-2 text-gray-300">
                    {data1 &&
                      data1.acf &&
                      data1.acf.section_4[1] &&
                      data1.acf.section_4[1].section_4_cl1_desc4}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-28 flex justify-center h-auto   snap-start  ">
        <div className="w-[95%]  mx-auto h-auto">
          <h1 className="text-3xl font-bold text-center ">Our Projects</h1>

          <div className="relative mt-10 w-[85%]  h-auto max-w-screen-xl mx-auto ">
            {/* Custom Arrow on the Left */}
            <div className="absolute -left-8 cursor-pointer hover:text-gray-500 top-1/2 transform -translate-y-1/2">
              <IoIosArrowDropleftCircle
                size={36}
                onClick={() => sliderrefs.current.slickPrev()}
              />
            </div>

            {/* Slider */}
            <Slider ref={sliderrefs} {...settingsproject} {...sliderSettings}>
              {images.acf &&
                images.acf.wordpress_images &&
                images.acf.wordpress_images.map((item, index) => {
                  const image = item.image;

                  return (
                    <div
                      key={index}
                      className="border border-black rounded-lg cursor-pointer mx-auto h-auto pb-5 md:mt-0 mt-5 hover:opacity-50 "
                    >
                      <LazyLoadImage
                        className="object-cover pt-4  h-full  "
                        src={image.url}
                        alt=""
                        // effect="blur"
                        loading="lazy"
                      />
                      <p className="text-center text-xl pt-3 ">{image.title}</p>
                    </div>
                  );
                })}
            </Slider>

            {/* Custom Arrow on the Right */}
            <div className="absolute -right-8 hover:text-gray-500 cursor-pointer top-1/2 transform -translate-y-1/2">
              <IoIosArrowDroprightCircle
                size={36}
                onClick={() => sliderrefs.current.slickNext()}
              />
            </div>
          </div>
          <div className=" md:h-auto flex items-center justify-center h-32 w-full     ">
            <Link to="/ourservice/wordpress" onClick={gototop}>
              <button
                type="button"
                className="py-3 px-6  hover:bg-gray-200 flex items-center border-l-4 border-b-4 border-t-4 border-r-4 mt-8 rounded-md border-gray-900  text-black"
              >
                View All{" "}
                <span>
                  <CgArrowLongRight
                    size={30}
                    className="ml-2   w-full hover:translate-x-2  hover:duration-75"
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="h-auto  mt-28   ">
        <div className=" max-w-screen-xl    mx-auto  h-auto  ">
          <div className="w-full lg:flex xl:flex  lg:items-start items-center justify-center  ">
            <div className="mt-20 lg:w-[30%]  ">
              <h1 className="text-3xl font-bold lg:text-start text-center leading-10 ">
                What our client say about us
              </h1>
              <p className="mt-5 text-[16px] lg:text-start text-center  text-gray-500  lg:w-[80%] w-full ">
                Our client send us a bunch of smiles with our services and we
                love them
              </p>
              <div className="hidden lg:block">
                <Link to="/testimonial" onClick={gototop}>
                  <button
                    type="button"
                    className="py-3 px-8 w-auto flex    hover:bg-gray-200 border-l-4 border-b-4 border-t-4 border-r-4 mt-8 rounded-md border-gray-900  text-black  items-center justify-center    "
                  >
                    View all Testimonial{" "}
                    <span>
                      <CgArrowLongRight
                        size={30}
                        className="ml-2    w-full hover:translate-x-2  hover:duration-75"
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-[70%] w-[80%] mx-auto ">
              <div className=" mx-auto relative ">
                <div className="absolute -left-8 top-1/2 transform  -translate-y-1/2 text-black cursor-pointer hover:text-gray-500 z-10">
                  <IoIosArrowDropleftCircle
                    size={36}
                    onClick={() => sliderrefss.current.slickPrev()}
                  />
                </div>

                <Slider ref={sliderrefss} {...sliderTesto} {...settingstestimo}>
                  {data2 &&
                    Array.isArray(data2) &&
                    data2.map((item, index) => (
                      <div
                        key={index}
                        className="mt-20 border w-72 h-auto cursor-pointer  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                      >
                        <div className="relative -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl">
                          <img
                            src={item.acf.comma && item.acf.comma.url}
                            alt=""
                            className="block w-16 h-16 mb-36  border rounded-full"
                          />
                        </div>
                        <div className="w-auto relative h-auto block  overflow-x-hidden "></div>
                        <div className="px-5 py-2">
                          <a href={item.acf.siteurl}>
                            <p className="font-bold   text-lg flex-wrap">
                              {item.acf.sitename}
                            </p>
                          </a>

                          <p
                            className="text-base mt-3"
                            dangerouslySetInnerHTML={{
                              __html: truncateContent(
                                item.content && item.content.rendered,
                                30
                              ),
                            }}
                          ></p>

                          <h1
                            className="text-lg font-bold text-right"
                            dangerouslySetInnerHTML={{
                              __html: item.title && item.title.rendered,
                            }}
                          ></h1>
                        </div>
                      </div>
                    ))}
                </Slider>
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-500 cursor-pointer z-10">
                  <IoIosArrowDroprightCircle
                    size={36}
                    onClick={() => sliderrefss.current.slickNext()}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <Link to="/testimonial" onClick={gototop}>
                <button
                  type="button"
                  className="py-3 px-8 w-[80%] mx-auto    hover:bg-gray-200 border-l-4 border-b-4 border-t-4 border-r-4 mt-8 rounded-md border-gray-900  text-black  items-center justify-center  lg:hidden md:block flex   "
                >
                  View all Testimonial{" "}
                  <span>
                    <CgArrowLongRight
                      size={30}
                      className="ml-2    w-full hover:translate-x-2  hover:duration-75"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto md:mt-36 mt-28 snap-start flex justify-center  ">
        <div className="bg-[#f6f6f6] w-full h-auto pb-10">
          <h1 className="text-3xl font-bold text-center pt-5 ">Our Clients</h1>
          <div className="relative mt-10 mx-auto h-auto w-[85%]  max-w-screen-xl  ">
            {/* Custom Arrow on the Left */}
            <div className="absolute -left-5 cursor-pointer hover:text-gray-500 top-1/2 transform -translate-y-1/2">
              <IoIosArrowDropleftCircle
                size={36}
                onClick={() => sliderref.current.slickPrev()}
              />
            </div>

            {/* Slider */}

            <Slider ref={sliderref} {...sliderCompany}>
              {images.acf &&
                images.acf.company_slider &&
                images.acf.company_slider.map((item, index) => {
                  const image = item.image;
                  const link = item.link;

                  return (
                    <div
                      key={index}
                      className=" cursor-pointer   h-auto pb-5 md:mt-0 mt-5 hover:opacity-50"
                    >
                      {" "}
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          className="object-cover pt-4 w-[80%] h-full mx-auto"
                          src={image.url}
                          alt=""
                        />
                      </a>
                    </div>
                  );
                })}
            </Slider>
            {/* Custom Arrow on the Right */}
            <div className="absolute -right-5 hover:text-gray-500 cursor-pointer top-1/2 transform -translate-y-1/2">
              <IoIosArrowDroprightCircle
                size={36}
                onClick={() => sliderref.current.slickNext()}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
