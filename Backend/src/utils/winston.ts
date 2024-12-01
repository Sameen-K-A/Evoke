import { createLogger, format, transports } from "winston";
import path from "path"

const consoleLogFormat = format.combine(
  format.printf(({ message }) => {
    return `${message}`;
  })
);

const logger = createLogger({
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({
      filename: path.join(__dirname, "../../logs/app.log")
    }),
  ],
});

export default logger;