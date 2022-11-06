import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Menu from "./Menu";

const MainApp = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Restaurant</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Reserve</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Sign up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Login</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/menu" element={<Menu/>}/>
            </Routes>
        </>
    )
}

export default MainApp