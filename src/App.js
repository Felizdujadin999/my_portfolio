import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Homepage from './pages/homepage';
import Projectpage from './pages/projectpage';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='//projectpage' element={<Projectpage />} />
          </Routes>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
