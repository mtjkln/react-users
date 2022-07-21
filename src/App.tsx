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
          <Route path="/" exact>
            <Redirect to="/new-user" />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/show-user">
            <ShowUser />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
