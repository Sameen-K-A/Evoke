import React, { useState } from 'react';
import { FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi';
import { Button, Input } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { FcGoogle } from "react-icons/fc";
import AuthHandler from '@/hooks/authHandler';

const SignInForm: React.FC = () => {
   const [showPassword, setShowPassword] = useState(false);
   const { theme } = useTheme();
   const navigate = useNavigate();
   const { login, email, setEmail, password, setPassword, isLoading } = AuthHandler();

   return (
      <div className="min-h-screen flex items-center justify-center p-4 mt-8">
         <div className="w-full max-w-md overflow-hidden">
            <div className="p-8 space-y-6">
               <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                     <FiLogIn className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Sign in with email</h2>
                  <p className="text-gray-400 text-center text-sm">
                     Make a new doc to bring your words, data, and teams together. For free
                  </p>
               </div>

               <div>
                  <label htmlFor="email" className="block text-sm mb-1 font-medium text-gray-300">Email</label>
                  <Input
                     type="email"
                     placeholder="Enter your email"
                     value={email}
                     variant='underlined'
                     style={theme === "dark" ? { color: "white" } : { color: "black" }}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>

               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
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

               <div className="flex items-center justify-end">
                  <p className="text-sm text-blue-400 hover:underline">Forgot password?</p>
               </div>

               <div className='space-y-2'>
                  <Button
                     className="w-full flex justify-center py-2 px-4 border border-transparent font-medium text-white bg-orange-500"
                     onClick={login}
                  >
                     {isLoading ? "Loading . . ." : "Get Start"}
                  </Button>
                  <Button
                     variant='bordered'
                     fullWidth
                  >
                     <FcGoogle /> Login with google
                  </Button>
               </div>

               <p className="text-sm text-center">
                  Don't have an account? <span className='font-p hover:underline text-blue-400' onClick={() => navigate("/auth/register")}>Sign up</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default SignInForm;