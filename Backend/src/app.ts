import express, { Application } from 'express';
import env from "dotenv";
import cors from "cors";
import router from './router/router';
import errorHandler from './middleware/errorHandler';
import connectDatabase from './config/database';

const app: Application = express();
env.config();
connectDatabase();

app.use(cors({
   origin: [process.env.FRONTEND_LOCAL_URL as string],
   methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
   credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
   console.log(`Server is running on http://localhost:${process.env.PORT} 🎯`);
});