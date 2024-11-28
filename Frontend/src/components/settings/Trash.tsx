import files from "@/constants/sampleImageFile";
import { useTheme } from "@/context/ThemeContext";
import { IFile } from "@/interfaces/Icollections";

const Trash = () => {

   const justSample: IFile[] = files.slice(0, 9);
   const { theme } = useTheme();

   return (
      <div className="flex flex-col items-center justify-center w-full space-y-10 mt-12">
         <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold tracking-tight font-p">Recently deleted</h2>
         </div>
         <div className="flex flex-wrap gap-4 justify-center">
            {justSample.map((file: IFile) => (
               <div
                  key={file.id}
                  className="rounded overflow-hidden flex flex-col items-center">
                  <img
                     src={file.path}
                     alt={file.name}
                     className="h-20 w-20 sm:h-20 sm:w-20 lg:h-40 lg:w-40 bg-gray-200 flex items-center justify-center object-cover hover:opacity-65 transition cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center truncate">
                     {file.name.length > 10 ? file.name.substring(0, 10) + "..." : file.name}
                  </p>
               </div>
            ))}
         </div>
         <div className={`text-center bottom-3 fixed ${theme === "dark" ? "bg-black/30": "bg-white/30"} backdrop-blur-md rounded-lg p-4 w-full`}>
            <p>9 Photos</p>
            <p className="text-xs">
               Photo shows the days remaining before deletion. After that time, items will be permanently deleted after 30 days.
            </p>
         </div>
      </div>
   );
};

export default Trash;