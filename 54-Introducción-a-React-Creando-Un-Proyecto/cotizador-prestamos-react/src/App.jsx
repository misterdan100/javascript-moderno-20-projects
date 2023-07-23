import { useState } from 'react';
import Header from "./components/Header";

function App() {
  const [ cantidad, setCantidad ] = useState(10000);

  function handleCantidad(e) {
    console.log(+e.target.value)
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10 rounded-xl">
      <Header />

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleCantidad}
      />
      
    </div>
  )
}

export default App
