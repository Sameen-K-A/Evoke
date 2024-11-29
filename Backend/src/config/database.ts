import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();
const connectionString: string = process.env.DATABASE_URL as string

async function connectDatabase(): Promise<void> {
   try {
      await connect(connectionString);
      console.log("Database connected successfully😎")
   } catch (error) {
      console.log("Failed to connect database😭", error)
   };
};

export default connectDatabase;