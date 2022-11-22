import { useState } from 'react';
import './index.css';
import Header from '../src/components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
    </div>
  )
}

export default App
