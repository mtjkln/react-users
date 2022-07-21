import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Authorization from "../components/UI/Authorization";
import User from "../components/UI/User";
import { IAuth } from "../modal";
import { AppDispatch, userSliceAction } from "../store/store";
import styles from "./styles/NewUser.module.css";
import useAppSelector from "../hooks";
import authVal from "../authValue";

const NewUser: React.FC = () => {
  const store = useAppSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [authValue, setAuthValue] = useState<IAuth>(authVal);

  const onCancelHandler = () => {
    setFName("");
    setLName("");
    setAuthValue(JSON.parse(JSON.stringify(authVal)));
  };

  const onSaveHandler = () => {
    dispatch(
      userSliceAction.addUsers({ fName: fName, lName: lName, auth: authValue })
    );
  };
  useEffect(() => {
    onCancelHandler();
  }, [store]);

  return (
    <div className={styles.newUserContainer}>
      <User fName={fName} setFName={setFName} lName={lName} setLName={setLName}>
        <Authorization authValue={authValue} setAuthValue={setAuthValue} />
      </User>
      <div className={styles.buttons}>
        <button onClick={onCancelHandler}>Cancel</button>
        <button onClick={onSaveHandler}>Save</button>
      </div>
    </div>
  );
};

export default NewUser;
