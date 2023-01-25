import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth, Home, Projects } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
