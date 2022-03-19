import React, {useState} from 'react';
import './App.css';
import { Header } from './components/Header/index.jsx';
import { Main } from './components/Main/index.jsx';
import { Footer } from './components/Footer/index.jsx';

  function App() {

    const [position, setPosition] = useState();

    const lockMenu = () => {
      setPosition({position:'fixed'});
    };
    

    const unlockMenu = () => {
      setPosition({position:'initial'});
    };

  return (
    <div className="App" style={position}>
      <Header lockMenu={lockMenu} unlockMenu={unlockMenu} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
