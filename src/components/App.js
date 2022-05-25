import {Redirect, Route, Switch} from "react-router-dom";
import {useEffect} from "react";
import HeaderContainer from "./Header/HeaderContainer";
import Preloader from "./Preloader/Preloader";
import AuthContent from "./AuthContent/AuthContent";
import MainContentContainer from "./MainContent/MainContentContainer";

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.checkAuth();
    }
  }, [])

  if (props.isLoading) {
    return (
        <div>
          <HeaderContainer/>
          <Preloader/>
        </div>
    )
  }
  if (!props.isAuth) return (
      <div>
        <HeaderContainer/>
        <Switch>
          <Route exact path={"/api/login"}>
            <AuthContent/>
          </Route>
          <Route exact path={"/api/registration"}>
            <AuthContent/>
          </Route>
          <Redirect from={"*"} to={"/api/login"} />
        </Switch>
      </div>
  )
  else return (
      <div>
        <HeaderContainer/>
        <Switch>
          <Route path="/api/main">
            <MainContentContainer/>
          </Route>
          <Redirect from={"*"} to={"/api/main"} />
        </Switch>
      </div>
  );
}

export default App;
