import { NextFunction, Request, Response } from "express"
import { ICustomError } from "../interface/interface";
import httpStatusCode from "../enum/statusCode";

function errorHandler(error: ICustomError, req: Request, res: Response, next: NextFunction) {

   console.error("Error details:", error);

   res.status(error?.status || httpStatusCode.ServerError).json({
      message: error?.message || "Something went wrong, Internal server error"
   });

};

export default errorHandler;