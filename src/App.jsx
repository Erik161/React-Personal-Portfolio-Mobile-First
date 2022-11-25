import { useState } from 'react';
import './index.scss';
import Header from './components/Header/Header';
import Lmain from './components/Lmain/Lmain';

function App() {
  return (
    <div className="App">
      <Header/>
      <Lmain/>
    </div>
  )
}

export default App
