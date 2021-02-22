import "./App.css";
import Login from "./components/Login/Login";
import VolunteermatchesYesNoButton from "./components/VolunteerMatches/VolunteerMatches";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Registration from "./components/Registration/Registration";
import Header from "./components/Header/Header";
import VolunteerInterests from "./components/VolunteerInterests/VolunteerInterests";
import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import VolunteerAvaiblity from "./components/VolunteerAvaiblity/VolunteerAvaiblity.js";

function App() {
  return (
    <div className="App">
      <Header />
      <GoodCauseOpportunity />
      {/* <VolunteerAvaiblity /> */}
      {/* <Login />
      <GoodCauseOpportunity />
      <GoodCauseDetails />
      <VolunteerInterests />
      <VolunteermatchesYesNoButton />
      <Registration />
      <PasswordRecovery /> */}
    </div>
  );
}

export default App;
