import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./views/Index";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;