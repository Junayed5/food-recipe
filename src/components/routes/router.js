import { createBrowserRouter } from "react-router-dom";
import AddRecipe from "../../pages/AddRecipe";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import MyRecipe from "../../pages/MyRecipe";
import RecipeDetail from "../../pages/RecipeDetail";
import Registration from "../../pages/Registration";
import Main from "../layout/Main";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/add-recipe",
        element: <AddRecipe />
    },
    {
        path: "/my-recipe",
        element: <MyRecipe />
    },
    {
        path: "/detail-recipe/:id",
        element: <RecipeDetail />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Registration />
    }
])
export default router;