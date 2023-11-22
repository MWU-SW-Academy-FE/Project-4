import { useState } from 'react'
import ListPage from './pages/ListPage'
import WritePage from './pages/WritePage'
import { NavLink } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <a href="/list">리스트</a>
      <a href="/write">작성</a>
    </header>
 
 
  {/*  <Routes>
      <Route path="/list" element={<ListPage/>} />
      <Route path="/wrtie" element={<WritePage/>} />
        첫페이지는 무조건 아래로 접속한다.
      <Route path="*" element={<Navigate to="/list"/>}/>
      </Routes>
  */ }
    
    
    
    
    
    </>
  )
}

export default App
