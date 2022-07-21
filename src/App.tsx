import { Switch, Route, Redirect } from "react-router-dom";

import EditUser from "./screens/EditUser";
import NewUser from "./screens/NewUser";
import Header from "./components/UI/Header";
import styles from "./App.module.css";
import ShowUser from "./screens/ShowUser";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.users}>
        <Switch>
          <Route path="/react-users" exact>
            <Redirect to="/react-users/new-user" />
          </Route>
          <Route path="/react-users/new-user">
            <NewUser />
          </Route>
          <Route path="/react-users/edit-user">
            <EditUser />
          </Route>
          <Route path="/react-users/show-user">
            <ShowUser />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
