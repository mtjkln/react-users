import React from "react";

import { IUser } from "../../modal";
import styles from "../styles/User.module.css";

const User: React.FC<IUser> = ({ children, fName, setFName,setLName,lName }) => {
  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFName(e.target.value);
  };

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLName(e.target.value)
  };
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <div>
          First Name:
          <input value={fName} onChange={onFirstNameChange} />
        </div>

        <div>
          Last Name:
          <input  value={lName} onChange={onLastNameChange} />
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default User;
