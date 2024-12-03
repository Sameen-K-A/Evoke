import { toast } from "sonner";

const useValidationHandler = () => {

   const loginValidation = (email: string, password: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
         toast.warning("Valid email required.");
         return false;
      };

      if (!password || password.length < 8 || password.length > 25) {
         toast.warning("Password must be between 8 and 25 characters.");
         return false;
      };
      return true;
   };

   return {
      loginValidation,
   };
};

export default useValidationHandler;