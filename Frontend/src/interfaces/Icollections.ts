export interface MediaHeaderProps {
   view: "grid" | "table";
   setView: React.Dispatch<React.SetStateAction<"grid" | "table">>;
}

export interface MediaImageLibraryProps extends Omit<MediaHeaderProps, "setView"> { }

export interface IFile {
   id: string;
   name: string;
   path: string;
   uploadDate: string;
   uploadTime: string;
   size: string
}

export interface ImageLibraryProps {
   files: IFile[];
}

export interface ImagePreviewProps {
   selectedImage: { image: IFile, index: number }
   onClose: () => void;
   onNext: () => void;
   onPrev: () => void;
   onDelete: (index: number) => void
}

export interface IModifyImageProps {
   selectedImage: File;
   selectedImageRef: React.RefObject<HTMLDivElement>;
   handleCloseSelectedImage: () => void;
   saveModificationOfSelectedImage: (selectedImageName: string) => void;
};

export interface IUser {
   userid?: string;
   firstName: string;
   lastName: string;
   email: string;
   password?: string;
   createdAt: string;
};