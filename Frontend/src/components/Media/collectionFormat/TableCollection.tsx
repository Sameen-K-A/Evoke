import React, { useState } from "react";
import { File, ImageLibraryProps } from "@/interfaces/Icollections";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BiDialpadAlt } from "react-icons/bi";
import useImageHandler from "@/hooks/ImageHandler";
import ImagePreview from "../ImagePreview";

const TableCollections: React.FC<ImageLibraryProps> = ({ files }) => {
   const [imageFiles, setImageFiles] = useState(files);
   const { selectedImage, handleImageClick, handleClose, handleNext, handlePrev, handleDelete } = useImageHandler(files);

   const handleDragEnd = (result: any) => {
      const { source, destination } = result;
      if (!destination) return;
      const afterDrag = imageFiles;
      const [removed] = afterDrag.splice(source.index, 1);
      afterDrag.splice(destination.index, 0, removed);
      setImageFiles(afterDrag);
   };

   return (
      <div className="overflow-x-auto">
         <table className="w-full border-collapse table-auto">
            <thead className="bg-orange-500 bg-opacity-10 border-1 border-orange-500 border-opacity-80">
               <tr>
                  <th />
                  <th className="px-4 py-2 text-left min-w-[400px]">Name</th>
                  <th className="px-4 py-2 text-center w-[200px]">File Size</th>
                  <th className="px-4 py-2 text-center w-[200px]">Upload Date</th>
               </tr>
            </thead>
            <DragDropContext onDragEnd={handleDragEnd}>
               <Droppable droppableId="droppable" direction="vertical">
                  {(provided: any) => (
                     <tbody className="text-sm" ref={provided.innerRef}   {...provided.droppableProps}>

                        {imageFiles.map((file: File, index: number) => (
                           <Draggable key={file.id} draggableId={file.id} index={index}>
                              {(provided: any) => (
                                 <tr
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    className="border-b border-slate-900 hover:bg-orange-500 hover:bg-opacity-5"
                                 >
                                    <td>
                                       <div className="flex justify-center cursor-pointer" {...provided.dragHandleProps} >
                                          <BiDialpadAlt fill="orange" />
                                       </div>
                                    </td>
                                    <td className="px-4 py-2 flex items-center space-x-2 cursor-pointer" onClick={() => handleImageClick(index)}>
                                       <img
                                          src={file.path}
                                          alt={file.name}
                                          className="w-12 h-12 object-cover"
                                       />
                                       <span>{file.name}</span>
                                    </td>
                                    <td className="px-4 py-2 text-center w-[200px]">{file.size}</td>
                                    <td className="px-4 py-2 text-center w-[200px]">{file.uploadDate}, {file.uploadTime}</td>
                                 </tr>
                              )}
                           </Draggable>
                        ))}
                        {provided.placeholder}
                     </tbody>
                  )}
               </Droppable>
            </DragDropContext>
         </table>

         {selectedImage && (
            <ImagePreview selectedImage={selectedImage} onClose={handleClose} onNext={handleNext} onPrev={handlePrev} onDelete={handleDelete} />
         )}
      </div>
   );
};

export default TableCollections;