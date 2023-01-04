import Gauge from "./Components/Gauge.jsx";
import Home from "./Components/Home";
import GaugeRed from "./Components/GaugeRed.jsx";
import { Route, Routes } from "react-router-dom";

const queryParams = new URLSearchParams(window.location.search);
const value = queryParams.get("value");
const label = queryParams.get("label");
const units = queryParams.get("units");

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/gauge"
          element={<Gauge value={value} label={label} units={units} />}
        />
        <Route
          path="/gauge2"
          element={<GaugeRed value={value} label={label} units={units} />}
        />
      </Routes>
    </>
  );
}

export default App;
