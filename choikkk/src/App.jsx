import { NavLink } from "react-router-dom";
import ListPage from "./pages/ListPage"
import WritePage from "./pages/WritePage"

function App() {
  return (
    <>
      <header>
        <NavLink to="list" />
        <li>리스트</li>
        <li>작성</li>
      </header>
      <ListPage />
      <WritePage />
    </>
  )
}

export default App