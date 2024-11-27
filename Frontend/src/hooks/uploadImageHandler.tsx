import { useState, useRef } from "react";

const useUploadImageHandler = () => {
   const [files, setFiles] = useState<File[]>([]);
   const [selectedImage, setSelectedImage] = useState<File | null>(null);
   const inputRef = useRef<HTMLInputElement>(null);
   const selectedImageRef = useRef<HTMLDivElement>(null);

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
         const newFiles = Array.from(event.target.files);
         setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
   };

   const handleUploadClick = () => {
      inputRef.current?.click();
   };

   const handleRemoveFile = (index: number) => {
      const fileToRemove = files[index];
      setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));

      if (selectedImage === fileToRemove) {
         setSelectedImage(null);
      }
   };

   const handleSelectedImageClick = (file: File) => {
      setSelectedImage(file);
      setTimeout(() => {
         selectedImageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
   };

   const handleCloseSelectedImage = () => {
      setSelectedImage(null);
   };

   return {
      files,
      selectedImage,
      inputRef,
      selectedImageRef,
      handleFileChange,
      handleUploadClick,
      handleRemoveFile,
      handleSelectedImageClick,
      handleCloseSelectedImage
   }
}

export default useUploadImageHandler;