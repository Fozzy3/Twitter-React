import "./App.css";
import Home from "./components/Home";
import Noticias from "./components/Noticias";
import Principal from "./components/Principal";
import Tweets from "./components/Test";

function App() {
  return (
    <div className="container">
      <Home />
      <div className="noticias">
        <Noticias />
        <Tweets />
      </div>
      <Principal />
    </div>
  );
}

export default App;
