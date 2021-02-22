import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import VendingMachine from './VendingMachine';
import AdminPanel from './AdminPanel';

function App() {
  const [render, setRender] = useState(false);
  let toggleAdmin = (val) => {
    setRender(val);
    console.log(val);
  }
  return (
    <div className="App">
      {render && <AdminPanel toggleAdmin={toggleAdmin} />}
      {!render && <VendingMachine toggleAdmin={toggleAdmin} />}
      {/* <VendingMachine /> */}
    </div>
  );
}

export default App;
