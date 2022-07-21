import { NavLink } from "react-router-dom";

import styles from "../styles/Header.module.css";
import useAppSelector from "../../hooks";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [update, setUpdated] = useState<Boolean>(false);
  const store = useAppSelector((state) => state);
  useEffect(() => {
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false);
    }, 300);
  }, [store]);
  return (
    <div
      style={{ backgroundColor: update ? "grey" : "black" }}
      className={styles.header}
    >
      <div className={styles.heading}>Users</div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/react-users/new-user">
              New Users
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.active}
              to="/react-users/edit-user"
            >
              Edit Users
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.active}
              to="/react-users/show-user"
            >
              Show Users
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
