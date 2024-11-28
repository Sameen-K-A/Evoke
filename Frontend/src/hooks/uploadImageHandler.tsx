import { useState, useRef } from "react";

const useUploadImageHandler = () => {
   const [files, setFiles] = useState<File[]>([]);
   const [selectedImage, setSelectedImage] = useState<File | null>(null);
   const inputRef = useRef<HTMLInputElement>(null);
   const selectedImageRef = useRef<HTMLDivElement>(null);

   //important=> Open input file
   const handleUploadClick = () => {
      inputRef.current?.click();
   };

   //important=> handle file onchange, keep previous files and concat previous and new one return a new array
   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
         const newFiles = Array.from(event.target.files);
         setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
   };

   //important=> Handle remove file from already selected files array
   const handleRemoveFile = (index: number) => {
      const fileToRemove = files[index];
      setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));

      if (selectedImage === fileToRemove) {
         setSelectedImage(null);
      }
   };

   //important=> Select one image for display modificaiton section like cropping and image name changing
   const handleSelectedImageClick = (file: File) => {
      setSelectedImage(file);
      if (!selectedImage) {
         setTimeout(() => {
            selectedImageRef.current?.scrollIntoView({ behavior: "smooth" });
         }, 100);
      }
   };

   //important=> close selected image ( modification file section )
   const handleCloseSelectedImage = () => {
      setSelectedImage(null);
   };

   //important=> save modification of selected image like name and cropping and updated selectedImage and files states
   const changeSelectedImage = (newImage: File) => {
      setSelectedImage(newImage);
      setFiles((prevFiles) =>
         prevFiles.map((file) =>
            file === selectedImage ? newImage : file
         )
      );
   };

   //important=> blob file is immutable that because create a new File instance with my new change like name and cropping then pass the new Updated file to changeSelectedImage function
   const saveModificationOfSelectedImage = (selectedImageName: string) => {
      if (selectedImage) {
         const updatedFile = new File(
            [selectedImage],
            `${selectedImageName}.${selectedImage.name.split('.').pop()}`,
            { type: selectedImage.type }
         );
         changeSelectedImage(updatedFile);
      }
      handleCloseSelectedImage();
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
      handleCloseSelectedImage,
      changeSelectedImage,
      saveModificationOfSelectedImage
   }
}

export default useUploadImageHandler;