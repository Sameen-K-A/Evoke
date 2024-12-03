import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { decryptData } from "@/utils/decrypt";
import { IUser } from "@/interfaces/Icollections";
import axios from "axios";
import useValidationHandler from "./validationHandler";

const AuthHandler = () => {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { setUserData } = useAuth();
   const { loginValidation } = useValidationHandler();
   const navigate = useNavigate();

   //! ==================================================== Handle manual login ======================================================

   const login = async () => {
      if (!loginValidation(email, password)) return;

      try {
         setIsLoading(true);
         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {
            email: email,
            password: password,
         }, { withCredentials: true });

         handleUserData(response.data.userDetails);
         toast.success("Login successfully.");
      } catch (error: any) {
         toast.error(error.response?.data?.message || "Something went wrong, please try again later.");
      } finally {
         setIsLoading(false);
      }
   };

   //! ==================================================== Handle google login ======================================================

   const handleGoogleLogin = async (credential: string | undefined): Promise<void> => {
      try {
         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/google/auth`,
            { token: credential },
            { withCredentials: true }
         );

         handleUserData(response.data.userDetails as string);
         toast.success("Login successfully.");
      } catch (error: any) {
         toast.error(error.response?.data?.message || "Something went wrong, please try again later.");
      };
   };

   //! ==================================================== Handle logout ===========================================================

   const logout = () => {
      setUserData(null);
      localStorage.removeItem("EvokeUserData");
      navigate("/auth/login");
   };

   //! ============================================= handle recieved user details from backend ======================================

   const handleUserData = (userData: string) => {
      const decryptedUserData = decryptData(userData);
      setUserData(decryptedUserData as IUser);
      localStorage.setItem("EvokeUserData", userData);
   };

   //! ======================================================== Returning ===========================================================
   
   return {
      email,
      setEmail,
      password,
      setPassword,
      isLoading,
      login,
      handleGoogleLogin,
      logout,
   };
};

export default AuthHandler;