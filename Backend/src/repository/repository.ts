import User from "../model/userModel";
import { IUser } from "../interface/interface";

class UserRepository {

   findByEmail = async (email: string): Promise<IUser | null> => {
      return await User.findOne({ email: email }, { _id: 0 });
   };

   create = async (userDetails: IUser): Promise<IUser> => {
      return await User.create(userDetails);
   };

};

export default UserRepository;