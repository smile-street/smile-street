import "./App.css";
import Login from "./components/Login/Login";
import Volunteermatches from "./components/Volunteermatches/Volunteermatches";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import GoodCauseVolunteerRegistration from "./components/GoodCause-Voluenteer-Registration/GoodCauseVolunteerRegistration";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Volunteermatches />
      <GoodCauseVolunteerRegistration />
      <PasswordRecovery />
    </div>
  );
}

export default App;
