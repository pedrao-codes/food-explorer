import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { DishForm } from "../pages/DishForm";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/dish/create" element={<DishForm create={true} />} />
            <Route path="/dish/edit/:id" element={<DishForm create={false} />} />
        </Routes>
    )
}