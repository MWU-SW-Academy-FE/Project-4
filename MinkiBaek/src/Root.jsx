import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
// 진입점역할을할곳

function Root() {
    return ( 
    <BrowserRouter>
    <Header />
        <App />
    <Footer />

    </BrowserRouter>
    );
}

export default Root;