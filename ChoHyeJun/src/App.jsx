import { Routes, Route, Navigate } from "react-router-dom";
import History from "./pages/History";
import Main from "./pages/Main";
import { Button } from "@mui/material";
import Nav from "./components/Header";


function App() {
	return (
		<>
			<Nav />
			<Button variant="contained">123</Button>
			<Routes>
				<Route path="/history" element={<History />} />
				<Route path="/" element={<Main />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}

export default App;
