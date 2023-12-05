import ListPage from "./pages/ListPages";
import WritePage from "./pages/WritePage";
import {NavLink, Navigate, Route, Routes} from "react-router-dom";
import './index.css';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <header className="flex">
        <NavLink className="font-bold" to="/list">리스트</NavLink>
        <NavLink className="font-bold" to="/write">작성</NavLink>
      </header>
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element={<Navigate to="/list" />}/>
      </Routes>
    </>
  )
}

export default App