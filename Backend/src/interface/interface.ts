export interface ICustomError extends Error {
   status?: number;
};

export interface IUser {
   userid?: string;
   firstName: string;
   lastName?: string;
   email: string;
   password?: string;
   createdAt: string;
};