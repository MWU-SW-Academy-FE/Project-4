import { Link, Navigate, Route, Routes } from "react-router-dom"
import ListPage from "./pages/ListPage"
import WritePage from "./pages/WritePage"

function App() {
  return (
    <>
      <header className="flex">
        <p className="font-bold cursor-grab">리스트</p>
        <p className="font-bold cursor-grab"> 작성</p>
      </header>
      {/* <Routes>
        <Route path="/list" element={<ListPage />}/>
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element={<Navigate to="/list"/>} />
      </Routes> */}
      
    </>
  )
}

export default App
