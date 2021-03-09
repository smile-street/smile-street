import './App.css';
import Header from './components/Header/Header';
import GoodCauseDetails from './components/GoodCauseDetails/GoodCauseDetails';
import GoodCauseOpportunity from './components/GoodCauseOpportunity/GoodCauseOpportunity';
import GoodCauseMatches from './components/GoodCauseMatches/GoodCauseMatches';
import Login from './components/Login/Login';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import Registration from './components/Registration/Registration';
import VolunteerAvailability from './components/VolunteerAvaiblity/VolunteerAvailability';
import VolunteerInterests from './components/VolunteerInterests/VolunteerInterests';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import VolunteerMatches from './components/VolunteerMatches/VolunteerMatches';

export default function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="/Registration" exact component={Registration} />
        <Route path="/PasswordRecovery" exact component={PasswordRecovery} />
        <Route
          path="/VolunteerAvailability"
          component={VolunteerAvailability}
        />
        <Route path="/GoodCauseDetails" component={GoodCauseDetails} />
        <Route path="/VolunteerMatches" component={VolunteerMatches} />
      </Router> */}
      <VolunteerInterests />
      <GoodCauseOpportunity />
    </div>
  );
}
