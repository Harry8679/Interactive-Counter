import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-200'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>Gerer les etats avec React</h1>
      <Counter />
    </div>
  )
}

export default App
