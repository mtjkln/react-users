import React from "react";

import styles from "../styles/Authorization.module.css";
import { IAuthProp } from "../../modal";

const Authorization: React.FC<IAuthProp> = ({ authValue, setAuthValue }) => {
  const checkValue = ["jumping", "standing", "sitting", "running"];
  const onChangeCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number
  ) => {
    if (e.target.checked === true) {
      let temp = { ...authValue };
      temp.auth[ind].granted = true;
      setAuthValue(temp);
    } else {
      let temp = { ...authValue };
      temp.auth[ind].granted = false;
      setAuthValue(temp);
    }
  };
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let temp = { ...authValue };
    temp.userGroup = e.target.value;
    setAuthValue(temp);
  };

  return (
    <div className={styles.container}>
      Authorisation
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "5px" }}>Group:</div>
        <select value={authValue.userGroup} onChange={onSelect} name="group">
          <option value="Operator">Operator</option>
          <option value="Administrator">Administrator</option>
          <option value="Service">Service</option>
        </select>
      </div>
      <div className={styles.checkbox}>
        <div style={{ marginBottom: "15px" }}>Permissions</div>
        {checkValue.map((item, index) => (
          <div key={index}>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeCheck(e, index)
              }
              type="checkbox"
              value={item}
              checked={authValue.auth[index].granted}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authorization;
