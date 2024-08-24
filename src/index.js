import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Views/Home/home";
import About from "./Views/About/about";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    }
]);





root.render(<RouterProvider router={router}/>);


