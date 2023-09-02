import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import AddNotePage from "../pages/AddNotePage";

const App = () => {
    return(
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/notes/detail/:id" element={<DetailPage />} />
                    <Route path="/notes/add" element={<AddNotePage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;