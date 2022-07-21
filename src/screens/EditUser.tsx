import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Authorization from "../components/UI/Authorization";
import User from "../components/UI/User";
import { IAuth } from "../modal";
import styles from "./styles/NewUser.module.css";
import authVal from "../authValue";
import useAppSelector from "../hooks";
import { AppDispatch } from "../store/store";
import { userSliceAction } from "../store/store";

const EditUser: React.FC = () => {
  const store = useAppSelector((state) => state);
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [authValue, setAuthValue] = useState<IAuth>(authVal);
  const [found, setFound] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    store.find((item) => {
      if (item.firstName === fName && item.lastName === lName) {
        setFound(true);
      } else setFound(false);
    });
  }, [fName, lName, store]);
  useEffect(() => {
    let JSONString = JSON.stringify(authValue);
    if (found)
      dispatch(userSliceAction.editUsers({ fName, lName, JSONString }));
  }, [authValue, dispatch]);

  return (
    <div className={styles.newUserContainer}>
      <User fName={fName} setFName={setFName} lName={lName} setLName={setLName}>
        {found ? (
          <Authorization authValue={authValue} setAuthValue={setAuthValue} />
        ) : (
          <div>Seach For the users</div>
        )}
      </User>
    </div>
  );
};

export default EditUser;
