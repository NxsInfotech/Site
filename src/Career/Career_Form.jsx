import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
//tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import states from "../Json/states.json";

const INPUT = ({
  type,
  placeholder,
  options,
  required,
  name,
  id,
  value,
  onChange,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        className="w-full p-2 border rounded-md"
        required={required}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  } else if (type === "text") {
    return (
      <input
        className="w-full p-2 border rounded-md"
        type={type}
        required={required}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  } else if (type === "file") {
    return (
      <input
        className="w-full p-2 border rounded-md"
        type={type}
        required={required}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  } else if (type === "select") {
    return (
      <select
        className="w-full p-2 border rounded-md"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else if (type === "select") {
    return (
      <select
        className="w-full p-2 border rounded-md"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
      placeholder={placeholder}
    />
  );
};

const fields = [
  {
    label: "Name*",
    component: INPUT,
    type: "text",
    name: "your-name",
    id: "your-name",
    required: true,
    placeholder: "First Name",
  },
  {
    label: "Email*",
    component: INPUT,
    type: "text",
    name: "your-email",
    id: "your-email",
    required: true,
    placeholder: "Email",
  },

  {
    label: "Phone*",
    component: INPUT,
    type: "text",
    name: "text-254",
    id: "text-254",
    required: true,
    placeholder: "Phone",
  },
  {
    label: "Select State",
    component: INPUT,
    type: "select",
    name: "menu-400",
    id: "menu-400",
    required: true,
    options: [
      { label: "---select State ---", value: "" },
      ...states.map((state, index) => ({
        label: state.state,
        value: state.value,
      })),
    ],
  },
  {
    label: "Select City",
    component: INPUT,
    type: "select",
    name: "menu-401",
    id: "menu-401",
    required: true,
    options: [
      { label: "---select city ---", value: "" },
      ...states.map((state, index) => ({
        label: state.city,
        value: state.value,
      })),
    ],
  },
  {
    label: "Applying For*",
    component: INPUT,
    type: "select",
    name: "menu-167",
    id: "menu-167",
    required: true,
    options: [
      { label: "Front-End Developer", value: "FrontEndDeveloper" },
      { label: " WordPress Developer", value: " SrWordPressDeveloper" },
      { label: "Shopify Developer", value: "SrShopifyDeveloper" },
      { label: "Team Manager", value: "TeamManager" },
      { label: "Human Resource Manager", value: "HumanResourceManager" },
      {
        label: "Business Development Executive",
        value: "BusinessDevelopmentExecutive",
      },
    ],
  },
  {
    label: " Your Experience",
    component: INPUT,
    type: "text",
    name: "text-86",
    id: "text-86",
    required: true,
    placeholder: " Your Experience",
  },
  {
    label: "Your Current Salary Per Year ",
    component: INPUT,
    type: "text",
    name: "text-591",
    id: "text-591",
    required: true,
    placeholder: "Your Current Salary ",
  },
  {
    label: "Your Expected Salary Per Year",
    component: INPUT,
    type: "text",
    name: "text-750",
    id: "text-750",
    required: true,
    placeholder: "Your Expected Salary",
  },
  // {
  //   label: "Choose File",
  //   component: INPUT,
  //   type: "file",
  //   name: "file-414",
  //   id: "file-414",
  //   required: true,
  //   placeholder: "Choose File",
  // },

  {
    label: "Message",
    component: INPUT,
    type: "textarea",
    name: "your-message",
    id: "your-message",
    placeholder: "Message",
  },
];
const Career_Form = () => {
  const [formValues, setFormValues] = useState({
    "your-name": "",
    "your-email": "",
    "your-message": "",
    "text-254": "",
    "text-86": "",
    "text-591": "",
    "text-750": "",
    "menu-167": "",
    "menu-400": "",
    "menu-401": "",
  });
  //function calling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const gototop = () => {
    window.scrollTo(0, 0);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();

    // Create FormData object from the form
    const formData = new FormData(e.target);

    // Append unit tag to form data
    formData.append("_unit_tag", "replace_with_valid_unit_tag");

    const reqoptions = {
      method: "POST",
      body: formData,
    };

    try {
      const req = await fetch(
        "https://nxsinfotech.com/server/wp-json/contact-form-7/v1/contact-forms/1312/feedback",
        reqoptions
      );

      if (req.ok) {
        const response = await req.json();
        console.log("response", response);
        toast.success("Form submitted successfully!");
        // Clear form values after successful submission
        setFormValues({
          "your-name": "",
          "your-email": "",
          "your-message": "",
          "text-254": "",
          "text-86": "",
          "text-591": "",
          "menu-167": "",
          "menu-400": "",
          "menu-401": "",
          "text-750": "",
        });
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="w-full h-auto">
      {" "}
      <div className="w-[85%] max-w-screen-xl mx-auto  h-auto mt-10 shadow-2xl bg-white  mb-10">
        <div className="flex justify-between  w-full h-14">
          <div className="w-full flex justify-center items-center ">
            <p className=" text-3xl ">Apply Now</p>
          </div>

          <div className=" flex justify-end items-center  mr-10">
            <Link to="/career" onClick={gototop}>
              {" "}
              <button className="">
                <RxCross1 />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 w-[70%] mx-auto h-auto mb-10 ">
          <form onSubmit={handlesubmit} className="max-w-md mx-auto ">
            {fields.map((field) => (
              <div className="mb-4 " key={field.id}>
                <label
                  className="block text-sm font-bold mb-1"
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
                    placeholder={field.placeholder}
                    options={field.options}
                  />
                )}
              </div>
            ))}
            <div className="flex justify-center items-center pb-10 ">
              <button
                type="submit"
                className="py-3 px-8 hover:bg-gray-200 border-l-4 border-b-4 border-t-4 border-r-4 mt-8 rounded-md border-gray-900  text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Career_Form;
