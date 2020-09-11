import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InfoPanel from './Components/InfoPanel';
import StatsView from './Components/StatsView';
import Navbar from './Components/Navbar';


function App() {
  const [screenType, setScreenType] = useState(0);
  return (
    <div className="App">
        <Navbar screenType={setScreenType}/>
        <InfoPanel currentScreen={screenType}/>
    </div>
  );
}

export default App;
