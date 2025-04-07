import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin, BiSolidMap } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
//route
import { Link } from "react-router-dom";

const Footer = () => {
  const [images, setImages] = useState([]);
  const [email, setEmail] = useState("");
  const listId = "Wn3hHn"; // Replace with your actual Klaviyo list ID

  const onEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      c: listId,
      email: ["keyurnxs1110@gmail.com"],
    };

    const urlData = new URLSearchParams(data);

    fetch("https://a.klaviyo.com/api/v2/list/Y4K7q2", {
      method: "POST",
      body: urlData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setEmail(res);
      });
  };
  // const addToKlaviyo = async (event) => {
  //   event.preventDefault();
  //   const email = emailRef.current.value;
  //   try {
  //     const response = await axios.post(
  //       "https://a.klaviyo.com/api/v2/list/X9YYhN/members",
  //       {
  //         api_key: "pk_c01fcc1de64bfdad633f05536fff783967",
  //         profiles: [{ email }],
  //       }
  //     );
  //     console.log(response.data); // Log response from Klaviyo
  //   } catch (error) {
  //     console.error("Error adding subscriber to Klaviyo:", error);
  //   }
  // };

  //function calling
  const gototop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/acf/v2/options`;
    axios.get(url).then((res) => {
      setImages(res.data);
      // setIsLoading(false);
      // console.log("images:", res.data);
    });
  }, []);

  return (
    <div className="font-poppins  ">
      <footer className="md:mt-0 bg-[#232323]  w-full  h-auto  ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 pb-20     max-w-screen-xl mx-auto  h-auto ">
          <div className=" ">
            <div className=" max-w-screen-xl mx-auto w-full  mt-32   ">
              <img
                src={
                  images &&
                  images.acf &&
                  images.acf.logo.footer_logo &&
                  images.acf.logo.footer_logo.url
                }
                className="  mx-auto "
              />
              <div className=" ">
                {" "}
                <p className="text-white text-center  font-bold text-2xl  ">
                  NXS INFOTECH <br /> PVT LTD
                </p>
              </div>
            </div>
          </div>
          <div className="md:mx-0  mx-auto ">
            <h1 className="md:mt-32 mt-10 text-white text-lg  font-bold    underline underline-offset-8 text-start pl-16">
              Get in Touch
            </h1>
            <ul className="text-white mx-auto mt-10">
              <li className="flex items-start gap-5 ">
                <BiSolidMap className="text-xl  w-10 " />
                <p className="text-base w-[171px]  flex justify-start ">
                  {" "}
                  Shop No. 215/216, Second floor ,Raj Victoriya, Opp. Raj
                  Arcade, Pal Surat, Gujarat -395009
                </p>
              </li>
              <li className="flex items-center   mt-10">
                <BsFillTelephoneFill className="text-xl  w-14 " />
                <a
                  href="tel:+919054527477"
                  className="text-base cursor-pointer"
                >
                  {" "}
                  (+91) 9054527477
                </a>
              </li>
              <li className="flex items-center mt-5">
                <IoMdMail className="text-xl w-14" />
                <a href="mailto:info@nxsinfotech.com" className="text-base">
                  info@nxsinfotech.com
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:mx-0  mx-auto ">
            <h1 className="md:mt-32 mt-10 font-bold text-white text-lg    underline underline-offset-8 lg:text-start md:text-center lg:pl-16 pl-0">
              Quick Links
            </h1>
            <ul className="text-white mx-auto mt-10 lg:pl-20 pl-0 ">
              <li className="flex md:items-start items-center  md:justify-start justify-center gap-5 ">
                <Link to={"/"} onClick={gototop}>
                  <p className="text-base cursor-pointer hover:underline underline-offset-4">
                    {" "}
                    Home
                  </p>
                </Link>
              </li>
              <li className="flex md:items-start items-center md:justify-start  justify-center  mt-5">
                <Link to={"/aboutus"} onClick={gototop}>
                  <p className="text-base cursor-pointer hover:underline underline-offset-4">
                    {" "}
                    About us
                  </p>
                </Link>
              </li>
              <li className="flex md:items-start items-center md:justify-start  justify-center  mt-5">
                <Link to={"/career"} onClick={gototop}>
                  <p className="text-base cursor-pointer  hover:underline underline-offset-4">
                    {" "}
                    Vacancies
                  </p>
                </Link>
              </li>
              <li className="flex md:items-start items-center md:justify-start  justify-center  mt-5">
                <Link to={"/ourservice/graphic"} onClick={gototop}>
                  <p className="text-base cursor-pointer  hover:underline underline-offset-4">
                    {" "}
                    Portfolio
                  </p>
                </Link>
              </li>
              <li className="flex md:items-start items-center md:justify-start  justify-center   mt-5">
                <Link to={"/contact-us"} onClick={gototop}>
                  <p className="text-base cursor-pointer hover:underline underline-offset-4">
                    {" "}
                    Contact us
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" mx-auto  ">
            <h1 className="md:mt-32 mt-10  text-white text-lg  font-bold   underline underline-offset-8 md:text-start text-center ">
              Stay Connected
            </h1>
            <ul className="text-white flex items-center md:justify-start justify-center gap-3   mt-10 ">
              <li className=" ">
                <a
                  href="https://www.instagram.com/nxs_infotech/?hl=en"
                  target="_blank"
                >
                  <AiOutlineInstagram className="text-3xl   rounded-md bg-white text-black" />{" "}
                </a>{" "}
              </li>
              <li>
                <a
                  href=" https://in.linkedin.com/company/nxs-infotech"
                  target="_blank"
                >
                  <BiLogoLinkedin className="text-3xl   rounded-md bg-white text-black" />{" "}
                </a>
              </li>
              <li>
                <a
                  href=" https://twitter.com/nxsinfotech?lang=en"
                  target="_blank"
                >
                  <AiOutlineTwitter className="text-3xl   rounded-md bg-white text-black" />{" "}
                </a>
              </li>
              <li>
                <a href=" https://www.facebook.com/nxsinfotech" target="_blank">
                  <BiLogoFacebook className="text-3xl   rounded-md bg-white text-black" />{" "}
                </a>
              </li>
            </ul>
            <div className="md:w-[95%]   w-[80%] md:mx-0 mx-auto   mt-10">
              <form onSubmit={handleSubmit}>
                <div
                  className="relative mb-3 flex items-center gap-3"
                  data-te-input-wrapper-init
                >
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    name="email"
                    value={email}
                    onChange={onEmailChange}
                    className="border border-white w-full rounded bg-transparent px-3 py-[0.50rem] text-base text-white"
                  />

                  <button
                    className="py-[8px] px-3 text-base text-white border border-white rounded-lg  "
                    type="submit"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
              {/* <div class="klaviyo-form-X9YYhN"></div> */}
              {/* <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={onEmailChange}
                  required
                />
                <button type="submit">Subscribe</button>
              </form> */}
            </div>
          </div>
        </div>
        <div className="bg-[#4f4f4f] w-full h-14  flex items-center justify-center ">
          <p className="text-white md:text-lg text-sm  ">
            © 2025 Copyright Reserved NXS infotech PVT LTD
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
