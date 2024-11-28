import { useState, useEffect } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Button, Input } from '@nextui-org/react';
import { IModifyImageProps } from '@/interfaces/Icollections';

const ModifyImage: React.FC<IModifyImageProps> = ({ selectedImage, selectedImageRef, handleCloseSelectedImage, saveModificationOfSelectedImage }) => {

   const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
   const [selectedImageName, setSelectedImageName] = useState(selectedImage?.name?.split('.').slice(0, -1).join('.') || "");
   const [crop, setCrop] = useState<Crop>({
      unit: '%',
      width: 100,
      height: 100,
      x: 0,
      y: 0,
   });

   useEffect(() => {
      selectedImage && setSelectedImageName(selectedImage.name.split('.').slice(0, -1).join('.'));
   }, [selectedImage]);

   const onCropChange = (newCrop: Crop) => {
      setCrop(newCrop);
   };

   const onCropComplete = (crop: Crop) => {
      setCompletedCrop(crop);
      console.log(completedCrop);
   };

   return (
      <div ref={selectedImageRef} className="mt-8 relative">
         <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 ms-2" >Name</label>
            <Input
               type="text"
               value={selectedImageName}
               endContent={`.${selectedImage?.name?.split('.').pop()}`}
               fullWidth
               onChange={(e) => setSelectedImageName(e.target.value)}
            />
         </div>

         <div className="w-full h-auto max-h-full overflow-hidden mt-3">
            {selectedImage && (
               <ReactCrop
                  crop={crop}
                  onChange={onCropChange}
                  onComplete={onCropComplete}
                  minWidth={100}
                  minHeight={100}
               >
                  <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="w-full h-full object-contain" />
               </ReactCrop>
            )}
         </div>

         <div className="flex gap-2 justify-end mt-2">
            <Button variant="bordered" onClick={handleCloseSelectedImage}>   Discard changes</Button>
            <Button className="bg-orange-500" onClick={() => saveModificationOfSelectedImage(selectedImageName)}>Save changes</Button>
         </div>
      </div>
   );
}

export default ModifyImage;