//import logo from "./logo.svg";
import "./App.scss";
// import "antd/dist/antd.css";
import "antd/dist/reset.css";

// import { Homepage } from "./Homepage.js";
import { Orderflow } from "./Orderflow.js";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Orderflow />
    </div>
  );
}
export default App;
