import React, { useState, useEffect } from 'react';
import { MdOutlineKey } from "react-icons/md";
import { Button, Input } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';

const OtpForm: React.FC = () => {
   const [name, setName] = useState('');
   const [timer, setTimer] = useState(10);
   const { theme } = useTheme();
   const navigate = useNavigate();

   useEffect(() => {
      if (timer > 0) {
         const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
         }, 1000);
         return () => clearInterval(interval);
      }
   }, [timer]);

   return (
      <div className="min-h-screen flex items-center justify-center p-4">
         <div className="w-full max-w-md">
            <div className="p-8 space-y-6">
               <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                     <MdOutlineKey className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Verification</h2>
                  <p className="text-gray-400 text-center text-sm">
                     Verify your OTP for secure authentication
                  </p>
               </div>

               <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                     OTP
                  </label>
                  <Input
                     type="text"
                     variant='underlined'
                     placeholder="Enter your OTP"
                     value={name}
                     style={theme === "dark" ? { color: "white" } : { color: "black" }}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>

               <Button
                  className="w-full flex justify-center py-2 px-4 border border-transparent font-medium text-white bg-orange-500"
                  onClick={() => navigate("/auth/login")}
                  disabled={timer === 0}
               >
                  Verify
               </Button>

               <p className="text-sm text-center">
                  OTP Exipre within <span className="font-bold">{timer}</span> seconds
               </p>

               <p className="text-sm text-center">
                  Didn't receive OTP? <span className="font-p hover:underline text-blue-400">Resend OTP</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default OtpForm;