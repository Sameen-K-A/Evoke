import { FiUser, FiSettings, FiLogOut, FiDelete } from 'react-icons/fi';
import { BiPalette } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { RiSidebarFoldFill, RiSidebarUnfoldFill } from "react-icons/ri";
import { BsStar } from "react-icons/bs";
import { useTheme } from '@/context/ThemeContext';
import StorageIndicator from './StorageIndicator';
import AuthHandler from '@/hooks/authHandler';

interface SidebarProps {
   currentPage: string | null;
   toggleSidebar: () => void;
   isSidebarOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, isSidebarOpen, toggleSidebar }) => {

   const navigate = useNavigate();
   const { theme } = useTheme();
   const { logout } = AuthHandler();

   return (
      <div className={`flex fixed min-h-[92vh] z-10 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
         <div className={`${isSidebarOpen ? 'w-64 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-8'} transition-all duration-300 ease-in-out border-r ${theme === "light" ? "border-gray-300" : "border-gray-700"} flex flex-col`} >
            <div className="flex items-center justify-between p-4">
               <h1 className="text-xl font-semibold">Settings</h1>
            </div>
            <nav className="flex-grow p-2 space-y-1">

               <p className={`flex items-center cursor-pointer gap-3 px-3 py-2 text-sm rounded-md ${currentPage === 'general' ? 'bg-orange-500 text-black' : theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
                  onClick={() => currentPage !== 'general' && navigate('/settings/general')}>
                  <FiSettings className="h-4 w-4" />General
               </p>

               <p className={`flex items-center cursor-pointer gap-3 px-3 py-2 text-sm rounded-md ${currentPage === 'account' ? 'bg-orange-500 text-black' : theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
                  onClick={() => currentPage !== 'account' && navigate('/settings/account')}>
                  <FiUser className="h-4 w-4" />Account
               </p>

               <p className={`flex items-center cursor-pointer gap-3 px-3 py-2 text-sm rounded-md ${currentPage === 'pro' ? 'bg-orange-500 text-black' : theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
                  onClick={() => currentPage !== 'pro' && navigate('/settings/pro')}>
                  <BsStar className="h-4 w-4" />Upgrade plans
               </p>

               <p className={`flex items-center cursor-pointer gap-3 px-3 py-2 text-sm rounded-md ${currentPage === 'theme' ? 'bg-orange-500 text-black' : theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
                  onClick={() => currentPage !== 'theme' && navigate('/settings/theme')}>
                  <BiPalette className="h-4 w-4" />Appearance
               </p>

               <p className={`flex items-center cursor-pointer gap-3 px-3 py-2 text-sm rounded-md ${currentPage === 'recycle' ? 'bg-orange-500 text-black' : theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
                  onClick={() => currentPage !== 'recycle' && navigate('/settings/recycle')}>
                  <FiDelete className="h-4 w-4" />Recently Deleted
               </p>

            </nav>
            <div className='p-7'>
               <StorageIndicator total={2048} used={105} />
            </div>
            <div className={`p-2 py-4 border-t ${theme === "light" ? "border-gray-300" : "border-gray-700"}`}>
               <p className={`flex items-center cursor-pointer gap-3 px-3 py-2 text-sm rounded-md ${theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200"}`}
                  onClick={logout}
               >
                  <FiLogOut className="h-4 w-4" />Logout
               </p>
            </div>
         </div>

         <button className={`absolute top-4 ${isSidebarOpen ? 'left-[16.25rem]' : 'left-2'} z-50 text-gray-400 hover:text-gray-200 transition-colors duration-200`} onClick={toggleSidebar} >
            {isSidebarOpen ? <RiSidebarFoldFill className="h-5 w-5" /> : <RiSidebarUnfoldFill className="h-5 w-5" />}
         </button>
      </div>
   );
};

export default Sidebar;
