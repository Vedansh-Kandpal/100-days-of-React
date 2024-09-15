import { useState } from 'react'
import Counter from './counter'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Counter />
      </div>
    </>
  )
}
