import { NextFunction, Request, Response } from "express";
import httpStatusCode from "../enum/statusCode";
import { comparePassword, hashPassword } from "../utils/password";
import { IUser } from "../interface/interface";
import UserRepository from "../repository/repository";
import { v4 as uuid } from "uuid";
import { loginValidation, registerValidation } from "../utils/validation";
import encryptData from "../utils/encryption";
import { createAccessToken, createRefreshToken } from "../utils/jwt";
import { LoginTicket, OAuth2Client } from "google-auth-library";


const userRepository = new UserRepository();
const client = new OAuth2Client(`${process.env.GOOGLE_CLIENTID}`);

class AuthController {

   public login = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { email, password } = req.body;
         const loginValidationResult: object = loginValidation(email, password);
         if (Object.keys(loginValidationResult).length > 0) {
            throw {
               message: `${Object.values(loginValidationResult).join(",")}`,
               status: httpStatusCode.BadRequest
            };
         }

         const userDetails: IUser | null = await userRepository.findByEmail(email);
         if (!userDetails) {
            throw {
               message: "User not found.",
               status: httpStatusCode.NotFound
            };
         };

         const isPasswordValid = await comparePassword(password, userDetails.password || "");
         if (!isPasswordValid) {
            throw {
               message: "Invalid password.",
               status: httpStatusCode.Unauthorized
            };
         };

         this.cookieHandler(res, userDetails.userid);

         userDetails.userid = "";
         userDetails.password = "";
         const encryptedUserDetails = encryptData(userDetails);

         res.status(httpStatusCode.Success).json({
            message: "Login successfully",
            userDetails: encryptedUserDetails,
         });

      } catch (error) {
         next(error);
      }
   }

   public googleLogin = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const token: string = req.body?.token;
         if (!token) {
            throw {
               status: httpStatusCode.Unauthorized,
               message: "Failed to login, Token is not provided"
            };
         };

         const ticket: LoginTicket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENTID
         });

         const payload = ticket.getPayload();

         if (!payload) {
            throw {
               status: httpStatusCode.Unauthorized,
               message: "Login failed. Failed to retrive user data"
            };
         };

         const { email } = payload

         if (!email) {
            throw {
               status: httpStatusCode.BadRequest,
               message: "Email not provided while google authentication."
            };
         };

         const userDetails: IUser | null = await userRepository.findByEmail(email);
         if (!userDetails) {
            throw {
               message: "Email not found.",
               status: httpStatusCode.NotFound
            };
         };

         this.cookieHandler(res, userDetails.userid);

         userDetails.userid = "";
         userDetails.password = "";
         const encryptedUserDetails = encryptData(userDetails);

         res.status(httpStatusCode.Success).json({
            message: "Login successfully",
            userDetails: encryptedUserDetails,
         });

      } catch (error) {
         console.log(error)
         next(error);
      };
   };

   public register = async (req: Request, res: Response, next: NextFunction) => {
      try {

         const { name, email, password, confirmPassword } = req.body;
         const validationResult: object = registerValidation(name, email, password, confirmPassword);
         if (Object.keys(validationResult).length > 0) {
            throw {
               message: `${Object.values(validationResult).join(",")}`,
               status: httpStatusCode.BadRequest
            }
         }

         const alreadyExist: IUser | null = await userRepository.findByEmail(email);
         if (alreadyExist) {
            throw {
               message: "Email already exists.",
               status: httpStatusCode.Conflict,
            };
         }

         const today = new Date();
         const userDetails: IUser = {
            firstName: name,
            email,
            userid: uuid(),
            password: await hashPassword(password),
            createdAt: today.toLocaleDateString()
         };
         await userRepository.create(userDetails);

         res.status(httpStatusCode.Success).json({
            message: "User registration completed successfully."
         });
      } catch (error) {
         next(error);
      }
   };

   private cookieHandler = async (res: Response, userid: string) => {
      const accessToken: string = createAccessToken(userid);
      const refreshToken: string = createRefreshToken(userid);

      res.cookie("AccessToken", accessToken, {
         httpOnly: true,
         sameSite: 'none',
         maxAge: 15 * 60 * 1000,
      });

      res.cookie("RefreshToken", refreshToken, {
         httpOnly: true,
         sameSite: 'none',
         maxAge: 7 * 24 * 60 * 60 * 1000
      });
   };

};

export default AuthController;