import { IUser } from "@/interfaces/Icollections";
import { decryptData } from "@/utils/decrypt";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type AuthContextType = {
   userData: IUser | null;
   setUserData: (value: IUser | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [userData, setUserData] = useState<IUser | null>(null);

   useEffect(() => {
      const localUserData = localStorage.getItem("EvokeUserData");
      if (localUserData) {
         try {
            const result = decryptData(localUserData);
            setUserData(result as IUser);
         } catch (error) {
            console.error("Failed to decrypt user data:", error);
            setUserData(null);
         }
      } else {
         setUserData(null);
      }
   }, []);

   return (
      <AuthContext.Provider value={{ userData, setUserData }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = (): AuthContextType => {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error("AuthContext must be used within an AuthProvider");
   }
   return context;
};