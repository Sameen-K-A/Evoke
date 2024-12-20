import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Input } from '@nextui-org/react'

interface IPasswordSectionProps {
   currentPassword: string;
   setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
   newPassword: string;
   setNewPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordSection: React.FC<IPasswordSectionProps> = ({ currentPassword, setCurrentPassword, newPassword, setNewPassword }) => {

   const [showCurrentPassword, setShowCurrentPassword] = useState(false)
   const [showNewPassword, setShowNewPassword] = useState(false)

   return (
      <div className="space-y-4">
         <h3 className="text-medium font-semibold tracking-tight font-p">Password</h3>
         <p className="text-sm text-gray-500">
            Modify your current password.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
               <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current password</label>
               <div className="relative">
                  <Input
                     type={showCurrentPassword ? "text" : "password"}
                     value={currentPassword}
                     onChange={(e) => setCurrentPassword(e.target.value)}
                     endContent={showCurrentPassword ? (
                        <FaEyeSlash className='cursor-pointer' onClick={() => setShowCurrentPassword(!showCurrentPassword)} />
                     ) : (
                        <FaEye className='cursor-pointer' onClick={() => setShowCurrentPassword(!showCurrentPassword)} />
                     )}
                  />
               </div>
            </div>
            <div className="space-y-2">
               <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New password</label>
               <div className="relative">
                  <Input
                     type={showNewPassword ? "text" : "password"}
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                     endContent={showNewPassword ? (
                        <FaEyeSlash className='cursor-pointer' onClick={() => setShowNewPassword(!showNewPassword)} />
                     ) : (
                        <FaEye className='cursor-pointer' onClick={() => setShowNewPassword(!showNewPassword)} />
                     )}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default PasswordSection;