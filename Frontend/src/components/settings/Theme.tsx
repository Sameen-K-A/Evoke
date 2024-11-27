import { FiCheckCircle } from 'react-icons/fi';
import { useTheme } from "@/context/ThemeContext";
import themes from '../../constants/ThemeOptions';

export default function ThemeSwitcher() {
   const { theme, setTheme } = useTheme();

   return (
      <div className="flex flex-col items-center justify-center w-full space-y-10 mt-12">
         <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold tracking-tight font-p">Interface theme</h2>
            <p className="text-sm text-muted-foreground">
               Choose your application theme
            </p>
         </div>

         <div className="flex flex-wrap justify-center gap-4">
            {themes.map((themeOption) => (
               <div
                  key={themeOption.id}
                  className={`relative cursor-pointer min-w-72 transition-all hover: border-1 rounded-lg hover:border-orange-700 ${theme === themeOption.id ? "border-1 border-orange-500" : "border-transparent "}`}
                  onClick={() => setTheme(themeOption.id)}
               >
                  {theme === themeOption.id && (
                     <div className="absolute right-2 top-2 h-6 w-6 rounded-full bg-orange-500 text-white flex justify-center items-center">
                        <FiCheckCircle />
                     </div>
                  )}

                  <div className="p-4">
                     <div className="mb-2 text-sm font-medium text-center">{themeOption.label}</div>
                     <div className={`aspect-video rounded-lg border p-2 ${themeOption.id === "dark" ? "bg-neutral-900 border-neutral-600" : "bg-white border-neutral-300"}`}>
                        <div className="space-y-2">
                           <div className={`h-2 w-[60%] rounded-lg ${themeOption.id === "dark" ? "bg-neutral-700" : "bg-neutral-300"}`} />
                           <div className={`h-8 rounded-lg ${themeOption.id === "dark" ? "bg-neutral-800" : "bg-neutral-400"}`} />
                           <div className="flex gap-2">
                              <div className={`h-[60px] w-1/3 rounded-lg ${themeOption.id === "dark" ? "bg-neutral-700" : "bg-neutral-300"}`} />
                              <div className={`h-[60px] w-1/3 rounded-lg ${themeOption.id === "dark" ? "bg-neutral-700" : "bg-neutral-300"}`} />
                              <div className={`h-[60px] w-1/3 rounded-lg ${themeOption.id === "dark" ? "bg-neutral-700" : "bg-neutral-300"}`} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )

}