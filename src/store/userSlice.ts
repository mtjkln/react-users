import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IInitialState, IAuth } from "../modal";

const initialState: IInitialState[] = [
  {
    userId: "6ddca37b-8f02-43de-9ea1-81837c743026",
    firstName: "John",
    lastName: "Appleseed",
    userGroup: "Operator",
    userAuthorizations: [
      {
        authorizationKey: "jumping",
        granted: true,
      },
      {
        authorizationKey: "standing",
        granted: true,
      },
      {
        authorizationKey: "sitting",
        granted: true,
      },
      {
        authorizationKey: "running",
        granted: false,
      },
    ],
  },
  {
    userId: "cc07b3c3-3e8a-49dc-aad9-e7af72b55002",
    firstName: "Janet",
    lastName: "Williams",
    userGroup: "Administrator",
    userAuthorizations: [
      {
        authorizationKey: "jumping",
        granted: true,
      },
      {
        authorizationKey: "standing",
        granted: true,
      },
      {
        authorizationKey: "sitting",
        granted: true,
      },
      {
        authorizationKey: "running",
        granted: false,
      },
    ],
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (
      state,
      action: PayloadAction<{
        fName: string;
        lName: string;
        auth: IAuth;
      }>
    ) => {
      state.push({
        userId: Date.now().toString(),
        firstName: action.payload.fName,
        lastName: action.payload.lName,
        userGroup: action.payload.auth.userGroup,
        userAuthorizations: action.payload.auth.auth,
      });
    },
    editUsers: (
      state,
      action: PayloadAction<{
        fName: string;
        lName: string;
        JSONString: string;
      }>
    ) => {
      let obj = JSON.parse(action.payload.JSONString);
      let ind = -1;
      for (let i = 0; i < state.length; i++) {
        if (
          state[i].lastName === action.payload.lName &&
          state[i].firstName === action.payload.fName
        ) {
          ind = i;
          break;
        }
      }

      state[ind].userGroup = obj.userGroup;
      state[ind].userAuthorizations = obj.auth;
    },
  },
});

export default userSlice;
