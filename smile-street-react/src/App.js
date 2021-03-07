import './App.css';
import Header from './components/Header/Header';
// import GoodCauseDetails from "./components/GoodCauseDetails/GoodCauseDetails";
import GoodCauseMatches from './components/GoodCauseMatches/GoodCauseMatches';
// import Login from "./components/Login/Login";
// import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import React from 'react';
import MaterialLayout from './components/Layout/MaterialLayout';
import FinalPage from './components/FinalPage/FinalPage';
export default function App() {
  return (
    <div className="App">
      <MaterialLayout>
        <FinalPage />
      </MaterialLayout>
    </div>
  );
}
