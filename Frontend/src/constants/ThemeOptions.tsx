interface ThemeOption {
   id: "light" | "dark";
   label: string;
   preview: JSX.Element;
}

const themes: ThemeOption[] = [
   {
      id: "light",
      label: "Light",
      preview: (
         <div className="w-full h-full">
            <div className="space-y-2">
               <div className="h-2 w-[80%] rounded-lg bg-neutral-300" />
               <div className="h-2 w-[60%] rounded-lg bg-neutral-300" />
               <div className="h-2 w-[70%] rounded-lg bg-neutral-300" />
            </div>
         </div>
      ),
   },
   {
      id: "dark",
      label: "Dark",
      preview: (
         <div className="w-full h-full">
            <div className="space-y-2">
               <div className="h-2 w-[80%] rounded-lg bg-neutral-600" />
               <div className="h-2 w-[60%] rounded-lg bg-neutral-600" />
               <div className="h-2 w-[70%] rounded-lg bg-neutral-600" />
            </div>
         </div>
      ),
   },
];

export default themes;