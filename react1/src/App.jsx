import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./reactRouter/pages/Home";
import { About } from "./reactRouter/pages/About";
import { Movie } from "./reactRouter/pages/Movies";
import { Contact } from "./reactRouter/pages/Contact";
import AppLayout from "./reactRouter/layout/AppLayout";

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
                    path: "/movies",
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