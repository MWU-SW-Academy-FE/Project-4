import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
// 진입점역할을할곳

function Root() {
    return ( 
    <BrowserRouter>
    <div style={{ marginLeft: '300px', marginRight: '300px' }}>
    <Header />
        <App />
    <Footer />
    </div>
    </BrowserRouter>
    );
}

export default Root;