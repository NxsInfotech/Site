import React, { useEffect, useState } from "react";
import {
  BsFillArrowUpRightCircleFill,
  BsFillTelephoneFill,
  BsMapFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

import logo1 from "../Asserts/NXS-infotech-icon.png";

//Icons
import { BiRightArrowAlt, BiSolidMap } from "react-icons/bi";
// import testimonail from "../Asserts/OurServices/testimonial - bg.png";

// import { LuChevronRightCircle, LuMoveLeft, LuMoveRight } from "react-icons/lu";
import axios from "axios";
import { IoMdMail } from "react-icons/io";
//tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//lazyloading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//form
const INPUT = ({ type, required, name, id, value, onChange, placeholder }) => {
  if (type === "textarea") {
    return (
      <textarea
        className="mt-10 border-b-2 pl-5 py-5 w-[80%] border-gray-500    mx-auto text-[10px]"
        required={required}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        // placeholder="Message"
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      className="mt-5 border-b-2 pl-5 py-3 w-[80%] border-gray-500   mx-auto text-[10px]"
      type={type}
      required={required}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const fields = [
  {
    label: "Name",
    component: INPUT,
    type: "text",
    name: "your-name",
    id: "your-name",
    required: true,
    placeholder: "YOUR NAME",
  },
  {
    label: "Email",
    component: INPUT,
    type: "email",
    name: "your-email",
    id: "your-email",
    required: true,
    placeholder: "EMAIL",
  },
  {
    label: "Number",
    component: INPUT,
    type: "number",
    name: "number-70",
    id: "number-70",
    required: true,
    placeholder: "PHONE",
  },
  {
    label: "Message",
    component: INPUT,
    type: "textarea",
    name: "your-subject",
    id: "your-subject",
    placeholder: "MESSAGE",
  },
];

const Graphic = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [formValues, setFormValues] = useState({
    "your-name": "",
    "your-email": "",
    "number-70": "",
    "your-subject": "",
  });
  //function calling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  //fetching the data
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/pages/356`;
    axios.get(url).then((res) => {
      setData(res.data);
      setIsLoading(false);
      // console.log("dataid356:", res.data);
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
  //Sending Data
  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const reqoptions = {
      method: "POST",
      body: formData,
    };

    try {
      const req = await fetch(
        "https://nxsinfotech.com/server/wp-json/contact-form-7/v1/contact-forms/1307/feedback",
        reqoptions
      );

      if (req.ok) {
        const response = await req.json();
        console.log("response", response);
        toast.success("Submitted successfully!");
        setFormValues({
          "your-name": "",
          "your-email": "",
          "number-70": "",
          "your-subject": "",
        });
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-20 h-20  border-4 border-dashed  rounded-full animate-spin ">
          <img src={logo1} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="font-poppins scroll-smooth h-auto w-full">
      <section>
        <div className="grid md:grid-cols-2 grid-cols-1  mt-20  w-[80%] max-w-screen-xl mx-auto md:h-[300px] h-auto ">
          <div className="">
            <h1 className="text-4xl font-extrabold">Services I Offer</h1>
            <p
              className="text-sm text-gray-500 mt-[30px] w-[90%] leading-7"
              dangerouslySetInnerHTML={{
                __html: data && data.content && data.content.rendered,
              }}
            ></p>
          </div>
          <div className="md:mt-0 mt-10 md:pb-0 pb-10">
            <hr className="text-black font-bold bg-black h-1" />
            <h1 className="mt-3 text-3xl">Web UI/UX Design</h1>
            <div className=" flex  items-center ">
              {/* <p className=" text-md w-20">View All </p>{" "} */}
              <span className="flex justify-end w-full  ">
                <a href="#project">
                  <BsFillArrowDownCircleFill size={30} />
                </a>
              </span>
            </div>
            <hr className="text-black font-bold bg-black h-1 mt-5" />
            <h1 className="mt-3 text-3xl">Graphics Design</h1>
            <div className="  flex  items-center ">
              {/* <p className="text-md  w-20">View All </p>{" "} */}
              <span className="flex justify-end w-full  ">
                <a href="#project">
                  <button>
                    <BsFillArrowDownCircleFill size={30} />
                  </button>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="md:h-[300px] mx-auto h-auto bg-[#f2f2f2]">
        <p className="text-3xl text-center  font-bold pt-10 text-[#616161] ">
          Software
        </p>

        <div className=" w-[60%]  mt-10  grid md:grid-cols-5 grid-cols-1 md:gap-20 gap-10  mx-auto text-center  max-w-screen-xl ">
          <div className="">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.software[3] &&
                images.acf.software[3].software.url
              }
              alt="..."
              className="w-[60px] h-[60px] mx-auto"
              effect="blur"
            />
            <p className="text-center text-sm text-gray-600  md:pt-1 pt-3 ">
              Photoshop
            </p>
          </div>
          <div className="">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.software[2] &&
                images.acf.software[2].software.url
              }
              alt="..."
              className="w-[60px] h-[60px] mx-auto"
              effect="blur"
            />
            <p className="text-center text-sm text-gray-600  md:pt-1 pt-3 ">
              illustrator
            </p>
          </div>
          <div className="">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.software[0] &&
                images.acf.software[0].software.url
              }
              alt="..."
              className="w-[60px] h-[60px] mx-auto"
              effect="blur"
            />
            <p className="text-center text-sm text-gray-600 md:pt-1 pt-3 ">
              After Effects
            </p>
          </div>
          <div className="">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.software[4] &&
                images.acf.software[4].software.url
              }
              alt="..."
              className="w-[60px] h-[60px] mx-auto "
              effect="blur"
            />
            <p className="text-center text-sm text-gray-600 md:pt-1 pt-3 ">
              Adobe XD
            </p>
          </div>
          <div className="md:pb-0 pb-10">
            <LazyLoadImage
              src={
                images &&
                images.acf &&
                images.acf.software[1] &&
                images.acf.software[1].software.url
              }
              alt="..."
              className="w-[60px] h-[60px] mx-auto "
              effect="blur"
            />
            <p className="text-center text-sm text-gray-600 md:pt-1 pt-3 ">
              Corel Draw
            </p>
          </div>
        </div>
      </section>
      <section
        className="mt-[150px]  w-full max-w-screen-xl mx-auto "
        id="project"
      >
        <p className="h-[80px] w-full text-center text-3xl font-bold text-[#616161] ">
          Latest Projects
        </p>
        <div className="bg-[#f2f2f2]  h-auto w-full">
          <div className="w-full mx-auto grid md:grid-cols-2 grid-cols-1   h-auto">
            <div className=" h-auto flex  ">
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.latest_project[0] &&
                  images.acf.latest_project[0].project.url
                }
                alt="..."
                effect="blur"
                className="object-fill h-full"
              />
            </div>
            <div className=" h-auto relative ">
              <p className="text-[50px] font-bold text-gray-50 top-5 ml-10">
                PROJECT
              </p>
              <div className="absolute top-5 left-14 text-[22px]">
                Website Designs
              </div>
              <p className="pl-14 pb-2">
                {" "}
                {data &&
                  data.acf &&
                  data.acf.projects[0] &&
                  data.acf.projects[0].desc}
              </p>
              {/* <div className="flex justify-end  w-full md:mt-7 mt-3  ">
                <button className="text-white hover:text-black font-bold hover:bg-[#e9e9e9] bg-black text-sm px-6 py-2 mr-10 md:mb-0  mb-5">
                  EXPLORE
                </button>
              </div> */}
            </div>
          </div>
          <div className="w-full mx-auto grid md:grid-cols-2 grid-cols-1   h-auto">
            <div className=" h-auto relative bg-white ">
              <p className="text-[50px] font-bold text-gray-50 top-5 ml-10">
                PROJECT
              </p>
              <div className="absolute top-5 left-14 text-[22px]">
                Banner Designs
              </div>
              <p className="pl-14 pb-2">
                {" "}
                {data &&
                  data.acf &&
                  data.acf.projects[1] &&
                  data.acf.projects[1].desc}
              </p>
              {/* <div className="flex justify-end  w-full md:mt-7 mt-3  ">
                <button className="text-white hover:text-black font-bold hover:bg-[#e9e9e9] bg-black text-sm px-6 py-2 mr-10 md:mb-0  mb-5 ">
                  EXPLORE
                </button>
              </div> */}
            </div>

            <div className="  h-auto flex">
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.latest_project[1] &&
                  images.acf.latest_project[1].project.url
                }
                alt="..."
                effect="blur"
                className="object-fill h-full"
              />
            </div>
          </div>
          <div className="w-full mx-auto grid md:grid-cols-2 grid-cols-1   h-auto">
            <div className="  h-auto flex">
              {" "}
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.latest_project[2] &&
                  images.acf.latest_project[2].project.url
                }
                alt="..."
                effect="blur"
                className="object-fill h-full"
              />
            </div>
            <div className=" h-auto relative ">
              <p className="text-[50px] font-bold text-gray-50 top-5 ml-10">
                PROJECT
              </p>
              <div className="absolute top-5 left-14 text-[22px]">
                Social Media Post
              </div>
              <p className="pl-14 pb-2">
                {" "}
                {data &&
                  data.acf &&
                  data.acf.projects[2] &&
                  data.acf.projects[2].desc}
              </p>
              {/* <div className="flex justify-end  w-full md:mt-7 mt-3  ">
                <button className="text-white hover:text-black font-bold hover:bg-[#e9e9e9] bg-black text-sm px-6 py-2 mr-10 md:mb-0  mb-5 ">
                  EXPLORE
                </button>
              </div> */}
            </div>
          </div>
          <div className="w-full mx-auto grid md:grid-cols-2 grid-cols-1   h-auto">
            <div className="h-auto relative bg-white ">
              <p className="text-[50px] font-bold text-gray-50 top-5 ml-10">
                PROJECT
              </p>
              <div className="absolute top-5 left-14 text-[22px]">
                Logo Designs
              </div>
              <p className="pl-14 pb-2">
                {" "}
                {data &&
                  data.acf &&
                  data.acf.projects[3] &&
                  data.acf.projects[3].desc}
              </p>
              {/* <div className="flex justify-end  w-full md:mt-7 mt-3  ">
                <button className="text-white hover:text-black font-bold hover:bg-[#e9e9e9] bg-black text-sm px-6 py-2 mr-10 md:mb-0  mb-5 ">
                  EXPLORE
                </button>
              </div> */}
            </div>
            <div className="  h-auto flex">
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.latest_project[3] &&
                  images.acf.latest_project[3].project.url
                }
                alt="..."
                effect="blur"
                // className="object-fill h-full"
              />
            </div>
          </div>
          <div className="w-full mx-auto grid md:grid-cols-2 grid-cols-1   h-auto">
            <div className="  h-auto flex w-auto">
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.latest_project[4] &&
                  images.acf.latest_project[4].project.url
                }
                alt="..."
                className="w-full"
                effect="blur"
                // className="object-fill h-full"
              />
            </div>
            <div className=" h-auto relative ">
              <p className="text-[50px] font-bold text-gray-50 top-5 ml-10">
                PROJECT
              </p>
              <div className="absolute top-5 left-14 text-[22px]">
                2D Animation
              </div>
              <p className="pl-14 pb-2">
                {" "}
                {data &&
                  data.acf &&
                  data.acf.projects[4] &&
                  data.acf.projects[4].desc}
              </p>
              {/* <div className="flex justify-end  w-full md:mt-7 mt-3   ">
                <button className="text-white hover:text-black font-bold hover:bg-[#e9e9e9] bg-black text-sm px-6 py-2 mr-10 md:mb-0  mb-5  ">
                  EXPLORE
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        {" "}
        {/* <div className="mx-auto  h-auto  border border-dashed  border-emerald-400 ">
          <div className=" ">
            <div className="w-auto h-full  mx-auto  flex items-center px-4   ">
              <div className="  top-0 h-full left-0  flex items-center">
                {" "}
                <LuMoveLeft
                  onClick={prevslide}
                  size={38}
                  className=" cursor-pointer     "
                />
              </div>
              {slides[sliderIndex]}
              <div className="  top-0 h-full right-0   flex items-center">
                {" "}
                <LuMoveRight
                  onClick={nextslide}
                  size={38}
                  className=" cursor-pointer     "
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="w-auto h-auto  mx-auto  ">
          {" "}
          <div className="  ">{slides[sliderIndex]}</div>
        </div> */}
      </section>
      <section className="bg-[#f2f2f2]  h-auto flex justify-center  w-full ">
        <div className="grid md:grid-cols-2 grid-cols-1 h-auto  justify-center mb-28">
          <div className=" mt-48 ">
            <p className=" text-center font-bold text-[24px]">NXS INFOTECH</p>
            <p className="text-center">PVT LTD</p>
            <p className="mt-10 ">
              {" "}
              <BiSolidMap className="mx-auto  bg-black text-white " size={20} />
            </p>
            <p className="mt-5  text-sm w-[65%] mx-auto text-center">
              215/216 Raj Victoria, Pal Gam Rd, opp. Raj Arcade, Pal Gam, Surat,
              Gujarat 395009
            </p>
            <p className="mt-10 ">
              {" "}
              <IoMdMail
                className="mx-auto  bg-black text-white p-[2px] "
                size={20}
              />
            </p>
            <p className="mt-5  text-sm  mx-auto text-center ">
              info@nxsinfotech.com | hr@nxsinfotech.com
            </p>

            <p className="mt-10 ">
              {" "}
              <BsFillTelephoneFill
                className="mx-auto  bg-black text-white p-[2px] "
                size={20}
              />
            </p>
            <p className="mt-5  text-sm w-[45%] mx-auto text-center">
              (+91) 9054527477
            </p>
          </div>
          <div className="  flex items-center justify-center md:pt-0  md:pb-0 pb-10 mt-24 ">
            <div className="w-[450px] h-auto relative bg-white shadow-xl ">
              <div className=" mt-20 text-center w-full ">
                <h1 className="text-[22px] font-bold mx-auto  ">
                  {" "}
                  Let's Discuss Your Project
                </h1>

                <form onSubmit={handlesubmit} className="">
                  {fields.map((field) => (
                    <div className="mb-4 " key={field.id}>
                      {field.component === INPUT && (
                        <INPUT
                          type={field.type}
                          required={field.required}
                          name={field.name}
                          id={field.id}
                          value={formValues[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-[80%] bg-black py-4 mt-6 mb-5  text-white text-xs font-semibold flex  justify-center mx-auto items-center gap-3  transition-transform transform translate-x-0 hover:translate-x-3 "
                  >
                    SEND MESSAGE <BiRightArrowAlt size={20} className="" />
                  </button>
                </form>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Graphic;
