import { Route, Routes } from 'react-router-dom';
import './index.css';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

function App() {
  return (
     <Routes>
        <Route path="/" element={<WritePage />} />
        <Route path="/listpage" element={<ListPage/>} />
      </Routes>
  );
}
    
    
    
  


export default App
