import { IAuth } from "./modal";

const authVal: IAuth = {
  userGroup: "Operator",
  auth: [
    {
      authorizationKey: "jumping",
      granted: false,
    },
    {
      authorizationKey: "standing",
      granted: false,
    },
    {
      authorizationKey: "sitting",
      granted: false,
    },
    {
      authorizationKey: "running",
      granted: false,
    },
  ],
};
export default authVal;