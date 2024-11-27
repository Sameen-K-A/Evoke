import { useTheme } from "@/context/ThemeContext";
import { FaTimes } from "react-icons/fa";

function DisplayUploadImages({ files, handleRemoveFile, handleSelectedImageClick }: { files: File[]; handleRemoveFile: (index: number) => void; handleSelectedImageClick: (file: File) => void; }) {
   const { theme } = useTheme();

   return (
      <div className="mt-8 overflow-x-auto">
         <div className="flex space-x-4 pb-4 min-w-max">
            {files.map((file, index) => (
               <div key={index} className="relative">
                  <img
                     src={URL.createObjectURL(file)}
                     alt={`Uploaded ${index + 1}`}
                     className="h-24 w-24 object-cover rounded-lg cursor-pointer hover:opacity-70"
                     onClick={() => handleSelectedImageClick(file)}
                  />
                  <button
                     onClick={() => handleRemoveFile(index)}
                     className={`absolute top-1 right-1 ${theme === "dark" ? " bg-black" : "bg-white"} rounded-full p-1`}
                  >
                     <FaTimes size={10} />
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
}

export default DisplayUploadImages;