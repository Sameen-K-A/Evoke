import CryptoJS from "crypto-js";
const SECRET_KEY = import.meta.env.VITE_DECRYPT_STRING;

export const decryptData = (encryptedData: string): object => {
   const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
   const decryptResult = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
   return decryptResult;
};