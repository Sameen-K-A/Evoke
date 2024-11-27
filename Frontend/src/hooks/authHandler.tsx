import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthHandler = () => {

   const { setIsAuth } = useAuth();
   const navigate = useNavigate();

   const login = () => {
      setIsAuth(true);
      localStorage.setItem("EvokeAuth", "true");
      navigate("/collections");
   }

   const logout = () => {
      setIsAuth(false);
      navigate("/auth/login");
      localStorage.removeItem("EvokeAuth");
   }

   return {
      login,
      logout
   };
}

export default AuthHandler;