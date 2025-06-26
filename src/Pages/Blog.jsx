import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../Asserts/NXS-infotech-icon.png";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

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
      <motion.section
        initial={{ y: 100 }}
        animate={{ transition: { duration: 0.5 }, y: -10 }}
        exit={{ y: -100 }}
        className="mx-auto h-auto  w-[80%] mt-20  max-w-screen-xl  "
      >
        <div className=" md:w-[60%] max-w-screen-xl mx-auto w-auto mt-20">
          <h1 className="text-4xl font-extrabold text-center ">
            From the blog
          </h1>{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  h-auto justify-center items-center gap-5 ">
          <div className="bg-amber-100 rounded-2xl ">
            <div>
              <LazyLoadImage
                effect="blur"
                src={
                  images && images.acf && images.acf.blog && images.acf.blog.url
                }
                alt=""
                // placeholderSrc={blurimage}
                className="rounded-2xl p-4"
              />
              <div className="p-4 ">
                <span className="bg-gray-200 p-2 rounded-2xl text-xs">
                  Mar 16, 2020
                </span>
                <span className="ml-2 bg-gray-200 p-2 rounded-2xl text-xs">
                  Marketing
                </span>
              </div>
            </div>
            <p className="font-bold text-2xl p-4">
              Boost you conversation rate
            </p>
            <p className="p-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div>
              <img
                src={
                  images && images.acf && images.acf.blog && images.acf.blog.url
                }
                alt=""
                className="block w-16 h-16 mb-36  border rounded-full"
              />
              <div>
                <p>Michael Foster</p>
                <p>Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="bg-grey-800 rounded-2xl">
            <div>
              <LazyLoadImage
                effect="blur"
                src={
                  images && images.acf && images.acf.blog && images.acf.blog.url
                }
                alt=""
                // placeholderSrc={blurimage}
                className="rounded-2xl"
              />
              <div className="p-4 ">
                <span className="bg-gray-200 p-2 rounded-2xl text-xs">
                  Mar 16, 2020
                </span>
                <span className="ml-2 bg-gray-200 p-2 rounded-2xl text-xs">
                  Marketing
                </span>
              </div>
            </div>
            <p className="p-2 font-bold text-2xl">
              Boost you conversation rate
            </p>
            <p className="p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div>
              <img
                src={
                  images && images.acf && images.acf.blog && images.acf.blog.url
                }
                alt=""
                className="block w-16 h-16 mb-36  border rounded-full"
              />
              <div>
                <p>Michael Foster</p>
                <p>Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="bg-grey-800 rounded-2xl">
            <div>
              <LazyLoadImage
                effect="blur"
                src={
                  images && images.acf && images.acf.blog && images.acf.blog.url
                }
                alt=""
                // placeholderSrc={blurimage}
                className="rounded-2xl"
              />
              <div className="p-4 ">
                <span className="bg-gray-200 p-2 rounded-2xl text-xs">
                  Mar 16, 2020
                </span>
                <span className="ml-2 bg-gray-200 p-2 rounded-2xl text-xs">
                  Marketing
                </span>
              </div>
            </div>
            <p className="p-2 font-bold text-2xl">
              Boost you conversation rate
            </p>
            <p className="p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div>
              <img
                src={
                  images && images.acf && images.acf.blog && images.acf.blog.url
                }
                alt=""
                className="block w-16 h-16 mb-36  border rounded-full"
              />
              <div>
                <p>Michael Foster</p>
                <p>Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
