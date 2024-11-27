import { useContext, createContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
   theme: Theme;
   setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [theme, setTheme] = useState<Theme>(
      () => (localStorage.getItem("evokeTheme") as Theme) || "dark"
   );

   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("evokeTheme", theme);
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useTheme = (): ThemeContextProps => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
   }
   return context;
};