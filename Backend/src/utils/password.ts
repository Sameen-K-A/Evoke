import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const hashPassword = async (password: string) => {
   const saltRounds = parseInt(process.env.PASSWORD_SALT || "10");
   return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
   return await bcrypt.compare(plainPassword, hashedPassword);
};