"use client";
import React, { useState } from "react";

const AddClientModal = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModelOpen(true);
  };
  const handleCloseModal = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <button
        className="bg-slate-700 text-white  w-[200px] h-[40px] rounded-md"
        onClick={handleOpenModal}
      >
        Add Client
      </button>
      {isModelOpen && (
        <div className="bg-black fixed border-2  inset-0  bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[400px] rounded-md h-[300px]  relative">
            <button className="absolute right-2 top-2" onClick={handleCloseModal}>X</button>

            <div>
              <p className="mt-4 items-center font-bold text-lg flex justify-center ">
                Add Client
              </p>
            </div>

            <form className="flex flex-col gap-5">
              <input type="text" placeholder="name" className=" h-10  mx-3 " />
              <input type="email" placeholder="email" className=" h-10 mx-3" />
              <input
                type="number"
                placeholder="Phone Number"
                className="h-10 mx-3"
              />
              <button className="bg-black text-white  rounded-md mx-10 h-10">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddClientModal;
