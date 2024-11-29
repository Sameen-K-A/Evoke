import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();
const encryptSecret = process.env.ENCRYPT_STRING;

function encryptData(data: object) {
   return CryptoJS.AES.encrypt(JSON.stringify(data), encryptSecret || "EvokeEncryptString").toString();
};

export default encryptData;