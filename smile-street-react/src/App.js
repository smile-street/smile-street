import "./App.css";
import Header from "./components/Header/Header";
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import Login from "./components/Login/Login";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Registration from "./components/Registration/Registration";
import VolunteerAvaiblity from "./components/VolunteerAvaiblity/VolunteerAvaiblity";
import VolunteerInterests from "./components/VolunteerInterests/VolunteerInterests";
import VolunteerMatches from "./components/VolunteerMatches/VolunteerMatches";

function App() {
  return (
    <div className="App">
      <Header />
      <VolunteerAvaiblity />
      {/* <GoodCauseDetails /> */}
      {/* <GoodCauseOpportunity /> */}
      {/* <Login />
      <PasswordRecovery />
      <Registration />
     
      <VolunteerInterests />
      <VolunteerMatches /> */}
    </div>
  );
}

export default App;
