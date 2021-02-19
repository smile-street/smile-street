import "./App.css";
// import Login from "./components/Login/Login";
import Header from "./components/Header/Header.js";
import GoodCauseVolunteerRegistration from "./components/GoodCause-Voluenteer-Registration/GoodCauseVolunteerRegistration.js";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <GoodCauseVolunteerRegistration />
    </div>
  );
}

export default App;
