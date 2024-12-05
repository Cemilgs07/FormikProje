import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import GeneralForm from "./assets/Components/GeneralForm";
import PortalForm from "./assets/Components/PortalForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<GeneralForm />} />
        <Route path={"/Portal"} element={<PortalForm />} />
      </Routes>
    </>
  );
}

export default App;
