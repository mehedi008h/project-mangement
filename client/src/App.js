import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth, Home, ProjectDetails, Projects } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                {/* project  */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
