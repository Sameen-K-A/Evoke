export function registerValidation(name: string, email: string, password: string, confirmPassword: string): object {
   const errors: { [key: string]: string } = {};

   if (!name || name.trim().length < 3 || name.trim().length > 25) {
      errors.name = "Name must be between 3 and 25 characters.";
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!email || !emailRegex.test(email)) {
      errors.email = "Invalid email format.";
   }

   const strongPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/;
   if (!password || !strongPasswordRegex.test(password)) {
      errors.password = "Password must be 8-25 characters and include alphabets, numbers, and a special character.";
   }

   if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords and Confirm password do not match.";
   }

   return errors;
};



export function loginValidation(email: string, password: string): object {
   const errors: { [key: string]: string } = {};

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!email || !emailRegex.test(email)) {
      errors.email = "Invalid email format.";
   };

   if (!password || password.length < 8 || password.length > 25) {
      errors.password = "Password must be between 8 and 25 characters.";
   };

   return errors;
};