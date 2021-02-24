import "./App.css";
import Header from "./components/Header/Header";
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseMatches from "./components/GoodCauseMatches/GoodCauseMatches";
import GoodCauseOpportunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";
import Login from "./components/Login/Login";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Registration from "./components/Registration/Registration";
import VolunteerAvaiblity from "./components/VolunteerAvaiblity/VolunteerAvaiblity";
import VolunteerInterests from "./components/VolunteerInterests/VolunteerInterests";
import VolunteerMatches from "./components/VolunteerMatches/VolunteerMatches";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PasswordRecovery />
      {/* <GoodCauseDetails /> */}
      {/* <Registration /> */}
      {/* <VolunteerAvaiblity /> */}
      {/* <GoodCauseDetails /> */}
      {/* <GoodCauseOpportunity />
      <Login />
     
    
      <VolunteerInterests />
      <VolunteerMatches />
      <GoodCauseMatches /> */}
    </div>
  );
}
