import { NextFunction, Request, Response } from "express";
import { ICustomError } from "../interface/interface";
import httpStatusCode from "../enum/statusCode";
import logger from "../utils/winston";

function errorHandler(error: ICustomError, req: Request, res: Response, next: NextFunction) {

   const today = new Date();
   const logDetails = {
      message: error.message || "Internal server error",
      method: req.method,
      url: req.originalUrl,
      status: error.status || httpStatusCode.ServerError,
      time: `${today.toLocaleTimeString()},${today.toLocaleDateString()}`
   };

   logger.error(logDetails);

   res.status(error?.status || httpStatusCode.ServerError).json({
      message: error?.message || "Something went wrong, Internal server error"
   });
}

export default errorHandler;