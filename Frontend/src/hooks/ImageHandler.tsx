import { useState } from "react";
import { IFile } from "@/interfaces/Icollections";

const useImageHandler = (files: IFile[]) => {
   const [selectedImage, setSelectedImage] = useState<{ image: IFile, index: number } | null>(null);

   const handleImageClick = (index: number) => {
      setSelectedImage({ image: files[index], index: index })
   }

   const handleNext = () => {
      if (selectedImage) {
         const newIndex = selectedImage.index === files.length - 1 ? 0 : selectedImage.index + 1;
         setSelectedImage({ image: files[newIndex], index: newIndex });
      }
   }

   const handlePrev = () => {
      if (selectedImage) {
         const newIndex = selectedImage.index === 0 ? files.length - 1 : selectedImage.index - 1;
         setSelectedImage({ image: files[newIndex], index: newIndex });
      }
   }

   const handleClose = () => {
      setSelectedImage(null);
   }

   const handleDelete = (index: number) => {
      if (files.length > 0) {
         files.splice(index, 1);
         if (files.length === 0) {
            setSelectedImage(null);
         } else {
            const newIndex = index === files.length ? files.length - 1 : index;
            setSelectedImage({ image: files[newIndex], index: newIndex });
         }
      }
   };

   return { selectedImage, handleImageClick, handleNext, handlePrev, handleClose, handleDelete };
}

export default useImageHandler;