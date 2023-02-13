import { useState } from 'react'
import { Navigation } from './routes/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
    </div>
  )
}

export default App
