import React, { useEffect, useState } from "react";
import career from "../Asserts/banner.jpg";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import axios from "axios";
import logo1 from "../Asserts/NXS-infotech-icon.png";
import Career_Form from "./Career_Form";

const Shopify_development = () => {
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
    <section>
      <div
        className=" relative bg-local bg-cover lg:h-[1000px] h-auto  "
        style={{
          backgroundImage: `url(${career})`,
        }}
      >
        <div className="overlay h-auto"></div>

        <p className="text-4xl font-extrabold text-black text-center  pt-10 relative z-10">
          Shopify Developer
        </p>
        <p className=" text-3xl font-semibold text-center  mt-5 relative z-10">
          Surat
        </p>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1  mx-auto mt-5 w-[80%]  lg:h-[800px] h-auto bg-white relative z-10 mb-10 ">
            <div>
              <ul className="p-10  ">
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[0] &&
                    data.acf.shopify[0].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[1] &&
                    data.acf.shopify[1].req}
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
                    data.acf.shopify[2] &&
                    data.acf.shopify[2].req}
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
                    data.acf.shopify[3] &&
                    data.acf.shopify[3].req}
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
                    data.acf.shopify[4] &&
                    data.acf.shopify[4].req}
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
                    data.acf.shopify[5] &&
                    data.acf.shopify[5].req}
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
                    data.acf.shopify[6] &&
                    data.acf.shopify[6].req}
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
                    data.acf.shopify[7] &&
                    data.acf.shopify[7].req}
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
                    data.acf.shopify[8] &&
                    data.acf.shopify[8].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[9] &&
                    data.acf.shopify[9].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[10] &&
                    data.acf.shopify[10].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[11] &&
                    data.acf.shopify[11].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[12] &&
                    data.acf.shopify[12].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[13] &&
                    data.acf.shopify[13].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[14] &&
                    data.acf.shopify[14].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[15] &&
                    data.acf.shopify[15].req}
                </li>
                <li className="flex  text-lg mt-5 gap-1">
                  <span className="pt-[2px]">
                    <TbArrowBadgeRightFilled size={22} />
                  </span>
                  {data &&
                    data.acf &&
                    data.acf.shopify[16] &&
                    data.acf.shopify[16].req}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Career_Form />
    </section>
  );
};

export default Shopify_development;
