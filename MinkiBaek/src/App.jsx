import { useState } from 'react'
import ListPage from './pages/ListPage'
import WritePage from './pages/WritePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ListPage />
     <WritePage />
    </>
  )
}

export default App
