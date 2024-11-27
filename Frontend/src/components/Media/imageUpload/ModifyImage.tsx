import { useState } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Button } from '@nextui-org/react';

function ModifyImage({
   selectedImage,
   selectedImageRef,
   handleCloseSelectedImage
}: {
   selectedImage: File | null;
   selectedImageRef: React.RefObject<HTMLDivElement>;
   handleCloseSelectedImage: () => void;
}) {
   const [crop, setCrop] = useState<Crop>({
      unit: '%',
      width: 100,
      height: 100,
      x: 0,
      y: 0,
   });
   const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);

   const onCropChange = (newCrop: Crop) => {
      setCrop(newCrop);
   };

   const onCropComplete = (crop: Crop) => {
      setCompletedCrop(crop);
      console.log(completedCrop)
   };

   return (
      <div ref={selectedImageRef} className="mt-8 relative">


         <div className="w-full h-auto max-h-full overflow-hidden">
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
         <div className='flex gap-2 justify-end mt-2'>
            <Button onClick={handleCloseSelectedImage} className="border-red-500 p-1" variant='bordered' >
               Cancel
            </Button>
            <Button className="text-white p-1 bg-orange-700">
               Save croped area
            </Button>
         </div>
      </div>
   );
}

export default ModifyImage;