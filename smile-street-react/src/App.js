import "./App.css";
import Header from "./components/Header/Header";
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseMatches from "./components/GoodCauseMatches/GoodCauseMatches";
import Login from "./components/Login/Login";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import VolunteerAvaiblity from "./components/VolunteerAvaiblity/VolunteerAvaiblity";
import VolunteerInterests from "./components/VolunteerInterests/VolunteerInterests";
import VolunteerMatches from "./components/VolunteerMatches/VolunteerMatches";
import GoodCauseOpporunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import Registration from "./components/Registration/Registration";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <VolunteerMatches />
      <Router>
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="VolunteerMatches" exact component={VolunteerMatches} />
      </Router>
    </div>
  );
}
