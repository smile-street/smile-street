import './App.css';
import Header from './components/Header/Header';
// import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseMatches from './components/GoodCauseMatches/GoodCauseMatches';
// import Login from "./components/Login/Login";
// import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
// import VolunteerInterests from './components/VolunteerInterests/VolunteerInterests';
import GoodCauseOpporunity from './components/GoodCauseOpportunity/GoodCauseOpportunity';
import Registration from './components/Registration/Registration';
import VolunteerMatches from './components/VolunteerMatches/VolunteerMatches';
// import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import VolunteerAvailability from './components/VolunteerAvaiblity/VolunteerAvailability';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Login from './components/Login/Login';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/Registration" exact component={Registration} />
      </Router>
      {/* <GoodCauseOpporunity />
      <VolunteerMatches /> */}
      {/* <GoodCauseMatches /> */}
      {/* <VolunteerAvailability/> */}
      {/* <Router>
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="/Registration" exact component={Registration} />
        <Route path="/PasswordRecovery" exact component={PasswordRecovery} />
      </Router> */}
    </div>
  );
}
