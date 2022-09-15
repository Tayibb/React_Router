import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainCover from "./MainCover";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainCover />}>
                    <Route index element={<Home />} />
                    <Route path="/courses" element={<Home />} />
                    <Route path="/deals" element={<Home />} />
                    <Route path="/success" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
