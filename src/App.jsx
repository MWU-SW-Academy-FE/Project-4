import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ListPage from "../page/ListPage";
import WritePage from "../page/WrightPage";
import Home from "../page/Home";
import Header from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="*" element={<Navigate to="/list" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
