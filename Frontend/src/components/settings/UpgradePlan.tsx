import { FaCheck, FaCube } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import { useTheme } from '@/context/ThemeContext';

export default function UpgadePro() {

   const { theme } = useTheme();
   return (
      <div className="max-w-3xl mx-auto mt-12">

         <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold tracking-tight font-p">Upgrade plans</h2>
            <p className="text-sm text-muted-foreground">
               Choose your perfect upgradable plan for storing your images
            </p>
         </div>

         <div className="grid gap-6 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto mt-10">

            <div className="border rounded-lg shadow-sm overflow-hidden">
               <div className="p-6">
                  <div className="h-12 w-12 mb-4">
                     <FaCube className="h-full w-full text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Free</h3>
                  <div className="flex items-center gap-1 mb-1">
                     <span className="text-3xl font-bold">€0</span>
                     <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-sm font-medium text-orange-500">
                        -0% Discount
                     </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                     Available for every users
                  </p>
                  <Button className="w-full mb-6">
                     Selected
                  </Button>
                  <div className="space-y-4">
                     <h4 className="font-semibold">Only limited storage</h4>
                     <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                           <FaCheck className="h-4 w-4 text-gray-500" />
                           <span className="text-gray-600">10GB storage Available</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className={`rounded-lg shadow-sm overflow-hidden transform ${theme === "dark" ? "hover:bg-gray-800 hover:bg-opacity-25" : "hover:bg-slate-300 hover:bg-opacity-25"} transition-all duration-300 ease-in-out`}>
               <div className="p-6">
                  <div className="h-12 w-12 mb-4">
                     <FaCube className="h-full w-full text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pro</h3>
                  <div className="flex items-center gap-1 mb-1">
                     <span className="text-3xl font-bold">€59</span>
                     <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-sm font-medium text-orange-500">
                        -15% Discount
                     </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">Life long package</p>
                  <Button className="w-full mb-6 bg-yellow-400 text-black">
                     Not availbale now
                  </Button>
                  <div className="space-y-4">
                     <h4 className="font-semibold">For scaling businesses</h4>
                     <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                           <FaCheck className="h-4 w-4 text-gray-500" />
                           <span className="text-gray-600">Unlimited storage available</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}