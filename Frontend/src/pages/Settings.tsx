import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "@/components/settings/Sidebar";
import General from "@/components/settings/General";
import Account from "@/components/settings/Account";
import Trash from "@/components/settings/Trash";
import ThemeSwitcher from "@/components/settings/Theme";
import UpgadePro from "@/components/settings/UpgradePlan";

const Settings = () => {
   const [currentPage, setCurrentPage] = useState<string | null>(null);
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   const location = useLocation();

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   useEffect(() => {
      const path = location.pathname.split("/").pop();
      setCurrentPage(path ? path : "general");
   }, [location.pathname]);

   return (
      <div className="flex mt-16">
         <Sidebar currentPage={currentPage} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
         <div className={`flex-1 p-4 ransition-all duration-300 ${isSidebarOpen && "lg:ml-64"}`}>
            {(() => {
               switch (currentPage) {
                  case "general":
                     return <General />;
                  case "account":
                     return <Account />;
                  case "recycle":
                     return <Trash />;
                  case "theme":
                     return <ThemeSwitcher />;
                  case "pro":
                     return <UpgadePro />;
               }
            })()}
         </div>
      </div>
   );
};

export default Settings;