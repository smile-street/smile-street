import "./App.css";
import Login from "./components/Login/Login";
import VolunteermatchesYesNoButton from "./components/Volunteermatches/VolunteermatchesYes-No-Button";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import GoodCauseVolunteerRegistration from "./components/GoodCause-Voluenteer-Registration/GoodCauseVolunteerRegistration";
import Header from "./components/Header/Header";

import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";

import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";


function App() {
  return (
    <div className="App">
      <Header />

      <GoodCauseOpportunity />

	  <GoodCauseDetails/>

      <Login />
      <VolunteermatchesYesNoButton />
      <GoodCauseVolunteerRegistration />
      <PasswordRecovery />
    </div>
  );
}

export default App;
