import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import CreateVoter from "./components/preVoting/CreateVoter";
import PhaseOne from "./components/voting/phaseOne/PhaseOne";
import PhaseTwo from "./components/voting/phaseTwo/PhaseTwo";
import './App.css'
import Stats from "./components/afterVoting/Stats";
import CreateParty from "./components/preVoting/CreateParty";
import { blindVoting, initEther } from "./utils/ethers";
import Success from "./components/afterVoting/Success";

function App() {
  const [loadVoting, setBlindVoting] = useState(false);

  useEffect(() => {
    initEther()
      .then(() => {
        console.log("Etherjs initialized");
        setBlindVoting(true);
      })
      .catch(() => {
        console.error("Etherjs cannot be initialized");
      });
  }, [])

  if (blindVoting == null) {
    return (
      <div className="">Loading Etherjs</div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create-voter" element={<CreateVoter />} />
        <Route path="phase-one" element={<PhaseOne />} />
        <Route path="phase-two" element={<PhaseTwo />} />
        <Route path="success" element={<Success />} />
        <Route path="stats" element={<Stats />} />
        <Route path="admin">
          <Route index element={<Home />} />
          <Route path="create-party" element={<CreateParty />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
