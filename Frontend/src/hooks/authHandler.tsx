import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { decryptData } from "@/utils/decrypt";
import { IUser } from "@/interfaces/Icollections";

const AuthHandler = () => {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { setUserData } = useAuth();
   const navigate = useNavigate();

   const login = async () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
         toast.warning("Valid email required.");
         return;
      }

      if (!password || password.length < 8 || password.length > 25) {
         toast.warning("Password must be between 8 and 25 characters.");
         return;
      }

      try {
         setIsLoading(true);
         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {
            email: email,
            password: password,
         });

         const encryptedUserDetails = response.data.userDetails;
         const decryptedUserData = decryptData(encryptedUserDetails);

         setUserData(decryptedUserData as IUser);
         localStorage.setItem("EvokeUserData", encryptedUserDetails);

         toast.success("Login successfully.");
      } catch (error: any) {
         toast.error(error.response?.data?.message || "Something went wrong, please try again later.");
      } finally {
         setIsLoading(false);
      }
   };

   const logout = () => {
      setUserData(null);
      localStorage.removeItem("EvokeUserData");
      navigate("/auth/login");
   };

   return {
      email,
      setEmail,
      password,
      setPassword,
      isLoading,
      login,
      logout,
   };
};

export default AuthHandler;