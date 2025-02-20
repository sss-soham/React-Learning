import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movies";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./layout/AppLayout";
import "./App.css"
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./UI/MovieCards";
import { getMoviesDetails } from "./api/GetMovieDetails";


export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <ErrorPage />,
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
                    loader: getMoviesData,
                },
                {
                    path: "/movie/:movieID",
                    element: <MovieDetails />,
                    loader: getMoviesDetails,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                    action: contactData,
                },
            ]
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
};