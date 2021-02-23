import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import VolunteerMatches from "./components/VolunteerMatches/VolunteerMatches";
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
      <VolunteerMatches />




    </div>
  );
}

export default App;
