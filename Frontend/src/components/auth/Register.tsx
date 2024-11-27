import React, { useState } from 'react';
import { FiUser, FiEye, FiEyeOff } from 'react-icons/fi';
import { Button, Input } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { FcGoogle } from "react-icons/fc";

const RegisterForm: React.FC = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { theme } = useTheme();
   const navigate = useNavigate();

   return (
      <div className="min-h-screen flex items-center justify-center p-4 mt-5">
         <div className="w-full max-w-md">
            <div className="p-8 space-y-6">
               <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                     <FiUser className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Create an account</h2>
                  <p className="text-gray-400 text-center text-sm">
                     Join us to bring your word. For free
                  </p>
               </div>

               <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                     Name
                  </label>
                  <Input
                     type="text"
                     variant='underlined'
                     placeholder="Enter your name"
                     value={name}
                     style={theme === "dark" ? { color: "white" } : { color: "black" }}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>

               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                     Email
                  </label>
                  <Input
                     type="email"
                     style={theme === "dark" ? { color: "white" } : { color: "black" }}
                     placeholder="Enter your email"
                     value={email}
                     variant='underlined'
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>

               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                     Password
                  </label>
                  <div className="mt-1 relative">
                     <Input
                        variant='underlined'
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        style={theme === "dark" ? { color: "white" } : { color: "black" }}
                        onChange={(e) => setPassword(e.target.value)}
                     />

                     <button className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                           <FiEyeOff size={20} className="text-gray-400" />
                        ) : (
                           <FiEye size={20} className="text-gray-400" />
                        )}
                     </button>
                  </div>
               </div>

               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                     Password
                  </label>
                  <div className="mt-1 relative">
                     <Input
                        variant='underlined'
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={confirmPassword}
                        style={theme === "dark" ? { color: "white" } : { color: "black" }}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />

                     <button className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? (
                           <FiEyeOff size={20} className="text-gray-400" />
                        ) : (
                           <FiEye size={20} className="text-gray-400" />
                        )}
                     </button>
                  </div>
               </div>

               <Button className="w-full flex justify-center py-2 px-4 border border-transparent font-medium text-white bg-orange-500" onClick={() => navigate("/auth/otp")}>
                  Register
               </Button>

               <Button
                  fullWidth
                  variant='bordered'
                  onClick={() => navigate("/auth/otp")}>
                  <FcGoogle /> Register with google
               </Button>

               <p className="text-sm text-center">
                  Already have an account? <span className='font-p hover:underline text-blue-400' onClick={() => navigate("/auth/login")}>Sign in</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default RegisterForm;

