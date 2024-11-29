import { useAuth } from "@/context/AuthContext";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const General = () => {

   const navigate = useNavigate();
   const { userData } = useAuth();

   return (
      <div className="max-w-2xl mx-auto mt-12">

         <div className="mt-8 space-y-5">
            <div className="flex flex-col items-center justify-center">
               <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-reacts-as-he-looks-on-during-news-photo-1725633476.jpg" alt="Profile picture" className="w-full h-full object-cover" />
               </div>
            </div>

            <div className="space-y-1">
               <label className="block text-sm font-medium text-gray-700">Full name</label>
               <p>{userData?.name}</p>
            </div>

            <div className="space-y-1">
               <label className="block text-sm font-medium text-gray-700">Email</label>
               <p>{userData?.email}</p>
            </div>

            <div className="space-y-1">
               <label className="block text-sm font-medium text-gray-700">Account started</label>
               <p>{userData?.createdAt}</p>
            </div>

            <div className="space-y-1">
               <label className="block text-sm font-medium text-gray-700">About Evoke</label>
               <p>Evoke is a cloud-based platform to manage, share, and organize images effortlessly. Edit, add, or delete photos with ease in a secure and user-friendly gallery.</p>
            </div>

            <div className="space-y-1">
               <label className="block text-sm font-medium text-gray-700">Plan</label>
               <div className="flex items-center gap-5">
                  <p>Free plan</p>
                  <Button size="sm" variant="bordered" onClick={() => navigate("/settings/pro")} >View plans</Button>
               </div>
            </div>


         </div>
      </div>
   )
}

export default General;