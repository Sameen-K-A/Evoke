import "express";

declare module "express" {
   interface Request {
      userid: string;
   };
};