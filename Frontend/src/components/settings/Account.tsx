import Profile from "./accountComponents/Profile"
import NameSection from "./accountComponents/NameSection"
import EmailSection from "./accountComponents/EmailSection"
import PasswordSection from "./accountComponents/PasswordSection"
import { Button } from "@nextui-org/react"
import accountHandler from "@/hooks/accountHandler"

const Account = () => {

   const { firstName, setFirstName, lastName, setLastName, currentPassword, setCurrentPassword, newPassword, setNewPassword, saveActive, handleSave, isLoading } = accountHandler();

   return (
      <div className="max-w-2xl mx-auto mt-12">

         <div className="space-y-1 text-center">
            <h2 className="text-2xl font-semibold tracking-tight font-p">Account details</h2>
            <p className="text-sm text-gray-500">
               Set your all information about this application
            </p>
         </div>

         <div className="mt-8 space-y-8">

            <Profile />
            <NameSection firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />
            <EmailSection />
            <PasswordSection currentPassword={currentPassword} setCurrentPassword={setCurrentPassword} newPassword={newPassword} setNewPassword={setNewPassword} />

         </div>

         <div className="space-y-1 flex justify-center mt-8 mb-5">
            <Button
               disabled={!saveActive || isLoading}
               className={`${saveActive ? "bg-orange-500" : "cursor-not-allowed"}`}
               onClick={handleSave}
            >
               {isLoading ? "Upadating . . ." : "Save changes"}
            </Button>
         </div>

      </div>
   )
}

export default Account;