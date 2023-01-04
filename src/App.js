import Gauge from "./components/Gauge.jsx";

const queryParams = new URLSearchParams(window.location.search);
const value = queryParams.get("value");
const label = queryParams.get("label");
const units = queryParams.get("units");

function App() {
  return <Gauge value={value} label={label} units={units} />;
}

export default App;
