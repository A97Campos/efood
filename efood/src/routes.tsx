import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { LaDolce } from "./pages/LaDolceVita"

export const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ladolcevita" element={<LaDolce />} />
    </Routes>
)