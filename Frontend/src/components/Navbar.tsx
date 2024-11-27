import React, { useEffect, useState } from "react";
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { FaCloudsmith } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const Navbar: React.FC = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [active, setActive] = useState<string>("Home");
   const { theme } = useTheme();

   useEffect(() => {
      switch (true) {
         case location.pathname === "/":
            setActive("Home");
            break;
         case location.pathname.startsWith("/settings"):
            setActive("Settings");
            break;
         case location.pathname === "/collections":
            setActive("Collections");
            break;
         default:
            setActive("");
      }
   }, [location.pathname]);

   return (
      <NextNavbar maxWidth="full" onMenuOpenChange={setIsMenuOpen} className="fixed custom-navbar">
         <NavbarContent>
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
            <NavbarBrand>
               <FaCloudsmith className="text-orange-500" size={25} style={{ transform: "rotate(180deg)" }} />
               <h1 className="text-4xl font-extrabold cursor-pointer font-logo" onClick={() => navigate("/")}>
                  Ev<span className="text-orange-500">O</span>ke
               </h1>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="hidden sm:flex gap-8" justify="center">
            <NavbarItem>
               <p className={`cursor-pointer ${active === "Home" ? "text-orange-500" : "hover:text-gray-300"}`} onClick={() => navigate("/")}>
                  Home
               </p>
            </NavbarItem>
            <NavbarItem>
               <p className={`cursor-pointer ${active === "Collections" ? "text-orange-500" : "hover:text-gray-300"}`} onClick={() => navigate("/collections")}>
                  Collections
               </p>
            </NavbarItem>
            <NavbarItem>
               <p className={`cursor-pointer ${active === "Settings" ? "text-orange-500" : "hover:text-gray-300"}`} onClick={() => navigate("/settings")}>
                  Settings
               </p>
            </NavbarItem>
         </NavbarContent>

         <NavbarContent justify="end" />

         <NavbarMenu className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
            <NavbarMenuItem>
               <p className={`w-full ${active === "Home" ? "text-orange-500" : "hover:text-gray-300"}`} onClick={() => navigate("/")} >
                  Home
               </p>
            </NavbarMenuItem>
            <NavbarMenuItem>
               <p className={`w-full ${active === "Collections" ? "text-orange-500" : "hover:text-gray-300"}`} onClick={() => navigate("/collections")}>
                  Collections
               </p>
            </NavbarMenuItem>
            <NavbarMenuItem>
               <p className={`w-full ${active === "Settings" ? "text-orange-500" : "hover:text-gray-300"}`} onClick={() => navigate("/settings")}>
                  Settings
               </p>
            </NavbarMenuItem>
         </NavbarMenu>
      </NextNavbar>
   );
};

export default Navbar;