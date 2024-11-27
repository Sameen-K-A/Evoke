import React from "react";
import GridCollection from "./collectionFormat/GridCollection";
import TableCollections from "./collectionFormat/TableCollection";
import files from "../../constants/sampleImageFile";
import { MediaImageLibraryProps } from "@/interfaces/Icollections";

const ImagesLibrary: React.FC<MediaImageLibraryProps> = ({ view }) => {

  return view === "grid" ? (
    <GridCollection files={files} />
  ) : (
    <TableCollections files={files} />
  );
};

export default ImagesLibrary;