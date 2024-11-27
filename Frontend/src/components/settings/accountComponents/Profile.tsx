import { Button } from "@nextui-org/react";

const Profile = () => {
   return (
      <div className="flex flex-col items-center justify-center">
         <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            <img src="https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-reacts-as-he-looks-on-during-news-photo-1725633476.jpg" alt="Profile picture" className="w-full h-full object-cover" />
         </div>
         <div className="flex justify-center gap-2 mt-4">
            <Button size="sm">
               Upload new picture
            </Button>
            <Button size="sm" variant="bordered" color="danger">
               Delete
            </Button>
         </div>
      </div>
   )
}

export default Profile;