import { Route, Routes } from 'react-router-dom';
import './index.css';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

function App() {
  return (
     <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/writepage" element={<WritePage/>} />
      </Routes>
  );
}
    
    
    
  


export default App
