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
import MultiStepMain from './components/MultiStepMain';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <MultiStepMain />
      {/* <Router>
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="/Registration" exact component={Registration} />
        <Route path="/PasswordRecovery" exact component={PasswordRecovery} />
      </Router>
      <VolunteerAvailability />
      <VolunteerInterests />

      <GoodCauseDetails />
      <GoodCauseOpportunity />
      <GoodCauseMatches /> */}
    </div>
  );
}
