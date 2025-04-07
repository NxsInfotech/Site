import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../Asserts/NXS-infotech-icon.png";
import { motion, AnimatePresence } from "framer-motion";
//framer motion
//react icons
import { IoLogoGameControllerB, IoMdBriefcase } from "react-icons/io";
import { AiOutlineRise } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import { FaFaceLaugh } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import { BiTrip } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa";
//images
import funpost from "../Asserts/-Fun post-.jpg";
import girls from "../Asserts/girl gang.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { RxCross2 } from "react-icons/rx";

const JobDetails = ({ title, number, jobDesc, rolesAndRespo, required }) => {
  const getApplyNowLink = (number) => {
    // Define a mapping of job numbers to route paths
    const routeMapping = {
      0: "/career/phpdevelopment",
      1: "/career/wordpressdevelopment",
      2: "/career/shopifydevelopment",
      // Add more mappings as needed
    };

    // Get the route path based on the job number
    const routePath = routeMapping[number] || "/"; // Default to "/" if no match

    return routePath;
  };

  return (
    <div className="transition-all duration-1000 ease-in-out">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 bg-black text-white w-full mx-auto pt-10 border-gray-400 py-20 pl-5 md:pl-10 ${
          !required ? "w-full" : ""
        }`}
      >
        <div className="md:w-[90%] mx-auto md:pr-10">
          <p className="text-sm  md:w-[68%] w-full text-gray-300 leading-8">
            {jobDesc}
          </p>
          <Link
            to={getApplyNowLink(number)}
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className="px-6 py-3 md:w-auto w-full font-bold bg-white text-black mt-5 md:mt-10 text-sm">
              APPLY NOW
            </button>
          </Link>
        </div>
        <div>
          <p className="font-bold md:mt-0 mt-5">Roles and Responsibilities</p>
          <p className="text-sm md:w-[90%] text-gray-300 mt-5 leading-8">
            {rolesAndRespo}
          </p>
          <hr className="border border-gray-400 w-[80%] mt-10" />
          <p className="font-bold mt-10">Required</p>
          <div className="text-sm w-[95%] text-gray-300 mt-5 leading-8">
            {required.map((requirement, index) => (
              <p key={index}>{requirement}</p>
            ))}
            {required.length === 0 && (
              <p>No required qualifications specified.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const JobSection = ({ data, title, number, show, toggle }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className={`border-t-2 border-b-2 w-full mx-auto p-5 font-bold pb-5 ${
      show ? "bg-black text-white " : "bg-white"
    }`}
  >
    <motion.div
      className={`grid grid-cols-3 w-full cursor-pointer p-2  ${
        show ? "border-b-2" : ""
      }`}
      onClick={toggle}
    >
      <div className="text-lg">
        <p>{data?.acf.section4?.job_title[number]?.title}</p>
      </div>
      <div className="flex justify-center text-lg">
        <p>{data?.acf.section4?.job_title[number]?.number}</p>
      </div>
      <div className="flex justify-end text-lg">
        <button>{show ? <FaMinus /> : <FaPlus />}</button>
      </div>
    </motion.div>

    <AnimatePresence>
      {show && (
        <motion.div
          key="job-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 30 }}
          transition={{ duration: 1 }}
        >
          <JobDetails
            title={data?.acf.section4?.job_title[number]?.title}
            number={number}
            jobDesc={data?.acf.section4?.job_title[number]?.job_desc}
            rolesAndRespo={data?.acf.section4?.job_title[number]?.rolesandrespo}
            required={Array.from(
              { length: 17 },
              (_, i) =>
                data &&
                data.acf.section4 &&
                data.acf.section4.job_title[number] &&
                data.acf.section4.job_title[number][`required${i + 1}`]
            )}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Career = () => {
  //states or hooks
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showphp, setShowphp] = useState(false);
  const [showwordpress, setShowwordpress] = useState(false);
  const [showshopify, setShowshopify] = useState(false);
  const [showanniversary, setShowanniversary] = useState(true);
  const [showfestivalcelebration, setShowfestivalcelebration] = useState(false);
  const [showpatriotdaycelebration, setShowpatriotdaycelebration] =
    useState(false);
  const [showbirthdaycelebration, setShowbirthdaycelebration] = useState(false);
  const [showgames, setShowgames] = useState(false);
  const [images, setImages] = useState([]);
  const [model, setModel] = useState(false);
  const [views, setViews] = useState("");
  const [modelann, setModelann] = useState(false);
  const [viewsann, setViewsann] = useState("");
  const [modelpat, setModelpat] = useState(false);
  const [viewspat, setViewspat] = useState("");
  const [modelbir, setModelbir] = useState(false);
  const [viewsbir, setViewsbir] = useState("");
  const [modelgam, setModelgam] = useState(false);
  const [viewsgam, setViewsgam] = useState("");
  //function calling
  const Togglewordpress = () => {
    setShowwordpress(!showwordpress);
    setShowshopify(false);
    setShowphp(false);
  };
  const Togglephp = () => {
    setShowphp(!showphp);
    setShowwordpress(false);
    setShowshopify(false);
  };
  const Toggleshopify = () => {
    setShowshopify(!showshopify);
    setShowwordpress(false);
    setShowphp(false);
  };
  const Toggleanniversary = () => {
    setShowanniversary(true);
    setShowfestivalcelebration(false);
    setShowpatriotdaycelebration(false);
    setShowgames(false);
    setShowbirthdaycelebration(false);
  };
  const Togglefestivalcelebration = () => {
    setShowfestivalcelebration(true);
    setShowanniversary(false);
    setShowpatriotdaycelebration(false);
    setShowgames(false);
    setShowbirthdaycelebration(false);
  };
  const Togglepatriotdaycelebration = () => {
    setShowpatriotdaycelebration(true);
    setShowanniversary(false);
    setShowfestivalcelebration(false);
    setShowgames(false);
    setShowbirthdaycelebration(false);
  };
  const Togglebirthdaycelebration = () => {
    setShowbirthdaycelebration(true);
    setShowpatriotdaycelebration(false);
    setShowanniversary(false);
    setShowfestivalcelebration(false);
    setShowgames(false);
  };
  const Togglegames = () => {
    setShowgames(true);
    setShowbirthdaycelebration(false);
    setShowpatriotdaycelebration(false);
    setShowanniversary(false);
    setShowfestivalcelebration(false);
  };

  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/pages/481`;
    axios.get(url).then((res) => {
      setData(res.data);
      setIsLoading(false);
      // console.log("career:", res.data);
    });
  }, []);
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/acf/v2/options`;
    axios.get(url).then((res) => {
      setImages(res.data);
      setIsLoading(false);
      // console.log("images:", res.data);
    });
  }, []);
  //image view
  const handleOpenModel = (index) => {
    setViews(index);
    setModel(true);
    console.warn("images", index);
  };
  const handleOpenModelfestival = (index) => {
    setViewsann(index);
    setModelann(true);
    console.warn("images", index);
  };
  const handleOpenModelpatroit = (index) => {
    setViewspat(index);
    setModelpat(true);
    console.warn("images", index);
  };
  const handleOpenModelbirthday = (index) => {
    setViewsbir(index);
    setModelbir(true);
    console.warn("images", index);
  };
  const handleOpenModelgames = (index) => {
    setViewsgam(index);
    setModelgam(true);
    console.warn("images", index);
  };
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-20 h-20  border-4 border-dashed  rounded-full animate-spin ">
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
  return (
    <div className="font-poppins scroll-smooth h-auto w-full">
      {model && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-2 max-w-md ">
            <img
              src={
                images &&
                images.acf &&
                images.acf.anniversary &&
                images.acf.anniversary[views] &&
                images.acf.anniversary[views].image &&
                images.acf.anniversary[views].image.url
              }
              alt="Anniversary Image"
              className="mx-auto mb-4"
            />
            {/* Add more content for your modal here */}
          </div>
          <div className=" ">
            <RxCross2
              onClick={() => setModel(false)}
              className="cursor-pointer  float-right text-white  ml-10 mb-40"
              size={30}
            />
          </div>
        </div>
      )}

      {modelann && (
        <div className="fixed inset-0 z-50 flex items-center w-auto border justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-2  ">
            <img
              src={
                images &&
                images.acf &&
                images.acf.festival_celebration &&
                images.acf.festival_celebration[viewsann] &&
                images.acf.festival_celebration[viewsann].image &&
                images.acf.festival_celebration[viewsann].image.url
              }
              alt="Anniversary Image"
              className="mx-auto mb-4"
            />
          </div>
          <div className="   ">
            <RxCross2
              onClick={() => setModelann(false)}
              className="cursor-pointer  float-right text-white ml-10 mb-40"
              size={30}
            />
          </div>
        </div>
      )}
      {modelpat && (
        <div className="fixed inset-0 z-50 flex items-center w-auto border justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-2  ">
            <img
              src={
                images &&
                images.acf &&
                images.acf.patroit_day &&
                images.acf.patroit_day[viewspat] &&
                images.acf.patroit_day[viewspat].image &&
                images.acf.patroit_day[viewspat].image.url
              }
              alt="Anniversary Image"
              className="mx-auto mb-4"
            />
            {/* Add more content for your modal here */}
          </div>
          <div className="   ">
            <RxCross2
              onClick={() => setModelpat(false)}
              className="cursor-pointer  float-right text-white ml-10 mb-40"
              size={30}
            />
          </div>
        </div>
      )}
      {modelbir && (
        <div className="fixed inset-0 z-50 flex items-center w-auto border justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-2  ">
            <img
              src={
                images &&
                images.acf &&
                images.acf.birthday_celebration &&
                images.acf.birthday_celebration[viewsbir] &&
                images.acf.birthday_celebration[viewsbir].image &&
                images.acf.birthday_celebration[viewsbir].image.url
              }
              alt="Anniversary Image"
              className="mx-auto mb-4"
            />
            {/* Add more content for your modal here */}
          </div>
          <div className="   ">
            <RxCross2
              onClick={() => setModelbir(false)}
              className="cursor-pointer  float-right text-white ml-10 mb-40"
              size={30}
            />
          </div>
        </div>
      )}
      {modelgam && (
        <div className="fixed inset-0 z-50 flex items-center w-auto border justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-2  ">
            <img
              src={
                images &&
                images.acf &&
                images.acf.games &&
                images.acf.games[viewsgam] &&
                images.acf.games[viewsgam].image &&
                images.acf.games[viewsgam].image.url
              }
              alt="Anniversary Image"
              className="mx-auto mb-4"
            />
            {/* Add more content for your modal here */}
          </div>
          <div className="   ">
            <RxCross2
              onClick={() => setModelgam(false)}
              className="cursor-pointer  float-right text-white ml-10 mb-40"
              size={30}
            />
          </div>
        </div>
      )}
      <section className="lg:h-[450px] md:h-[200px] h-auto  md:w-[95%] max-w-screen-xl mx-auto w-auto  md:relative  mt-10 md:mb-0 mb-10">
        <motion.h1
          animate={{ fontSize: ["0px", "0px", "250px"] }}
          className="text-[180px] lg:block md:hidden hidden  w-auto text-[#f5f2f2] font-bold pl-20 md:leading-[230px] "
        >
          NXS <br className="md:block hidden " />
          INFOTECH
        </motion.h1>
        <motion.div
          initial={{ y: 100 }}
          animate={{ transition: { duration: 0.5 }, y: -50 }}
          exit={{ y: -100 }}
          className="md:absolute h-auto w-full text-center    lg:top-44 md:top-10 top-10  "
        >
          <p
            className="text-4xl font-extrabold lg:mt-48 mt-20"
            dangerouslySetInnerHTML={{
              __html: data && data.content && data.content.rendered,
            }}
          ></p>
          <div className="text-[25px]  items-center justify-center w-full ">
            Join Our NXS Squad.
            <p className="flex justify-center w-full ">
              {/* <Link to="/careerform">
                <button className="font-semibold flex items-center justify-center    gap-4 px-12 py-3 text-[25px] rounded-full text-white bg-black">
                  We're Hiring !{" "}
                  <span>
                    <IoMdBriefcase />
                  </span>
                </button>
              </Link> */}
              <a href="#formsection">
                <button className="font-semibold flex items-center justify-center    gap-4 px-12 py-3 text-[25px] rounded-full text-white bg-black">
                  We're Hiring !{" "}
                  <span>
                    <IoMdBriefcase />
                  </span>
                </button>
              </a>
            </p>
          </div>
        </motion.div>
      </section>
      <section className="w-[90%]  mx-auto   bg-[#f9f9f9] lg:h-[1000px] md:h-auto h-auto  rounded-3xl md:mt-[100px]  ">
        <div className="flex justify-center">
          <div className=" w-[90%] max-w-screen-xl mx-auto  h-auto  mt-[80px] grid md:grid-cols-2 grid-cols-1  border border-black rounded-3xl bg-white">
            <div className="mx-auto    ">
              <p className="flex  justify-center pt-10 mx-auto  text-3xl w-[60%]   font-bold ">
                {/* Why work with <br /> NXS INFOTECH? */}
                {data &&
                  data.acf &&
                  data.acf.section2 &&
                  data.acf.section2.heading}
              </p>
              <p className="px-5 pt-5 text-gray-600 text-sm tracking-wider text-justify ">
                {data?.acf?.section2?.sec2desc?.[0]?.desc ?? ""}
              </p>
              <p className="px-5 py-4 text-gray-600 text-sm tracking-wider text-justify">
                {data?.acf?.section2?.sec2desc?.[1]?.desc ?? ""}
              </p>
            </div>
            <div className=" flex justify-center items-center text-sm md:mt-5 mt-0">
              <ul className="font-bold leading-9">
                <li className="flex text-lg p-2 items-center gap-2 ">
                  <span className="">
                    <AiOutlineRise size={20} className="font-bold" />
                  </span>{" "}
                  {data &&
                    data.acf.section2 &&
                    data.acf.section2.type[0] &&
                    data.acf.section2.type[0].type}
                </li>
                <li className="flex text-lg p-2 items-center gap-2 ">
                  <span className="">
                    <IoMdBriefcase size={20} className="font-bold" />
                  </span>{" "}
                  {data &&
                    data.acf.section2 &&
                    data.acf.section2.type[1] &&
                    data.acf.section2.type[1].type}
                </li>
                <li className="flex text-lg p-2 items-center gap-2 ">
                  <span className="">
                    <FaBalanceScale size={20} className="font-bold" />
                  </span>{" "}
                  {data &&
                    data.acf.section2 &&
                    data.acf.section2.type[2] &&
                    data.acf.section2.type[2].type}
                </li>
                <li className="flex text-lg p-2 items-center gap-2 ">
                  {" "}
                  <span className="">
                    <IoLogoGameControllerB size={20} className="font-bold" />
                  </span>{" "}
                  {data &&
                    data.acf.section2 &&
                    data.acf.section2.type[3] &&
                    data.acf.section2.type[3].type}
                </li>
                <li className="flex text-lg p-2 items-center gap-2 ">
                  {" "}
                  <span className="">
                    <FaFaceLaugh size={20} className="font-bold" />
                  </span>{" "}
                  {data &&
                    data.acf.section2 &&
                    data.acf.section2.type[4] &&
                    data.acf.section2.type[4].type}
                </li>
                <li className="flex text-lg p-2 items-center gap-2 ">
                  {" "}
                  <span className="">
                    <TbNotes size={20} className="font-bold" />
                  </span>{" "}
                  {data &&
                    data.acf.section2 &&
                    data.acf.section2.type[5] &&
                    data.acf.section2.type[5].type}
                </li>
                <li className="flex text-lg p-2 items-center gap-2 ">
                  {" "}
                  <span className="">
                    <BiTrip size={20} className="font-bold" />
                  </span>{" "}
                  {data &&
                    data.acf.section2 &&
                    data.acf.section2.type[6] &&
                    data.acf.section2.type[6].type}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex justify-center  ">
          <p className="text-center text-[30px] font-bold">
            {data && data.acf && data.acf.section3 && data.acf.section3.title}
          </p>
        </div>
        <div className="mt-[100px] w-[90%] max-w-screen-xl mx-auto  lg:h-[200px] md:h-auto h-auto grid lg:grid-cols-4  md:grid-cols-1 grid-cols-1 justify-center   ">
          <div className="">
            <p className="font-extrabold mt-5 text-lg">
              {" "}
              {data &&
                data.acf &&
                data.acf.section3.future[0] &&
                data.acf.section3.future[0].heading}
            </p>
            <p className="mt-5 text-sm lg:w-[80%] w-full tracking-wider text-gray-600 text-justify">
              {data &&
                data.acf &&
                data.acf.section3.future[0] &&
                data.acf.section3.future[0].desc}
            </p>
          </div>
          <div className="">
            <p className="font-extrabold text-lg mt-5">
              {data &&
                data.acf &&
                data.acf.section3.future[1] &&
                data.acf.section3.future[1].heading}
            </p>
            <p className="mt-5 text-sm lg:w-[80%] w-full  tracking-wider text-gray-600 text-justify">
              {data &&
                data.acf &&
                data.acf.section3.future[1] &&
                data.acf.section3.future[1].desc}
            </p>
          </div>
          <div className="">
            <p className="font-extrabold text-lg mt-5">
              {data &&
                data.acf &&
                data.acf.section3.future[2] &&
                data.acf.section3.future[2].heading}
            </p>
            <p className="mt-4 text-sm lg:w-[80%] w-full tracking-wider text-gray-600 text-justify">
              {data &&
                data.acf &&
                data.acf.section3.future[2] &&
                data.acf.section3.future[2].desc}
            </p>
          </div>
          <div className="">
            <p className="font-extrabold text-lg mt-5">
              {data &&
                data.acf &&
                data.acf.section3.future[3] &&
                data.acf.section3.future[3].heading}
            </p>
            <p className="mt-4 text-sm lg:w-[80%] w-full tracking-wider text-gray-600 pb-10 text-justify">
              {data &&
                data.acf &&
                data.acf.section3.future[3] &&
                data.acf.section3.future[3].desc}
            </p>
          </div>
        </div>
      </section>
      <section
        className="mt-[150px] h-auto w-full max-w-screen-xl mx-auto  "
        id="formsection"
      >
        <div className="grid md:grid-cols-2  grid-cols-1   mx-auto ">
          <div className="p-5 ">
            <p className="text-3xl font-bold md:flex  items-center justify-center h-full">
              {data && data.acf.section4 && data.acf.section4.heading}
            </p>
          </div>

          <p className="p-5 text-base lg:flex md:none none items-center justify-center leading-14 tracking-wider md:mt-0 mt-10  text-gray-600 ">
            {data && data.acf.section4 && data.acf.section4.desc}
          </p>
        </div>

        <div className=" mt-10 text-lg">
          <JobSection
            data={data}
            title="PHP Developer"
            number={0}
            show={showphp}
            toggle={Togglephp}
          />
          <JobSection
            data={data}
            title="WordPress Developer"
            number={1}
            show={showwordpress}
            toggle={Togglewordpress}
          />
          <JobSection
            data={data}
            title="Shopify Developer"
            number={2}
            show={showshopify}
            toggle={Toggleshopify}
          />
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="w-full mt-[200px] md:mt-[100px] max-w-screen-xl mx-auto"
      >
        <div className="w-full md:w-[45%]    mx-auto mt-20  ">
          <p className="text-3xl font-bold p-5">
            {data && data.acf && data.acf.section5.heading}
          </p>
          <p className="p-5 text-base text-gray-600 leading-14 tracking-wider ">
            {data && data.acf && data.acf.section5.desc}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-[100px] text-lg  w-auto  h-auto  grid grid-cols-2 md:grid-cols-5 mx-auto mb-10"
        >
          <motion.div className="" whileHover={{ scale: 1.1 }}>
            {" "}
            <p
              className={` cursor-pointer text-center p-1 ${
                showanniversary
                  ? "text-white decoration-black font-bold bg-black border-black border-b-2 rounded-sm "
                  : "text-gray-500"
              }`}
              onClick={Toggleanniversary}
            >
              Anniversary
            </p>
          </motion.div>
          <motion.div className="" whileHover={{ scale: 1.1 }}>
            <p
              className={` cursor-pointer text-center p-1  ${
                showfestivalcelebration
                  ? "text-white decoration-black font-bold bg-black border-black border-b-2 rounded-sm "
                  : "text-gray-500"
              }`}
              onClick={Togglefestivalcelebration}
            >
              Festival Celebration
            </p>
          </motion.div>
          <motion.div className="" whileHover={{ scale: 1.1 }}>
            <p
              className={` cursor-pointer text-center p-1  ${
                showpatriotdaycelebration
                  ? "text-white decoration-black font-bold bg-black border-black border-b-2 rounded-sm  "
                  : "text-gray-500"
              }`}
              onClick={Togglepatriotdaycelebration}
            >
              Patriot day celebration
            </p>
          </motion.div>
          <motion.div className="" whileHover={{ scale: 1.1 }}>
            <p
              className={` cursor-pointer text-center p-1  ${
                showbirthdaycelebration
                  ? "text-white decoration-black font-bold bg-black border-black border-b-2 rounded-sm "
                  : "text-gray-500"
              }`}
              onClick={Togglebirthdaycelebration}
            >
              Birthday Celebration
            </p>
          </motion.div>
          <motion.div className="" whileHover={{ scale: 1.1 }}>
            <p
              className={` cursor-pointer text-center p-1  ${
                showgames
                  ? "text-white decoration-black font-bold bg-black border-black border-b-2 rounded-sm   "
                  : "text-gray-500"
              }`}
              onClick={Togglegames}
            >
              Games
            </p>
          </motion.div>
        </motion.div>
        {showanniversary && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-10  mx-auto   mb-10"
          >
            <div className=" w-[80%] h-auto  grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ">
              {images &&
                images.acf &&
                images.acf.anniversary &&
                images.acf.anniversary.map((image, index) => (
                  <div key={index} onClick={() => handleOpenModel(index)}>
                    <LazyLoadImage
                      key={index}
                      src={image.image.url}
                      alt=""
                      className="h-[240px] w-[240px] mt-5 md:mt-0 cursor-pointer  object-cover object-center "
                      effect="blur"
                    />
                  </div>
                ))}
            </div>
          </motion.div>
        )}
        {showfestivalcelebration && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-10  mx-auto   mb-10 "
          >
            <div className=" w-[80%] h-auto grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto ">
              {images.acf.festival_celebration
                .slice(0, 8)
                .map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpenModelfestival(index)}
                    className=""
                  >
                    <LazyLoadImage
                      key={index}
                      src={image.image.url}
                      alt=""
                      className="h-[240px] w-[240px] mt-5 md:mt-0 cursor-pointer  object-cover object-center "
                      effect="blur"
                    />
                  </div>
                ))}
            </div>
            {/* <div className="md:h-[180px] w-auto h-auto mx-auto md:flex justify-center items-center md:mt-10 gap-5">
              {images.acf.festival_celebration
                .slice(4, 8)
                .map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpenModelfestival(index)}
                  >
                    <LazyLoadImage
                      key={index}
                      src={image.image.url}
                      alt=""
                      className="h-[240px] w-[240px] mt-5 md:mt-0 cursor-pointer  object-cover object-center "
                      effect="blur"
                    />
                  </div>
                ))}
            </div> */}
          </motion.div>
        )}

        {showpatriotdaycelebration && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-10  mx-auto   mb-10 "
          >
            <div className="  w-[80%] h-auto grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
              {images &&
                images.acf &&
                images.acf.patroit_day &&
                images.acf.patroit_day.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpenModelpatroit(index)}
                  >
                    <LazyLoadImage
                      src={image.image.url}
                      alt=""
                      className="h-[240px] w-[240px] mt-5 md:mt-0 cursor-pointer  object-cover object-center"
                      effect="blur"
                    />
                  </div>
                ))}
            </div>
          </motion.div>
        )}

        {showbirthdaycelebration && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-10  mx-auto   mb-10"
          >
            <div className=" w-[80%] h-auto grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
              {images.acf.birthday_celebration
                .slice(0, 8)
                .map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleOpenModelbirthday(index)}
                  >
                    <LazyLoadImage
                      key={index}
                      src={image.image.url}
                      alt=""
                      className="h-[240px] w-[240px] mt-5 md:mt-0 cursor-pointer  object-cover object-center "
                      effect="blur"
                    />
                  </div>
                ))}
            </div>
          </motion.div>
        )}
        {showgames && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-10  mx-auto   mb-10"
          >
            <div className="w-[80%] h-auto grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
              {images.acf.games.slice(0, 8).map((image, index) => (
                <div key={index} onClick={() => handleOpenModelgames(index)}>
                  <LazyLoadImage
                    key={index}
                    src={image.image.url}
                    alt=""
                    className="h-[240px] w-[240px] mt-5 md:mt-0 cursor-pointer  object-cover object-center "
                    effect="blur"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};

export default Career;
