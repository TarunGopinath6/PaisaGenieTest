import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoPage from "./components/common/NoPage";
import Header from "./components/common/Header"
import Footer from './components/common/Footer';

import RequireAuth from "./components/common/RequireAuth";

import Home from './pages/Home'
import SignIn from "./pages/Login";
import Dashboard from "./pages/Dashboard";


function App() {
    return (
        <div style={{ "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>

            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/login" element={<SignIn />}></Route>
                    
                    {/* Routes that require authentication to proceed */}

                    <Route exact path="/dash" element={<RequireAuth> <Dashboard /> </RequireAuth>}></Route>
                    <Route path="*" element={<NoPage />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
