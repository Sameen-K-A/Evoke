import { FaEnvelope } from "react-icons/fa"
import { Input } from "@nextui-org/react";

const EmailSection = () => {
   return (
      <div className="space-y-4">
         <h3 className="text-medium font-semibold tracking-tight font-p">Contact email</h3>
         <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">

               <Input
                  type="email"
                  startContent={<FaEnvelope className="me-2" />}
                  defaultValue="annan.gmail.com"
                  readOnly
               />
            </div>
         </div>
      </div>
   )
}

export default EmailSection;