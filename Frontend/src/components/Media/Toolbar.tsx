import { Tooltip } from "@nextui-org/react";
import { IoCropOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { File } from "@/interfaces/Icollections";
import { useTheme } from "@/context/ThemeContext";

interface IImageToolbarProps {
   selectedImage: { image: File; index: number };
   onDelete: (index: number) => void;
}

const Toolbar: React.FC<IImageToolbarProps> = ({ selectedImage, onDelete }) => {
   const { theme } = useTheme();
   const buttonClass = `bg-transparent py-2 hover:opacity-70 ${theme === "light" && "text-black"}`;

   return (
      <div className="flex justify-center items-center space-x-6 w-full">
         <Tooltip content="Delete">
            <button className={buttonClass} onClick={() => onDelete(selectedImage.index)}>
               <AiOutlineDelete />
            </button>
         </Tooltip>

         <Tooltip content="Crop">
            <button className={buttonClass}>
               <IoCropOutline />
            </button>
         </Tooltip>
      </div>
   );
};

export default Toolbar;