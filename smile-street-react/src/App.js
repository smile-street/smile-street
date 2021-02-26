import "./App.css";
import Header from "./components/Header/Header";
import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseMatches from "./components/GoodCauseMatches/GoodCauseMatches";
import Login from "./components/Login/Login";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Registration from "./components/Registration/Registration";
import VolunteerAvaiblity from "./components/VolunteerAvaiblity/VolunteerAvaiblity";
import VolunteerInterests from "./components/VolunteerInterests/VolunteerInterests";
import VolunteerMatches from "./components/VolunteerMatches/VolunteerMatches";
import GoodCauseOpporunity from "./components/GoodCauseOpportunity/GoodCauseOpportunity";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PasswordRecovery />
      <Login />
      {/* 
      <Registration />
      <VolunteerAvaiblity />
      <VolunteerInterests />
      <GoodCauseDetails />
      <GoodCauseOpporunity />
      <VolunteerMatches />
      <GoodCauseMatches /> */}
    </div>
  );
}
