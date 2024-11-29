export interface ICustomError extends Error {
   status?: number;
};

export interface IUser {
   userid?: string;
   name: string;
   email: string;
   password?: string;
   createdAt: string;
};