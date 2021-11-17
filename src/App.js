import logo from './logo.svg';
import './App.css';

import image from "./Profile"
import Profile from "./Profile"
import FullName from './FullName';
import Adresse from './Address';
function App() {
  return (
    <div className="App">
     <Profile/>
     <FullName/>
     <Adresse/>
    </div>
  );
}

export default App;
