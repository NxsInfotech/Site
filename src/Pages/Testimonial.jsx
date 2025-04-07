import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../Asserts/NXS-infotech-icon.png";
//icons
import { BsStarFill } from "react-icons/bs";
import { TbArrowBigUpLines } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [showButton, setShowButton] = useState(false);
  //function calling
  const gototop = () => {
    window.scrollTo(0, 0);
  };

  //fetching the data
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/acf/v2/options`;
    axios.get(url).then((res) => {
      setImages(res.data);
      setIsLoading(false);
      // console.log("images:", res.data);
    });
  }, []);
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/pages/312`;
    axios.get(url).then((res) => {
      setData1(res.data);
      setIsLoading(false);
      // console.log("dataid312:", res.data);
    });
  }, []);
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/testimonial?per_page=100`;
    axios.get(url).then((res) => {
      setData2(res.data);
      setIsLoading(false);
      // console.log("dataid420testimonial:", res.data);
    });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon =
        i <= rating ? <BsStarFill key={i} /> : <BsStarFill key={i} />;
      stars.push(starIcon);
    }
    return stars;
  };

  const renderCard = (item, index) => (
    <div className="border w-auto rounded-3xl m-3" key={index}>
      <div className="flex gap-1 p-4 items-center text-xs">
        {Array.from(
          { length: item.acf.rating && item.acf.rating.value },
          (_, starIndex) => (
            <BsStarFill key={starIndex} />
          )
        )}
      </div>
      <p
        className="px-4 text-base"
        dangerouslySetInnerHTML={{ __html: item.content.rendered }}
      ></p>
      <p
        className="px-5 py-4 text-base font-bold"
        dangerouslySetInnerHTML={{ __html: item.title.rendered }}
      ></p>
    </div>
  );
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100, delay: 0.2 }}
      ease={{ type: "linear" }}
      className=" font-poppins !scroll-smooth  "
    >
      <div className=" md:w-[60%] max-w-screen-xl mx-auto w-auto mt-20">
        <h1 className="text-4xl font-extrabold text-center ">
          {data1 && data1.title && data1.title.rendered}
        </h1>

        <p
          className="p-10 leading-7 text-lg text-gray-500"
          dangerouslySetInnerHTML={{
            __html: data1 && data1.content && data1.content.rendered,
          }}
        ></p>
      </div>

      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  w-[80%] max-w-screen-xl mx-auto  mt-10 h-auto mb-20">
        <div className="grid grid-cols-1 w-auto h-auto gap-2">
          {data2.slice(0, 6).map((item, index) => renderCard(item, index))}
        </div>
        <div className="grid grid-cols-1 w-auto h-auto gap-2">
          {data2.slice(6, 12).map((item, index) => renderCard(item, index + 6))}
        </div>
        <div className="grid grid-cols-1 w-auto h-auto gap-2">
          {data2
            .slice(12, 18)
            .map((item, index) => renderCard(item, index + 12))}
        </div>
      </section>
      {showButton && (
        <button
          className="fixed bottom-10 right-1 bg-slate-200"
          onClick={gototop}
        >
          <IoIosArrowUp size={30} />
        </button>
      )}
    </motion.div>
  );
};

export default Testimonial;
