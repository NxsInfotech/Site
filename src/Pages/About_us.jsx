import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
//images
import logo from "../Asserts/NXS-infotech-icon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

const About_us = ({}) => {
  const [data1, setData1] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = [useRef(null)];

  // const blurimage = "LG9aEZ%M9FRi~qxuIUt6?bt7oz%M";
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 }, y: -10 },
    exit: { opacity: 0, y: -100 },
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const sectionTop = ref.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight * 0.5) {
            setIsVisible(true);
          }
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //function calling
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/acf/v2/options`;
    axios
      .get(url)
      .then((res) => {
        console.log("API Response:", res);
        setImages(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/pages/260`;
    axios
      .get(url)
      .then((res) => {
        console.log("API Response:", res);
        setData1(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-20 h-20  border-4 border-dashed rounded-full animate-spin ">
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
  return (
    <div className="font-poppins scroll-smooth h-auto w-full">
      {" "}
      <motion.section
        initial={{ y: 100 }}
        animate={{ transition: { duration: 0.5 }, y: -10 }}
        exit={{ y: -100 }}
        className="mx-auto md:h-[450px] h-auto  w-[80%] mt-20  max-w-screen-xl  "
      >
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  h-full justify-center items-center ">
          <div className="  ">
            <div className="h-full   w-full   ">
              <h2 className="text-4xl font-extrabold lg:w-[82%]    tracking-widest lg:pt-10  md:text-center lg:text-start ">
                {data1 && data1.acf && data1.acf.banner[0].heading}
              </h2>
              <p className="leading-7 pt-5 lg:w-[75%] w-full  tracking-wider text-sm text-justify   font-medium text-gray-500 ">
                {data1 && data1.acf && data1.acf.banner[0].desc}
              </p>
            </div>
          </div>
          <div className="mt-20 md:mt-20 lg:mt-0 flex justify-center items-center   relative">
            <LazyLoadImage
              effect="blur"
              src={
                images &&
                images.acf &&
                images.acf.aboutus_banner_img[6] &&
                images.acf.aboutus_banner_img[6].img1 &&
                images.acf.aboutus_banner_img[6].img1.url
              }
              alt=""
              // placeholderSrc={blurimage}
              className=""
            />
          </div>
        </div>
      </motion.section>
      <section className="w-[95%]   max-w-screen-xl mx-auto border border-black rounded-[50px] lg:h-[540px]  md:h-auto h-auto lg:mt-[150px] md:mt-[470px] mt-10  ">
        <div className="grid lg:grid-cols-3 md:gird-rows-1  grid-cols-1 h-full mt-20  ">
          <div className="     ">
            <p className="text-3xl font-bold flex items-center justify-center gap-4 ">
              <span>
                <LazyLoadImage
                  src={
                    images &&
                    images.acf &&
                    images.acf.icons[0].icon1 &&
                    images.acf.icons[0].icon1.url
                  }
                  alt="..."
                  effect="blur"
                />
              </span>
              {data1 &&
                data1.acf &&
                data1.acf.types[0] &&
                data1.acf.types[0].heading}
            </p>
            <p className=" p-5 text-sm font-medium text-gray-600 tracking-wider leading-7 text-justify">
              {data1 &&
                data1.acf &&
                data1.acf.types[0] &&
                data1.acf.types[0].desc}
            </p>
          </div>
          <div className="   ">
            <p className="text-3xl font-bold flex items-center justify-center gap-4 ">
              <span>
                <LazyLoadImage
                  src={
                    images &&
                    images.acf &&
                    images.acf.icons[1].icon1 &&
                    images.acf.icons[1].icon1.url
                  }
                  alt="..."
                  effect="blur"
                />
              </span>
              {data1 &&
                data1.acf &&
                data1.acf.types[1] &&
                data1.acf.types[1].heading}
            </p>
            <p className="p-5 text-sm  font-medium text-gray-600 tracking-wider leading-7 text-justify">
              {data1 &&
                data1.acf &&
                data1.acf.types[1] &&
                data1.acf.types[1].desc}
            </p>
          </div>

          <div className="   ">
            <p className="text-3xl font-bold flex items-center justify-center gap-4 ">
              <span>
                <LazyLoadImage
                  src={
                    images &&
                    images.acf &&
                    images.acf.icons[2].icon1 &&
                    images.acf.icons[2].icon1.url
                  }
                  alt="..."
                  effect="blur"
                />
              </span>
              {data1 &&
                data1.acf &&
                data1.acf.types[2] &&
                data1.acf.types[2].heading}
            </p>

            <p className="p-5 text-sm font-medium text-gray-600 tracking-wider leading-7 text-justify">
              {data1 &&
                data1.acf &&
                data1.acf.types[2] &&
                data1.acf.types[2].desc}
            </p>
          </div>
        </div>
      </section>
      <section className=" md:h-auto h-auto w-full mx-auto bg-[#f6f6f6] mt-[110px] pb-10">
        <motion.div
          ref={sectionRefs[0]}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit="exit"
          variants={sectionVariants}
          className="md:w-[80%] max-w-screen-xl mx-auto  lg:flex  md:pt-20  pt-10   gap-10   h-auto  "
        >
          <div className="  w-auto mt-20 mx-auto md:block lg:hidden ">
            <p className="font-bold text-3xl lg:text-start text-center p-5">
              The People Behind <br /> NXS INFOTECH{" "}
            </p>
            <p
              className="text-sm tracking-wider p-5 leading-8 text-gray-600 text-justify 
            "
            >
              {data1 &&
                data1.acf &&
                data1.acf.banner[1] &&
                data1.acf.banner[1].desc}
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
            <div className=" lg:w-auto w-60 mx-auto md:mt-20 mt-10     bg-white ">
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.boss[0].image &&
                  images.acf.boss[0].image.url
                }
                alt=""
                effect="blur"
              />
              <p className="text-center font-bold mt-3 tracking-wider">
                KEYUR PATEL
              </p>
              <p className="text-center text-sm text-gray-600 mt-3 pb-5 tracking-wider">
                Co-Founder & Business Manager
              </p>
            </div>
            <div className=" lg:w-auto w-60 md:mt-20 mt-10 mx-auto   bg-white">
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.boss[1].image &&
                  images.acf.boss[1].image.url
                }
                alt=""
                effect="blur"
              />
              <p className="text-center font-bold mt-3 tracking-wider">
                VIJAY PATEL
              </p>
              <p className="text-center w-48 mx-auto text-sm text-gray-600 mt-3 pb-5 tracking-wider">
                Co-Founder & Technical Expert
              </p>
            </div>
          </div>
          <div className=" md:w-[550px] w-auto mt-20 mx-auto lg:block hidden ">
            <p className="font-bold text-3xl md:text-start text-center p-5">
              The People Behind <br /> NXS INFOTECH{" "}
            </p>
            <p className="text-sm tracking-wider p-5 leading-8 text-gray-600 ">
              {data1 &&
                data1.acf &&
                data1.acf.banner[1] &&
                data1.acf.banner[1].desc}
            </p>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 w-[80%] max-w-screen-xl  gap-4  lg:h-[370px] md:h-auto h-auto mt-[120px] mx-auto  ">
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[1].employee &&
                images.acf.employees[1].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              TINKAL PATEL
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Office Support Manager
            </p>
          </div>
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[0].employee &&
                images.acf.employees[0].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              SANJAY PATEL
            </p>
            <p className="text-center  text-sm tracking-wider text-gray-600 mt-3">
              Office Administrator
            </p>
          </div>
          {/* <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[7].employee &&
                images.acf.employees[7].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              BHARATLAL SHRIVASTAV
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr.WEB Developer
            </p>
          </div> */}
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[2].employee &&
                images.acf.employees[2].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              SHANKAR GUPTA
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Team Lead
            </p>
          </div>
        </div>
        <div
          ref={sectionRefs[2]}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit="exit"
          variants={sectionVariants}
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 w-[80%] gap-4  lg:h-[370px] md:h-auto h-auto mt-[50px] max-w-screen-xl mx-auto  "
        >
          {/* <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[1].employee &&
                images.acf.employees[1].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              TEJAL PATEL{" "}
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Frontend Developer
            </p>
          </div> */}
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[3].employee &&
                images.acf.employees[3].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              POOJA MAURYA
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Sr. Graphics Designer
            </p>
          </div>
          {/* <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[5].employee &&
                images.acf.employees[5].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              KAJAL PATEL{" "}
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr.WEB Developer
            </p>
          </div> */}
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[4].employee &&
                images.acf.employees[4].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              Jinal Methiwala
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Sr.WEB Developer
            </p>
          </div>
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[5].employee &&
                images.acf.employees[5].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              Megha Mumbaiwala
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Sr.WEB Developer
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 w-[80%] gap-4  lg:h-[370px] md:h-auto h-auto mt-[50px] max-w-screen-xl mx-auto sm:mb-5 md:mb-0 ">
          <div className=" w-60 mx-auto bg-white ">
            {" "}
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[6].employee &&
                images.acf.employees[6].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              PRERNA MHASKAR
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr. Web Developer
            </p>
          </div>
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[7].employee &&
                images.acf.employees[7].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              Komal Mahajan
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr.WEB Developer
            </p>
          </div>

          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[8].employee &&
                images.acf.employees[8].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              Parthiv Kantrodiya
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr. Graphics Designer
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 w-[80%] gap-4  lg:h-[370px] md:h-auto h-auto mt-[50px] max-w-screen-xl mx-auto sm:mb-5 md:mb-0 ">
          <div className=" w-60 mx-auto bg-white ">
            {" "}
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[9].employee &&
                images.acf.employees[9].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              Suraj Sabu
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr. Web Developer
            </p>
          </div>
          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[10].employee &&
                images.acf.employees[10].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              Rishabh Shukla
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr.WEB Developer
            </p>
          </div>

          <div className=" w-60 mx-auto bg-white">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.employees[11].employee &&
                images.acf.employees[11].employee.url
              }
              alt=""
              effect="blur"
            />
            <p className="text-center text-md tracking-wider font-bold mt-3">
              Chirag vishwakarma
            </p>
            <p className="text-center text-sm tracking-wider text-gray-600 mt-3">
              Jr.WEB Developer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_us;
