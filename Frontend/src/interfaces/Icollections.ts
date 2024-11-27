export interface MediaHeaderProps {
   view: "grid" | "table";
   setView: React.Dispatch<React.SetStateAction<"grid" | "table">>;
}

export interface MediaImageLibraryProps extends Omit<MediaHeaderProps, "setView"> { }

export interface File {
   id: string;
   name: string;
   path: string;
   uploadDate: string;
   uploadTime: string;
   size: string
}

export interface ImageLibraryProps {
   files: File[];
}

export interface ImagePreviewProps {
   selectedImage: { image: File, index: number }
   onClose: () => void;
   onNext: () => void;
   onPrev: () => void;
   onDelete: (index: number) => void
}