import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./pages/Login";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )

}