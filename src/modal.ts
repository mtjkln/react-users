import React from "react";

export interface IUserAuthorization {
  authorizationKey: string;
  granted: boolean;
}

export interface INewUser {
  firstName: string;
  lastName: string;
  userGroup: string | undefined;
  userAuthorizations: IUserAuthorization[];
}

export interface IInitialState {
  userId: string;
  firstName: string;
  lastName: string;
  userGroup: string | undefined;
  userAuthorizations: IUserAuthorization[];
}

export interface IUser {
  children?: React.ReactNode;
  fName: string;
  setFName: React.Dispatch<React.SetStateAction<string>>;
  lName: string;
  setLName: React.Dispatch<React.SetStateAction<string>>;
}

export interface IAuth {
  userGroup: string;
  auth: IUserAuthorization[];
}

export interface IAuthProp {
  authValue: IAuth;
  setAuthValue: React.Dispatch<React.SetStateAction<IAuth>>;
}
