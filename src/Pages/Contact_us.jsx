import React, { useEffect, useState } from "react";
//icons
import {
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import axios from "axios";
import logo1 from "../Asserts/NXS-infotech-icon.png";
//tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const INPUT = ({ type, required, name, id, value, onChange }) => {
  if (type === "textarea") {
    return (
      <textarea
        className="w-full p-2 border rounded-md"
        required={required}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      className="w-full p-2 border rounded-md"
      type={type}
      required={required}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
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
  },
  {
    label: "Email",
    component: INPUT,
    type: "email",
    name: "your-email",
    id: "your-email",
    required: true,
  },
  {
    label: "Message",
    component: INPUT,
    type: "textarea",
    name: "your-message",
    id: "your-message",
  },
];
const Contact_us = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [formValues, setFormValues] = useState({
    "your-name": "",
    "your-email": "",
    "your-message": "",
  });
  const [data, setData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const reqoptions = {
      method: "POST",
      body: formData,
    };

    try {
      const req = await fetch(
        "https://nxsinfotech.com/server/wp-json/contact-form-7/v1/contact-forms/1301/feedback",
        reqoptions
      );

      if (req.ok) {
        const response = await req.json();
        console.log("response", response);
        toast.success("Form submitted successfully!");
        setFormValues({
          "your-name": "",
          "your-email": "",
          "your-message": "",
        });
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
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
    let url = `https://nxsinfotech.com/server/wp-json/wp/v2/pages/285`;
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
      // setIsLoading(false);
      // console.log("images:", res.data);
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
    <div className="font-poppins h-full w-full ">
      <section className="flex justify-center items-center w-full h-auto   max-w-screen-xl mx-auto ">
        {" "}
        <div className="relative h-auto ">
          <LazyLoadImage
            srcSet={[
              `${
                images &&
                images.acf &&
                images.acf.career_development[1] &&
                images.acf.career_development[1].carrerbg.url
              } 1024w`,
              `${
                images &&
                images.acf &&
                images.acf.career_development[1] &&
                images.acf.career_development[1].carrerbg.url
              } 768w`,
              `${
                images &&
                images.acf &&
                images.acf.career_development[1] &&
                images.acf.career_development[1].carrerbg.url
              } 320w`,
            ]}
            sizes="(max-width: 1024px) 100vw, 1024px"
            alt=""
            className="object-cover  w-full h-auto lg:block md:hidden hidden"
            effect="blur"
            onLoad={handleImageLoad}
          />
          {imageLoaded && (
            <div className="lg:absolute pt-20 top-0 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-center mx-auto w-full h-auto z-10">
              <div className="h-auto w-full">
                <h1 className="text-4xl font-extrabold  text-center flex-col mx-auto">
                  Contact us
                </h1>
                <p
                  className="text-start w-full md:w-2/3 mt-10 mx-auto text-lg leading-7 text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: data && data && data.content.rendered,
                  }}
                ></p>
              </div>
              <div className="md:mt-2 mt-5 sm:mt-5  w-full h-auto  ">
                <form
                  onSubmit={handlesubmit}
                  className="w-full max-w-md mx-auto"
                >
                  {fields.map((field) => (
                    <div className="mb-4 w-full" key={field.id}>
                      <label
                        className="block text-base font-bold mb-1"
                        htmlFor={field.id}
                      >
                        {field.label}
                      </label>
                      {field.component === INPUT && (
                        <INPUT
                          type={field.type}
                          required={field.required}
                          name={field.name}
                          id={field.id}
                          value={formValues[field.name]}
                          onChange={handleChange}
                          className="w-full h-auto"
                        />
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="bg-black lg:w-auto md:w-full w-full  text-white px-24 py-4 rounded-lg hover:bg-gray-600"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className=" mt-32  ">
        <div className="md:h-[340px] h-auto max-w-screen-xl mx-auto ">
          {" "}
          <p className="text-center text-lg font-bold mt-10">
            Get in touch with us!
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-12 ">
            <div className="h-full w-auto border  rounded-3xl mb-10 border-gray-50 border-x-4 border-y-4   ">
              <div className="bg-slate-200  rounded-full w-12 h-12 flex justify-center items-center mt-10 mx-auto ">
                {" "}
                <FaPhoneAlt size={25} className="mx-auto " />
              </div>
              <p className="mt-5 text-base font-bold text-center ">
                {data &&
                  data.acf &&
                  data.acf.contact[0] &&
                  data.acf.contact[0].phone_number}
                :
              </p>
              <p className="mt-8 text-center text-base ">
                {data &&
                  data.acf &&
                  data.acf.contact[0] &&
                  data.acf.contact[0].detail1}
              </p>
              <p className="mt-3  text-center text-base ">
                {data &&
                  data.acf &&
                  data.acf.contact[0] &&
                  data.acf.contact[0].detail2}
              </p>
            </div>
            <div className="h-full w-auto border rounded-3xl  mb-10  border-gray-50 border-x-4 border-y-4 ">
              <div className="bg-slate-200  rounded-full w-12 h-12 flex justify-center items-center mt-10 mx-auto ">
                {" "}
                <FaMapMarkerAlt size={25} className="mx-auto " />
              </div>
              <p className="mt-5 font-bold text-center text-base">
                {data &&
                  data.acf &&
                  data.acf.contact[1] &&
                  data.acf.contact[1].phone_number}
              </p>
              <p className="mt-8  lg:w-56 mx-auto leading-9  text-base text-center ">
                {data &&
                  data.acf &&
                  data.acf.contact[1] &&
                  data.acf.contact[1].detail1}
              </p>
            </div>
            <div className="h-full w-[100%] border rounded-3xl  mb-10 border-gray-50 border-x-4 border-y-4  ">
              <div className="bg-slate-200  rounded-full w-12 h-12 flex justify-center items-center mt-10 mx-auto ">
                {" "}
                <MdEmail size={25} className="mx-auto " />
              </div>

              <p className="mt-5 font-bold text-center text-base">
                {" "}
                {data &&
                  data.acf &&
                  data.acf.contact[2] &&
                  data.acf.contact[2].phone_number}
              </p>
              <p className="mt-8 text-center text-base ">
                {data &&
                  data.acf &&
                  data.acf.contact[2] &&
                  data.acf.contact[2].detail1}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mt-[250px] mt-10   w-auto md:h-[600px] h-[400px]  mx-auto">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.019376029066!2d72.7775328241229!3d21.191389232175162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db590f9e553%3A0x149ac40aca75e469!2sNXS%20Infotech%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1699164434597!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0", margin: "auto" }}
          title="map"
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer"
        ></iframe>
      </section>
      <section className="py-28 mx-auto  w-full  ">
        <p className="text-center md:text-3xl text-2xl font-bold ">
          Connect with us !
        </p>
        <div className="flex items-center justify-center w-full gap-3 mt-5">
          <a
            href="https://www.instagram.com/nxs_infotech/?hl=en"
            target="_blank"
          >
            <BsInstagram size={50} />
          </a>
          <a href=" https://twitter.com/nxsinfotech?lang=en" target="_blank">
            <FaTwitterSquare size={50} />
          </a>
          <a href=" https://www.facebook.com/nxsinfotech" target="_blank">
            <FaFacebookSquare size={50} />
          </a>
          <a
            href=" https://in.linkedin.com/company/nxs-infotech"
            target="_blank"
          >
            {" "}
            <AiFillLinkedin size={50} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact_us;
