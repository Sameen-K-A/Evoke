import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
   isAuth: boolean;
   setIsAuth: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [isAuth, setIsAuth] = useState<boolean>(() => localStorage.getItem("EvokeAuth") === "true");

   return (
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
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