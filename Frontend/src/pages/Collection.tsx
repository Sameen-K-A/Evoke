import MediaHeader from "@/components/Media/Header";
import ImagesLibrary from "@/components/Media/ImagesLibrary";
import { useState } from "react";

const Collection = () => {
   const [view, setView] = useState<"grid" | "table">("grid");

   return (
      <div className="px-10 mt-20">
         <MediaHeader view={view} setView={setView} />
         <ImagesLibrary view={view} />
      </div>
   );
};

export default Collection;