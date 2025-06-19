import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../Asserts/NXS-infotech-icon.png";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LoadingSpinner = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin">
      <img src={logo} alt="" />
    </div>
  </div>
);

const Shopify = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleRows, setVisibleRows] = useState(8);
  //function calling

  const handleLoadMore = () => {
    // Increase the number of rows to display by 2
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 8);
  };
  const getImageSource = (index) =>
    images?.acf?.Shopify_images[index]?.image?.url || "";
  useEffect(() => {
    let url = `https://nxsinfotech.com/server/wp-json/acf/v2/options`;
    axios
      .get(url)
      .then((res) => {
        setImages(res.data);
        setIsLoading(false);
        // console.log("images:", res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="h-auto w-full">
      <div className="w-[80%] max-w-screen-xl mx-auto  mt-20 mb-10">
        <h1 className="text-4xl font-extrabold p-10">Shopify Development</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`md:grid grid-cols-4 gap-10 animate-fade-in duration-1000  ${
            visibleRows > 8 ? "" : "opacity-100"
          }`}
        >
          {images.acf.Shopify_images.slice(0, visibleRows).map(
            (image, index) => (
              <div
                key={index}
                className="border border-black h-auto pb-5 md:mt-0 mt-5 animate-fade-in duration-1000 text-center"
              >
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <LazyLoadImage
                    className="object-cover pt-4 w-full h-full"
                    src={getImageSource(index)}
                    alt=""
                    effect="blur"
                  />
                  <p className="text-center text-xl pt-3">{image.title}</p>
                </a>
              </div>
            )
          )}
        </motion.div>
        {images.acf.Shopify_images.length > visibleRows && (
          <div className="w-full  flex justify-center  ">
            <button
              className="mt-4 p-2 bg-black hover:bg-gray-700 font-bold text-white"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shopify;
