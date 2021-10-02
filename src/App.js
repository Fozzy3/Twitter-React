import './App.css';
import Home from './components/Home';
import Noticias from './components/Noticias';
import Principal from './components/Principal';


function App() {
  return (
        <div className="container">
          <Home/>
          <Noticias/>
          <Principal/>
        </div>
  );
}

export default App;
