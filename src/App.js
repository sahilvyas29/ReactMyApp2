import './App.css';
import Home from './Home';
import {createContext} from 'react';

const contex = createContext();

function App() {
  
  return (
    
    <contex.Provider value="Sahil">
      <div>
      <Home data={"Sahil"}/>
    </div>
    </contex.Provider>
  );
}

export default App;
export {contex};
