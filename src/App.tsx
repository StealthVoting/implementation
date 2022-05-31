import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import CreateVoter from "./components/preVoting/CreateVoter";
import PhaseOne from "./components/voting/phaseOne/PhaseOne";
import PhaseTwo from "./components/voting/phaseTwo/PhaseTwo";
import './App.css'
import Stats from "./components/afterVoting/Stats";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create-voter" element={<CreateVoter />} />
        <Route path="phase-one" element={<PhaseOne />} />
        <Route path="phase-two" element={<PhaseTwo />} />
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
