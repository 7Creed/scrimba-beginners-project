import scrimbaLogo from "./assets/Scrimba-logo.png";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <a href="" target="">
        <img src={scrimbaLogo} className="logo" alt="Scrimba logo" />
      </a> */}
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
