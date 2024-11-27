import { ImageLibraryProps, File } from "../../../interfaces/Icollections";
import ImagePreview from "../ImagePreview";
import useImageHandler from "@/hooks/ImageHandler";

const GridCollection: React.FC<ImageLibraryProps> = ({ files }) => {

  const { selectedImage, handleImageClick, handleClose, handleNext, handlePrev, handleDelete } = useImageHandler(files);

  const groupedFiles = files.reduce((groups, file) => {
    const date = file.uploadDate;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(file);
    return groups;
  }, {} as Record<string, File[]>);

  return (
    <div>
      {Object.keys(groupedFiles).map((date) => (
        <div key={date}>
          <p className="text-medium text-white mt-4 mb-2">{date}</p>
          <div className="flex gap-4 flex-wrap">
            {groupedFiles[date].map((file: File, index) => (
              <div
                key={file.id}
                className="rounded overflow-hidden flex flex-col items-center"
                onClick={() => handleImageClick(index)}>
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
        </div>
      ))}

      {selectedImage && (
        <ImagePreview selectedImage={selectedImage} onClose={handleClose} onNext={handleNext} onPrev={handlePrev} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default GridCollection;
