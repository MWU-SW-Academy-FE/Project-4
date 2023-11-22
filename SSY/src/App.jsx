import { Link, Route } from "react-router-dom"
import ListPage from "./assets/pages/ListPage"
import WritePage from "./assets/pages/WritePage"

function App() {

  return (
    <>
      <header className="flex">
        <a className="font-bold" href="/list">리스트</a>
        //
        <a className="font-bold" href="/write">작성</a>
      </header>
      {/* <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/write" element={<WirtePage />}/>
        <Route path="*" element={<Navigator to="/list" />}/>
    </Routes> */}
    </>
  )
}

export default App;
