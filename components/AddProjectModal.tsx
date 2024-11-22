"use client"
import React, { useState } from 'react'

const AddProjectModal = () => {
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
       className="bg-slate-950 text-white  w-[200px] h-[40px] rounded-md"
       onClick={handleOpenModal}
     >
       Add Project
     </button>
     {isModelOpen && (
       <div className="bg-black fixed border-2  inset-0  bg-opacity-50 flex justify-center items-center">
         <div className="bg-white w-[400px] rounded-md   relative">
           <button
             className="absolute right-2 top-2"
             onClick={handleCloseModal}
           >
             X
           </button>

           <div>
             <p className="mt-4 items-center font-bold text-lg flex justify-center ">
               Add Project
             </p>
           </div>

           <form className="flex flex-col gap-2">
             <p className=" mx-3">name</p>
             <input type="text" placeholder="name" className=" h-10  mx-3 " />
             <p className=" mx-3">Details</p>
             <input type="text" placeholder="details" className=" h-10 mx-3" />
             <p className=" mx-3">Status</p>
             <select className="h-10 border border-gray-300 rounded-md mx-3 p-2">
               <option value="not started">not started</option>
               <option value=" in progess"> in progess</option>
               <option value="Completed">Completed</option>
             </select>
             <p className=" mx-3">Client</p>
             <select className="h-10 border border-gray-300 rounded-md mx-3 p-2">
               <option value="not started">Jhone down</option>
             </select>
             <button className="bg-black text-white  rounded-md mx-10 h-10 mb-4">
               Submit
             </button>
           </form>
         </div>
       </div>
     )}
   </>
 );
}

export default AddProjectModal
