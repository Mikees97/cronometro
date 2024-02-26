import React, { useState } from 'react'

export default function App() {
 
//setTimeout(() => {
//alert("Boa tarde pessoal");
// }, 4000);
// -----------

// setInterval(() => {
//   console.log("Boa tarde");
//   }, 3000);
// ------------

//const [numero, setNumero] = useState (0);

//function adicionar(){
//  if(numero<10) {
//  setNumero(numero + 2);
//}
//}
// --------------


  const [valor, setValor] = useState(0);
  const [pare, setPare] = useState();

  function start (){
    const time = setInterval(() => {
     setValor ((valor) => valor + 1 ); 
    }, 1000);

    setPare(time)
  }

function pause (){
clearInterval(pare);

}
function reset (){
  setValor (0);
} 

  return (
    <>
    <h2>Tempo: {valor}</h2>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    </>
  );
}
