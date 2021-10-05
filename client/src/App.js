import { useState } from 'react';

const App = () => {
  const [numero, setNumero] = useState(0);
const dec = () => { setNumero ( prev => prev-1 ) };
const inc = () => { setNumero ( prev => prev+1 ) };
const rest = () => { setNumero (0) };
  return (
    <div>
      <h1> {numero} </h1>
      <button onClick={inc} > + </button>
      <button onClick={dec} > - </button>
      <button onClick={rest} > rest </button>
    </div>
  );
};

export default App;
