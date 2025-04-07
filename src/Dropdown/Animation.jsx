import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../Asserts/NXS-infotech-icon.png";

const LoadingSpinner = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin">
      <img src={logo} alt="" />
    </div>
  </div>
);

const Animation = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="w-[80%] max-w-screen-xl mx-auto  mt-20 mb-16">
        <h1 className="text-4xl font-extrabold p-10">Animation Development</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
          {" "}
          {images.acf.ani_video.map((image, index) => (
            <div key={index} className="border border-black h-auto  pb-5">
              <video controls>
                <source src={image.video.url} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Animation;
