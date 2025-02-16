import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movies";
import { Contact } from "./pages/Contact";
import AppLayout from "./layout/AppLayout";
import "./App.css"


export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/movie",
                    element: <Movie />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
};