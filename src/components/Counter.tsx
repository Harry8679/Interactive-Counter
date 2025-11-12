import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Compteur Interactif</h1>
        <p className="text-2xl font-bold text-blue-600">{count}</p>
        <button onClick={() => setCount(count + 1)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Incrementer
        </button>
    </div>
  )
}

export default Counter;