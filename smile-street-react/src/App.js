import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

// import Volunteermatches from "./components/Volunteermatches/Volunteermatches";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Registration from "./components/Registration/Registration";

import VolunteerInterests from "./components/VolunteerInterests/VolunteerInterests";
import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import VolunteerAvaiblity from "./components/VolunteerAvaiblity/VolunteerAvaiblity.js";


function App() {
  return (
    <div className="App">

      <Header />
      <Login />
      {/* <GoodCauseOpportunity />

      <GoodCauseDetails />
      <VolunteerInterests />
      <VolunteermatchesYesNoButton />
      <PasswordRecovery /> */}
      <Registration />




    </div>
  );
}

export default App;
