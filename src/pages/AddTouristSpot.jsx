import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import contextProvider from "./../components/contextProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ScrollRestoration } from "react-router-dom";
import axios from "axios";

const AddTouristSpot = () => {
 
  const { user } = contextProvider();
  const { displayName, email } = user;
  const defaultValues = {
    displayName,
    email: email || "not-found",
    location: "",
    travelTime: "",
    totalVisitor: 0,
    description: "",
    averageCost: 0,
    travelTime: 0,
    seasonality: "",
    photoURL: "",
    countryName: "",
    spotName: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmitSpot = (data) => {

    // console.log(data);
    const spotInfo = {
      ...data,
      averageCost: parseInt(data.averageCost),
      travelTime: parseInt(data.travelTime),
      totalVisitor: parseInt(data.totalVisitor),
      displayName: displayName,
      email: email || "not-found",
    };

    console.log(spotInfo);

    axios.post("https://nova-tourism-server.vercel.app/addSpot", spotInfo).then((res) => {
      // console.log(res);
      if (res.data?.insertedId) {
        toast.success("Added Successfully");
             reset({
            ...defaultValues
        }); 
      }
    });
  };
  
  // console.log(user);
  return (
    <div className="mx-2">
      <Helmet>
        <title>Add Tourist Spot | </title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-poppins text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        Add Tourist Spot
      </h1>
      <p data-aos="fade-down" data-aos-delay={100} className="text-center text-gray-800 dark:text-gray-200">
        Fill the form to add your tourist spot.
      </p>
      <div className="max-w-7xl mx-auto">
        <div>
          <section
            data-aos="fade-down"
            data-aos-delay={300}
            className="p-6 my-10 lg:col-span-3 rounded-md text-black dark:text-gray-200 dark:bg-gray-600 bg-card"
          >
            <form
              onSubmit={handleSubmit(onSubmitSpot)}
              className="grid lg:grid-cols-2 lg:gap-3 mx-auto"
            >
              <div className="">
                <label htmlFor="spotName" className="text-sm">
                  Spot Name
                </label>
                <input
                  {...register("spotName")}
                  id="spotName"
                  type="text"
                  required={true}
                  placeholder="Ex: Koromjol"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="cname" className="text-sm">
                  Country Name
                </label>
                
                <select 
                 {...register("countryName")}
                 id="cname"
                  type="text"
                  required={true}
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  
                </select>
                {/* <input
                  {...register("countryName")}
                  id="cname"
                  type="text"
                  required={true}
                  placeholder="Ex: Bangladesh"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                /> */}
                
              </div>
              <div className="">
                <label htmlFor="location" className="text-sm">
                  Location
                </label>
                <input
                  {...register("location")}
                  id="location"
                  type="text"
                  required={true}
                  placeholder="Ex: Sundarban, Bagerhat, Khulna"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="url" className="text-sm">
                  Photo URL
                </label>
                <input
                  {...register("photoURL")}
                  id="url"
                  type="url"
                  required={true}
                  placeholder="Ex: https://www.image.com/img.jpg"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="season" className="text-sm">
                  Seasonality
                </label>
                <input
                  {...register("seasonality")}
                  id="season"
                  type="text"
                  required={true}
                  placeholder="Ex: Summar"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="cost" className="text-sm">
                  Average Cost ($)
                </label>
                <input
                  {...register("averageCost")}
                  id="cost"
                  type="number"
                  required={true}
                  placeholder="Ex: 1000"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="travel-time" className="text-sm">
                  Travel Time (in days)
                </label>
                <input
                  {...register("travelTime")}
                  id="travel-time"
                  type="number"
                  required={true}
                  placeholder="Ex: 7"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="visitors" className="text-sm">
                  Total Visitors/Year
                </label>
                <input
                  {...register("totalVisitor")}
                  id="visitors"
                  type="number"
                  required={true}
                  placeholder="Ex: 10000"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div> 
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Short Description
                </label>
                <textarea
                  {...register("description")}
                  required={true}
                  id="bio"
                  placeholder="Your description here..."
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                ></textarea>
              </div>
              <div className="">
                <label htmlFor="name" className="text-sm">
                  User Name
                </label>
                <input
                  {...register("displayName")}
                  id="name"
                  type="text"
                  disabled={true}
                  placeholder="User Name"
                  className="w-full dark:bg-gray-600 dark:placeholder:text-gray-300 dark:text-gray-400 placeholder:text-gray-700 p-2 disabled:cursor-not-allowed  rounded-md focus:ring focus:ring-opacity-75  text-gray-400 border border-gray-300"
                />
              </div>

              <div className="">
                <label htmlFor="email" className="text-sm">
                  User Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  disabled={true}
                  placeholder="User Email"
                  className="w-full dark:bg-gray-600 dark:placeholder:text-gray-700 dark:text-gray-400 placeholder:text-gray-700 p-2 disabled:cursor-not-allowed  rounded-md focus:ring focus:ring-opacity-75  text-gray-400 border border-gray-300  "
                />
              </div>
              <div className="flex justify-end py-4">
                <button className="p-2 px-4 font-poppins rounded-md text-gray-100 bg-violet-500 disabled:bg-violet-300 disabled:text-gray-400 disabled:cursor-not-allowed">
                  Add
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpot;
