import useUploadImageHandler from "@/hooks/uploadImageHandler";
import { Button } from "@nextui-org/react";
import { FaImage, FaUpload, FaTimes } from "react-icons/fa";
import DisplayUploadImages from "./DispayFile";
import ModifyImage from "./ModifyImage";
import { useTheme } from "@/context/ThemeContext";

function ImageUploader({ onClose }: { onClose: () => void }) {
   const { files, inputRef, selectedImage, selectedImageRef, handleFileChange, handleUploadClick, handleRemoveFile, handleSelectedImageClick, handleCloseSelectedImage } = useUploadImageHandler();
   const { theme } = useTheme();

   return (
      <div className={`fixed inset-0 flex items-center justify-center ${theme === "dark" ? "bg-black/50" : "bg-white/50"} backdrop-blur-md`}>
         <div className={`relative w-full max-w-2xl mx-auto max-h-[80vh] p-6 ${theme === "dark" ? "bg-black" : "bg-white"} rounded-lg overflow-y-auto border-1 border-orange-900`}>

            <Button onClick={onClose} className="absolute top-1 right-1 bg-transparent p-2 hover:bg-red-700 transition-colors" size="sm">
               <FaTimes />
            </Button>

            <div className="text-center space-y-4">
               <h2 className="text-2xl font-semibold tracking-tight font-p">Upload images</h2>
               <p className="text-sm text-muted-foreground">Click the button below to upload your images.</p>
            </div>

            <div className="mt-8 p-12 border-2 border-dashed rounded-lg border-gray-700 hover:border-gray-500 transition-colors duration-200">
               <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className={`p-4 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}>
                     <FaImage className="h-12 w-12 text-gray-400" />
                  </div>
                  <div>
                     <input
                        type="file"
                        ref={inputRef}
                        onChange={handleFileChange}
                        hidden
                        multiple
                        accept="image/*"
                     />
                     <Button
                        className={`px-4 py-2 ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"} rounded-md transition-colors duration-200 flex items-center space-x-2`}
                        onClick={handleUploadClick}
                     >
                        <FaUpload size={20} />
                        <span className="font-p">Click to upload images</span>
                     </Button>
                  </div>
                  <p className="text-sm text-gray-400">Supported formats: JPG, PNG, GIF</p>
               </div>
            </div>

            {files.length > 0 && (
               <DisplayUploadImages
                  files={files}
                  handleRemoveFile={handleRemoveFile}
                  handleSelectedImageClick={handleSelectedImageClick}
               />
            )}
            {selectedImage && (
               <ModifyImage
                  selectedImage={selectedImage}
                  selectedImageRef={selectedImageRef}
                  handleCloseSelectedImage={handleCloseSelectedImage}
               />
            )}
         </div>
      </div>
   );
}

export default ImageUploader;