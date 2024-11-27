import { useEffect, useState, useCallback } from "react";
import { ImagePreviewProps } from "@/interfaces/Icollections";
import { Button } from "@nextui-org/react";
import { FaTimes } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { useTheme } from "@/context/ThemeContext";
import Toolbar from "./Toolbar";
import ImagePropertyModal from "./imagePropertyModal";

const ImagePreview: React.FC<ImagePreviewProps> = ({ selectedImage, onClose, onNext, onPrev, onDelete }) => {
   const [showUI, setShowUI] = useState(true);
   const [showProperties, setShowProperties] = useState(false);
   const { theme } = useTheme();
   
   const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
         onNext();
      } else if (e.key === "ArrowLeft") {
         onPrev();
      }
   }, [onNext, onPrev]);

   useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);

      return () => {
         window.removeEventListener("keydown", handleKeyDown);
      };
   }, [handleKeyDown]);

   return (
      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${theme === "light" ? "bg-white" : "bg-black"}`}>
         <div className="relative w-full h-full flex items-center justify-center">
            <img
               src={selectedImage.image.path}
               alt={selectedImage.image.name}
               className="max-w-full max-h-full min-w-full min-h-full object-contain cursor-pointer"
               onClick={() => {
                  setShowUI((prev) => !prev);
                  showProperties && setShowProperties(false);
               }}
            />

            <div className={`absolute top-0 w-full flex justify-between items-center bg-opacity-30 ${theme === "light" ? "bg-white" : "bg-black"} backdrop-blur-lg border border-white/10 px-4 py-2 text-white toolbar transition-all duration-300 ${showUI ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
               <p className={`text-sm ${theme === "dark" ? "text-white" : "text-black"}`}>{selectedImage.image.name}</p>
               <div className="flex items-center">
                  <div className="relative">
                     <Button onClick={() => setShowProperties(!showProperties)} className="bg-transparent hover:bg-gray-950 hover:bg-opacity-25 flex justify-center items-center" size="sm">
                        <LuInfo /><p>Info</p>
                     </Button>

                     <div className={`absolute top-full mt-3 right-0 bg-black bg-opacity-50 backdrop-blur-lg border border-white/10 rounded-lg p-4 w-64 transition-all duration-300 ${showProperties ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`} >
                        <ImagePropertyModal selectedImage={selectedImage} />
                     </div>
                  </div>

                  <Button onClick={onClose} className="bg-transparent hover:bg-gray-950 hover:bg-opacity-25 flex justify-center items-center" size="sm">
                     <FaTimes /><p>Close</p>
                  </Button>
               </div>
            </div>

            <div className={`absolute bottom-0 w-full flex justify-between items-center bg-opacity-30 ${theme === "light" ? "bg-white" : "bg-black"} backdrop-blur-lg border border-white/10 px-4 py-2 text-white toolbar transition-all duration-300 ${showUI ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}`}>
               <Toolbar onDelete={onDelete} selectedImage={selectedImage} />
            </div>

            <button
               onClick={onPrev}
               className={`absolute left-0 py-4 rounded-l-lg bg-gray-950 bg-opacity-15 hover:text-gray-300 navigate-btn transition-opacity duration-300 ${showUI ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
               <RiArrowLeftSFill size={25} />
            </button>
            <button
               onClick={onNext}
               className={`absolute right-0 py-4 rounded-r-lg bg-gray-950 bg-opacity-15 hover:text-gray-300 navigate-btn transition-opacity duration-300 ${showUI ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
               <RiArrowRightSFill size={25} />
            </button>
         </div>
      </div>
   );
};

export default ImagePreview;