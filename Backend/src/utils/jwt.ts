import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY as string || "jwtSecretKey";
const accessTokenExpiryTime = process.env.ACCESS_TOKEN_EXPIRY_TIME as string || "10m";
const refreshTokenExpiryTime = process.env.REFRESH_TOKEN_EXPIRY_TIME as string || "15m";

export const createAccessToken = (userid: string): string => {
   const token: string = jwt.sign({ userid }, secretKey, { expiresIn: accessTokenExpiryTime });
   return token;
};

export const createRefreshToken = (userid: string): string => {
   const token: string = jwt.sign({ userid }, secretKey, { expiresIn: refreshTokenExpiryTime });
   return token;
};