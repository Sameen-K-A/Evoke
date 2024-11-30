import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const accountHandler = () => {
   const { userData } = useAuth();
   const [firstName, setFirstName] = useState<string>(userData?.firstName || "");
   const [lastName, setLastName] = useState<string>(userData?.lastName || "");
   const [currentPassword, setCurrentPassword] = useState<string>("");
   const [newPassword, setNewPassword] = useState<string>("");
   const [saveActive, setSaveActive] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const strongPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/;

   useEffect(() => {
      if (
         userData?.firstName !== firstName.trim() ||
         userData?.lastName !== lastName.trim() ||
         currentPassword.trim().length > 0 ||
         newPassword.trim().length > 0
      ) {
         setSaveActive(true);
      } else {
         setSaveActive(false);
      }
   }, [firstName, lastName, currentPassword, newPassword]);


   const handleSave = async () => {
      if (!saveActive) return;

      if (!/^[A-Za-z\s]{3,20}$/.test(firstName.trim())) {
         toast.warning("First name must contain only alphabetic characters or spaces, and be 3-20 characters long.");
         return;
      }

      if (lastName.trim().length > 0 && !/^[A-Za-z\s]{1,20}$/.test(lastName.trim())) {
         toast.warning("Last name must contain only alphabetic characters or spaces, and be a maximum of 20 characters.");
         return;
      }

      if (currentPassword.trim().length > 0 && newPassword.trim().length === 0) {
         toast.warning("New password is required when current password is provided.");
         return;
      }

      if (newPassword.trim().length > 0 && currentPassword.trim().length === 0) {
         toast.warning("Current password is required when new password is provided.");
         return;
      }

      if (currentPassword.trim().length > 0 && !strongPasswordRegex.test(currentPassword.trim())) {
         toast.warning("Current password is invalid.");
         return;
      }

      if (newPassword.trim().length > 0 && !strongPasswordRegex.test(newPassword.trim())) {
         toast.warning("New password must be 8-25 characters and include alphabets, numbers, and a special character.");
         return;
      }

      try {
         setIsLoading(true);
         toast.success("Loading... , Please wait.");
      } catch (error: any) {
         toast.error(error.response?.data?.message || "Something went wrong, please try again later.");
      } finally {
         setIsLoading(false);
      }
   };

   return {
      firstName,
      setFirstName,
      lastName,
      setLastName,
      currentPassword,
      setCurrentPassword,
      newPassword,
      setNewPassword,
      saveActive,
      handleSave,
      isLoading,
   };
};

export default accountHandler;