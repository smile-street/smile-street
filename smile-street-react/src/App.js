import "./App.css";
import Login from "./components/Login/Login";
import VolunteermatchesYesNoButton from "./components/VolunteerMatches/VolunteerMatches";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Registration from "./components/Registration/Registration";
import Header from "./components/Header/Header";
import VolunteerInterests from "./components/VolunteerInterests/VolunteerInterests";
import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import InterestSquares from "./components/VolunteerInterests/InterestSquares";

function App() {
  return (
    <div className="App">

      <Header />
      <Login />
      <GoodCauseOpportunity />
      <GoodCauseDetails />
      <VolunteerInterests />
      <VolunteermatchesYesNoButton />
      <Registration />
      <PasswordRecovery />

    </div>
  );
}

export default App;
