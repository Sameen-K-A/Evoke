import React from 'react';
import image3 from "../../public/images/hero3.jpg";
import image2 from "../../public/images/hero2.jpg";
import image1 from "../../public/images/hero1.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';

const Hero: React.FC = () => {

   const navigate = useNavigate();
   const { theme } = useTheme();

   return (
      <section className="text-center py-16 px-6 relative overflow-hidden  mt-16">
         <p className="text-xs uppercase tracking-widest mb-4 inline-block bg-transparent border-l border-r border-orange-500 px-4 py-2 rounded-lg">
            Your Personal Image Gallery
         </p>
         <h2 className="text-4xl font-extrabold mb-4">
            Organize with <span className="text-orange-500">Evoke</span>. Edit. Elevate. <br /> Your Moments, Your Way.
         </h2>
         <p className="text-gray-400 text-sm leading-relaxed mb-6 mx-auto">
            Manage your photos effortlessly with Evoke. Upload, edit, and organize your memories—all in one place.
         </p>

         <div className="flex justify-center gap-5 mt-12 relative items-end">
            <div className="w-40 h-72 rounded-t-full overflow-hidden  transform rotate-[-10deg] relative transition-transform duration-300 ease-in-out hover:scale-105">
               <div className={`absolute bottom-0 left-0 w-full h-1/2 ${theme === "dark" ? "bg-gradient-to-t from-black to-transparent" : "bg-gradient-to-t from-white to-transparent"}`} />
               <img src={image1} className={`w-full h-full object-cover ${theme === "dark" ? "border-1 border-black" : "border-1 border-white"}`} />
            </div>

            <div className="w-40 h-80 rounded-t-full z-10 overflow-hidden relative transition-transform duration-300 ease-in-out hover:scale-105">
               <div className={`absolute bottom-0 left-0 w-full h-1/2 ${theme === "dark" ? "bg-gradient-to-t from-black to-transparent" : "bg-gradient-to-t from-white to-transparent"}`} />
               <img src={image2} className={`w-full h-full object-cover ${theme === "dark" ? "border-1 border-black" : "border-1 border-white"}`} />
            </div>

            <div className="w-40 h-72 rounded-t-full overflow-hidden transform rotate-[10deg] relative transition-transform duration-300 ease-in-out hover:scale-105">
               <div className={`absolute bottom-0 left-0 w-full h-1/2 ${theme === "dark" ? "bg-gradient-to-t from-black to-transparent" : "bg-gradient-to-t from-white to-transparent"}`} />
               <img src={image3} className={`w-full h-full object-cover ${theme === "dark" ? "border-1 border-black" : "border-1 border-white"}`} />
            </div>
         </div>

         <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 px-56 ${theme === "dark" ? "bg-gradient-to-t from-black to-transparent" : "bg-gradient-to-t from-white to-transparent"}`}>
            <button
               className="flex items-center justify-center gap-2 px-6 py-2 bg-orange-500 border-2 border-transparent rounded-full transition-all duration-200 hover:bg-orange-400 active:scale-95"
               onClick={() => navigate("/collections")}
            >
               <span className='text-black'>Explore</span>
               <BsArrowRightCircle className='transition-transform duration-300 ease-in-out hover:translate-x-1' fill='black' size={25} />
            </button>
         </div>
      </section>
   );
};

export default Hero;