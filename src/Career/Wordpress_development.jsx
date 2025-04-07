import React, { useEffect, useState } from "react";
import career from "../Asserts/banner.jpg";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import axios from "axios";
import logo1 from "../Asserts/NXS-infotech-icon.png";
import Career_Form from "./Career_Form";

const Wordpress_development = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/pages/481`;
    axios.get(url).then((res) => {
      setData(res.data);
      setIsLoading(false);
      // console.log("career:", res.data);
    });
  }, []);

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
    <section className="h-auto  w-full">
      <div
        className="relative bg-local bg-cover lg:h-[1000px] h-auto  "
        style={{
          backgroundImage: `url(${career})`,
        }}
      >
        <div className="overlay h-auto    "></div>

        <p className="text-4xl font-extrabold text-black text-center  pt-10 relative z-10">
          Wordpress Developer
        </p>
        <p className="  text-3xl font-semibold text-center  mt-5 relative z-10">
          Surat
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1   mt-5   max-w-screen-xl mx-auto  lg:h-[800px] h-auto bg-white relative z-10 mb-10 ">
          <div>
            <ul className="p-10  ">
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[0] &&
                  data.acf.wordpress_requirement[0].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[1] &&
                  data.acf.wordpress_requirement[1].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled
                    size={22}
                    className="flex items-start  "
                  />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[2] &&
                  data.acf.wordpress_requirement[2].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled
                    size={22}
                    className="flex items-start  "
                  />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[3] &&
                  data.acf.wordpress_requirement[3].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled
                    size={22}
                    className="flex items-start  "
                  />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[4] &&
                  data.acf.wordpress_requirement[4].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled
                    size={22}
                    className="flex items-start  "
                  />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[5] &&
                  data.acf.wordpress_requirement[5].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled
                    size={22}
                    className="flex items-start  "
                  />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[6] &&
                  data.acf.wordpress_requirement[6].req}
              </li>
            </ul>
          </div>
          <div>
            <ul className="p-10  ">
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[7] &&
                  data.acf.wordpress_requirement[7].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[8] &&
                  data.acf.wordpress_requirement[8].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[9] &&
                  data.acf.wordpress_requirement[9].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[10] &&
                  data.acf.wordpress_requirement[10].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[11] &&
                  data.acf.wordpress_requirement[11].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[12] &&
                  data.acf.wordpress_requirement[12].req}
              </li>
              <li className="flex  text-lg mt-5 gap-1">
                <span className="pt-[2px]">
                  <TbArrowBadgeRightFilled size={22} />
                </span>
                {data &&
                  data.acf &&
                  data.acf.wordpress_requirement[13] &&
                  data.acf.wordpress_requirement[13].req}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Career_Form />
    </section>
  );
};

export default Wordpress_development;
