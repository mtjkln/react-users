import React from "react";

import useAppSelector from "../hooks";
import styles from "./styles/ShowUser.module.css";

const ShowUser: React.FC = () => {
  const store = useAppSelector((store) => store);
  return (
    <div className={styles.showUserContainer}>
      <div className={styles.header}>
        <div
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className={styles.name}
        >
          Name
        </div>
        <div
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className={styles.userGroup}
        >
          User Group
        </div>
        <div
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className={styles.auth}
        >
          Authorization(s)
        </div>
      </div>
      {store.map((item, index) => (
        <div key={index} className={styles.showContainer}>
          <div className={styles.name}>
            {item.firstName + " " + item.lastName}
          </div>
          <div className={styles.userGroup}>{item.userGroup}</div>
          <div className={styles.auth}>
            {item.userAuthorizations.map((item, index) => (
              <div key={index} className={styles.item}>
                {item.granted ? item.authorizationKey : ""}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowUser;
