import ListPage from "./pages/ListPages";
import WritePage from "./pages/WritePage";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <>
      <header className="flex">
        <a className="font-bold p-3 hover:text-red-500" href="/list">리스트</a>
        //
        <a className="font-bold p-3 hover:text-red-500" href="/wirte">작성</a>
      </header>
      {/* <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/write" element={<WritePage/>} />
        <Route path="*" element={<Navigate to="/list"/>}/>
      </Routes> */}
    </>
  )
}

export default App
