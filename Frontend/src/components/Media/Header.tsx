import { IoGrid, IoGridOutline } from "react-icons/io5";
import { MdTableRows, MdOutlineTableRows } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { MediaHeaderProps } from "@/interfaces/Icollections";
import { useState } from "react";
import ImageUploader from "./imageUpload/UploadModal";
import { useTheme } from "@/context/ThemeContext";

const MediaHeader: React.FC<MediaHeaderProps> = ({ view, setView }) => {

   const { theme } = useTheme();
   const [imageUploadModal, setImageUploadModal] = useState(false);

   return (
      <>
         <div className="flex justify-end items-center mb-4">
            <div className="flex items-center space-x-2">
               <div className={`flex items-center rounded hover:bg-opacity-0 transition-all ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-300"}`}>
                  <button onClick={() => setView("grid")} className="ms-3 my-2">
                     {view === "grid" ? <IoGrid size={22} className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} /> : <IoGridOutline size={22} className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} />}
                  </button>
                  <button onClick={() => setView("table")} className="mx-2 me-3">
                     {view === "table" ? <MdTableRows size={25} className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} /> : <MdOutlineTableRows size={25} className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} />}
                  </button>
               </div>

               <Button
                  className={`px-3 py-1 rounded border-orange-500 border-1 ${theme === "light" ? "hover:bg-white" : "hover:bg-gray-900"}`}
                  onClick={() => setImageUploadModal(true)}>
                  Upload Image
               </Button>
            </div>
         </div>
         {imageUploadModal && <ImageUploader onClose={() => setImageUploadModal(false)} />}
      </>
   );
};

export default MediaHeader;