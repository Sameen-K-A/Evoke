import { File } from "@/interfaces/Icollections"

interface IimgagePropertyModalProps {
   selectedImage: { image: File, index: number }
}

const ImagePropertyModal: React.FC<IimgagePropertyModalProps> = ({ selectedImage }) => {

   return (
      <>
         <p className="text-sm font-semibold mb-2">Properties</p>
         <hr className="opacity-50 mb-3" />
         <div className="text-sm space-y-2">
            <p><span className="font-bold">Name:</span> {selectedImage.image.name} </p>
            <p><span className="font-bold">Size:</span> {selectedImage.image.size} </p>
            <p><span className="font-bold">Type:</span>{" "}   {selectedImage.image.name.split(".").pop()}</p>
            <p><span className="font-bold">Date:</span> {selectedImage.image.uploadDate},{" "}    {selectedImage.image.uploadTime} </p>
            <p><span className="font-bold">Path:</span> {selectedImage.image.path}</p>
         </div>
      </>
   )
}

export default ImagePropertyModal;