//import logo from "./logo.svg";
import "./App.scss";
import "antd/dist/antd.css";
//import { Homepage } from "./Homepage.js";
import { Paymentform } from "./Paymentform.js";

// Steps at ant design
//https:ant.design/components/steps/

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Paymentform />
    </div>
  );
}

export default App;
