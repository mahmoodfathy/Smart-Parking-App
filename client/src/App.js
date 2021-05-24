import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NavBar from "./Components/NavBar";
import Parking from "./Components/Parking";
import UserDashboard from "./Components/userDashboard";
import { formContext } from "./Contexts";
import { useContext, useEffect } from "react";
import axios from "axios";
const App = () => {
  const { setIsAdmin, setIsSignedIn } = useContext(formContext);
  const getUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3001/user",
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsSignedIn(true);
        console.log(response.data.isAdmin);
        setIsAdmin(response.data.isAdmin);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Router forceRefresh>
        <NavBar />
        <Switch>
          <Route exact path="/" component={withRouter(LandingPage)} />
          <Route exact path="/login" component={withRouter(Login)} />

          <Route exact path="/signup" component={withRouter(SignUp)} />
          <Route exact path="/parking" component={withRouter(Parking)} />
          <Route exact path="/home" component={UserDashboard} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
