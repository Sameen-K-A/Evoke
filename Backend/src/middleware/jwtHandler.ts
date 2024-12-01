import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import httpStatusCode from "../enum/statusCode";
import { createAccessToken } from "../utils/jwt";

dotenv.config();
const secretKey: string = process.env.JWT_SECRET_KEY || "defaultKey";


function verifyToken(req: Request, res: Response, next: NextFunction): void {
   const accessToken: string | undefined = req.cookies?.AccessToken;

   if (!accessToken) {
      return handleRefreshToken(req, res, next);
   };

   jwt.verify(accessToken, secretKey, (err, decoded) => {
      if (err || !(decoded as JwtPayload)?.userid) {
         return handleRefreshToken(req, res, next);
      };

      const userid = (decoded as JwtPayload).userid;
      req.userid = userid;
      next();
   });
};



function handleRefreshToken(req: Request, res: Response, next: NextFunction): void {
   try {
      const refreshToken: string | undefined = req.cookies?.RefreshToken;

      if (!refreshToken) {
         throw {
            status: httpStatusCode.Unauthorized,
            message: "Access denied. No token provided.",
         };
      }

      jwt.verify(refreshToken, secretKey, (err, decoded) => {
         if (err || !(decoded as JwtPayload)?.userid) {
            throw {
               status: httpStatusCode.Unauthorized,
               message: "Access denied. Invalid token.",
            };
         }

         const userid = (decoded as JwtPayload).userid;
         const newAccessToken = createAccessToken(userid);

         res.cookie("AccessToken", newAccessToken, {
            httpOnly: true,
            sameSite: 'none',
            maxAge: 15 * 60 * 1000
         });

         req.userid = userid;
         next();
      });

   } catch (error) {
      next(error);
   };
};

export default verifyToken;