import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderPage from "../componentes/HeaderPage";
import HomePage from "../componentes/HomePage";
import DashboardPage from "../componentes/DashboardPage";
import AboutPage from "../componentes/AboutPage";

const navegacion = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<HeaderPage/>} />
				<Route path="/HomePage" element={<HomePage />} />
				<Route path="/DashboardPage" element={<DashboardPage/>} />
                <Route path="/AboutPage" element={<AboutPage/>} />
			</Routes>
		</BrowserRouter>
  )
}

export default navegacion