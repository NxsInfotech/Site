import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { debounce } from "lodash";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  const [pages, setPages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef(null);

  const dropdownshow = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowDropdown(false);
  };

  const location = useLocation();
  const isActivePage = (path) => location.pathname === path;

  const toggleopen = () => {
    setIsOpen(!isOpen);
  };

  const gototop = () => {
    window.scrollTo(0, 0);
  };

  const closenav = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingDown = currentScrollPos > prevScrollPos;

        setIsHeaderVisible(!isScrollingDown || currentScrollPos === 0);

        setPrevScrollPos(currentScrollPos);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/acf/v2/options`;
    axios.get(url).then((res) => {
      setImages(res.data);
      // console.log("images:", res.data);
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!images) {
    return <p className="text-center text-3xl">Loading...</p>;
  }

  return (
    <div
      ref={headerRef}
      className="font-poppins header bg-white shadow-sm    w-full"
    >
      <header className="p-4 text-gray-500 top-0 left-0 sticky bg-white z-10 md:sticky  max-w-screen-xl mx-auto     ">
        <div className="flex justify-end  items-center w-full ">
          <span className="flex justify-start w-full mx-auto  ">
            <Link to={"/"} onClick={gototop}>
              <LazyLoadImage
                src={
                  images &&
                  images.acf &&
                  images.acf.logo.header_logo &&
                  images.acf.logo.header_logo.url
                }
                alt=""
                className="w-14 h-14 cursor-pointer scale-125 "
                effect="blur"
              />
            </Link>
          </span>
          <ul className="md:flex  gap-[19px]   w-full cursor-pointer  hidden left-0 ">
            <Link to="/" onClick={gototop}>
              <li
                className={`text-sm md:hover:text-black  ${
                  isActivePage("/")
                    ? "text-black underline-offset-8 underline font-semibold"
                    : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/aboutus" onClick={gototop}>
              <li
                className={`text-sm md:hover:text-black ${
                  isActivePage("/aboutus")
                    ? "text-black underline-offset-8 underline font-semibold"
                    : ""
                }`}
              >
                About us
              </li>
            </Link>
            <Link to="/career" onClick={gototop}>
              <li
                className={`text-sm md:hover:text-black ${
                  isActivePage("/career")
                    ? "text-black underline-offset-8 underline font-semibold"
                    : ""
                }`}
              >
                Career
              </li>
            </Link>

            <li
              className="text-base md:hover:text-black"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={dropdownshow}
            >
              <p className="text-sm  flex items-center">
                Portfolio
                <span className="pl-1">
                  {" "}
                  {isHovered ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </p>
              {isHovered && showDropdown ? (
                <ul className="decoration-transparent absolute border text-white bg-gray-500  pt-1">
                  <Link to="/ourservice/wordpress" onClick={gototop}>
                    <li
                      className={`hover:text-black hover:bg-gray-200 py-2 px-4 ${
                        isActivePage("/ourservice/wordpress")
                          ? "text-black  font-semibold "
                          : ""
                      }`}
                    >
                      WordPress <br /> Development
                    </li>
                  </Link>

                  <Link to="/ourservice/shopify" onClick={gototop}>
                    <li
                      className={`hover:text-black hover:bg-gray-200 py-2 px-4 ${
                        isActivePage("/ourservice/shopify")
                          ? "text-black font-semibold "
                          : ""
                      }`}
                    >
                      Shopify <br /> Development
                    </li>
                  </Link>
                  <Link to="/ourservice/animation" onClick={gototop}>
                    <li
                      className={`hover:text-black hover:bg-gray-200 py-2 px-4 ${
                        isActivePage("/ourservice/animation")
                          ? "text-black  font-semibold  "
                          : ""
                      }`}
                    >
                      Animated Video
                    </li>
                  </Link>

                  <Link to="/ourservice/graphic" onClick={gototop}>
                    <li
                      className={`hover:text-black hover:bg-gray-200 py-2 px-4 ${
                        isActivePage("/ourservice/graphic")
                          ? "text-black  font-semibold  "
                          : ""
                      }`}
                    >
                      Graphic Designing
                    </li>
                  </Link>
                </ul>
              ) : null}
            </li>

            <Link to="/contact-us" onClick={gototop}>
              <li
                className={`text-sm md:hover:text-black ${
                  isActivePage("/contact-us")
                    ? "text-black underline-offset-8 underline font-semibold"
                    : ""
                }`}
              >
                Contact Us
              </li>
            </Link>
            <Link to="/testimonial" onClick={gototop}>
              <li
                className={`text-sm md:hover:text-black ${
                  isActivePage("/testimonial")
                    ? "text-black underline-offset-8 underline font-semibold"
                    : ""
                }`}
              >
                Testimonial
              </li>
            </Link>
            {/* <Link to="/blog" onClick={gototop}>
              <li
                className={`text-sm md:hover:text-black ${
                  isActivePage("/blog")
                    ? "text-black underline-offset-8 underline font-semibold"
                    : ""
                }`}
              >
                Blog
              </li>
            </Link> */}
          </ul>
          <div className="  md:hidden mx-auto ">
            <button onClick={toggleopen}>
              {isOpen ? (
                <AiOutlineClose className="text-2xl  " />
              ) : (
                <FaBars className="text-2xl  " />
              )}
            </button>

            {isOpen && (
              <ul className=" left-5  flex-wrap absolute cursor-pointer w-[90%]   z-10 bg-white mt-7 animate-fadeIn border-t-2 border-gray-500  shadow-lg">
                <Link to="/" onClick={closenav}>
                  {" "}
                  <li
                    className={`text-md p-4 shadow-slate-50 shadow hover:text-black hover:bg-slate-50 text-start pl-10 ${
                      isActivePage("/") ? "text-black bg-gray-200 " : ""
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/aboutus" onClick={closenav}>
                  {" "}
                  <li
                    className={`text-md p-4 shadow-slate-50 shadow hover:text-black hover:bg-slate-50 text-start pl-10 ${
                      isActivePage("/aboutus") ? "text-black bg-gray-200 " : ""
                    }`}
                  >
                    About us
                  </li>
                </Link>
                <Link to="/career" onClick={closenav}>
                  {" "}
                  <li
                    className={`text-md p-4 shadow-slate-50 shadow hover:text-black hover:bg-slate-50 text-start pl-10 ${
                      isActivePage("/career") ? "text-black bg-gray-200 " : ""
                    }`}
                  >
                    Career
                  </li>{" "}
                </Link>{" "}
                <li
                  className="text-md p-4 shadow-slate-50 shadow md:hover:text-black   pl-10 border-gray-100   "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={dropdownshow}
                >
                  <p className="flex items-center ">Portfolio</p>

                  <ul className="decoration-transparent  hover:text-black hover:bg-slate-50  pt-1">
                    <Link to="/ourservice/wordpress" onClick={gototop}>
                      <li
                        className={`hover:text-black hover:bg-gray-200 py-2 px-4 shadow-slate-50 shadow  ${
                          isActivePage("/ourservice/wordpress")
                            ? "text-black bg-gray-200 "
                            : ""
                        }`}
                      >
                        WordPress Development
                      </li>
                    </Link>

                    <Link to="/ourservice/shopify" onClick={gototop}>
                      <li
                        className={`hover:text-black hover:bg-gray-200 py-2 px-4 shadow-slate-50 shadow ${
                          isActivePage("/ourservice/shopify")
                            ? "text-black bg-gray-200 "
                            : ""
                        }`}
                      >
                        Shopify Development
                      </li>
                    </Link>
                    <Link to="/ourservice/animation" onClick={gototop}>
                      <li
                        className={`hover:text-black hover:bg-gray-200 py-2 px-4 shadow-slate-50 shadow ${
                          isActivePage("/ourservice/animation")
                            ? "text-black bg-gray-200  "
                            : ""
                        }`}
                      >
                        Animated Video
                      </li>
                    </Link>

                    <Link to="/ourservice/graphic" onClick={gototop}>
                      <li
                        className={`hover:text-black hover:bg-gray-200 py-2 px-4 shadow-slate-50 shadow ${
                          isActivePage("/ourservice/graphic")
                            ? "text-black bg-gray-200  "
                            : ""
                        }`}
                      >
                        Graphic Designing
                      </li>
                    </Link>
                  </ul>
                </li>
                <Link to="/contact-us" onClick={closenav}>
                  {" "}
                  <li
                    className={`text-md p-4 shadow-slate-50 shadow hover:text-black hover:bg-slate-50 text-start pl-10  ${
                      isActivePage("/contact-us")
                        ? "text-black bg-gray-200 "
                        : ""
                    }`}
                  >
                    Contact us
                  </li>{" "}
                </Link>
                <Link to="/testimonial" onClick={closenav}>
                  {" "}
                  <li
                    className={`text-md p-4 shadow-slate-50 shadow hover:text-black hover:bg-slate-50 text-start pl-10  ${
                      isActivePage("/testimonial")
                        ? "text-black bg-gray-200 "
                        : ""
                    }`}
                  >
                    Testimonial
                  </li>{" "}
                </Link>
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
