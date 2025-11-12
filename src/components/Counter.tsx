import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">Compteur Interactif</h1>
        <p className="text-2xl font-bold text-blue-600">{count}</p>
        <div className="flex justify-center gap-2">
          <button onClick={decrement} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition">
            Decrementer
          </button>
          <button onClick={reset} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
          Reinitialiser
        </button>
        <button onClick={increment} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Incrementer
        </button>
        </div>
    </div>
  )
}

export default Counter;