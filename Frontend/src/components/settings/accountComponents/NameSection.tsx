import { Input } from "@nextui-org/react";

const NameSection = () => {
   return (
      <div className="space-y-4">
         <h3 className="text-medium font-semibold tracking-tight font-p">Full name</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
               <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
               <Input
                  type="text"
                  defaultValue="Cristiano"
               />
            </div>
            <div className="space-y-2">
               <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name <span className="text-gray-500 font-normal">(optional)</span></label>
               <Input
                  type="text"
                  defaultValue="ronaldo"
               />
            </div>
         </div>
      </div>
   )
}

export default NameSection;