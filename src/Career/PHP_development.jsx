import React, { useEffect, useState } from "react";
import career from "../Asserts/banner.jpg";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import axios from "axios";
import logo1 from "../Asserts/NXS-infotech-icon.png";
import Career_Form from "./Career_Form";

const PHP_development = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //function calling

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

  //return statement
  return (
    <div className="">
      <section className="h-auto w-full">
        <div
          className="relative bg-local bg-cover lg:h-[700px] h-auto "
          style={{
            backgroundImage: `url(${career})`,
          }}
        >
          <div className="overlay h-auto"></div>

          <p className="text-4xl font-extrabold text-black text-center  pt-10 relative z-10">
            Human Resource Development
          </p>
          <p className="text-white  text-3xl font-semibold text-center  mt-5 relative z-10">
            Surat
          </p>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-2  grid-cols-1  mx-auto mt-5 w-[80%]  lg:h-[500px] h-auto bg-white relative z-10 mb-10 ">
              <div>
                <ul className="p-10  ">
                  <li className="flex  text-lg mt-5 gap-1">
                    <span className="pt-[2px]">
                      <TbArrowBadgeRightFilled size={22} />
                    </span>
                    {data && data.acf && data.acf.php[0] && data.acf.php[0].req}
                  </li>
                  <li className="flex  text-lg mt-5 gap-1">
                    <span className="pt-[2px]">
                      <TbArrowBadgeRightFilled size={22} />
                    </span>
                    {data && data.acf && data.acf.php[1] && data.acf.php[1].req}
                  </li>
                  <li className="flex  text-lg mt-5 gap-1">
                    <span className="pt-[2px]">
                      <TbArrowBadgeRightFilled
                        size={22}
                        className="flex items-start  "
                      />
                    </span>
                    {data && data.acf && data.acf.php[2] && data.acf.php[2].req}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="p-10  ">
                  <li className="flex  text-lg mt-5 gap-1">
                    <span className="pt-[2px]">
                      <TbArrowBadgeRightFilled size={22} />
                    </span>
                    {data && data.acf && data.acf.php[3] && data.acf.php[3].req}
                  </li>
                  <li className="flex  text-lg mt-5 gap-1">
                    <span className="pt-[2px]">
                      <TbArrowBadgeRightFilled size={22} />
                    </span>
                    {data && data.acf && data.acf.php[4] && data.acf.php[4].req}
                  </li>
                  <li className="flex  text-lg mt-5 gap-1">
                    <span className="pt-[2px]">
                      <TbArrowBadgeRightFilled size={22} />
                    </span>
                    {data && data.acf && data.acf.php[5] && data.acf.php[5].req}
                  </li>
                  <li className="flex  text-lg mt-5 gap-1">
                    <span className="pt-[2px]">
                      <TbArrowBadgeRightFilled size={22} />
                    </span>
                    {data && data.acf && data.acf.php[6] && data.acf.php[6].req}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Career_Form />
      </section>

      <style jsx>{`
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
        }
      `}</style>
    </div>
  );
};

export default PHP_development;
