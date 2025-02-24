import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MainLayout } from "./components/Layouts/MainLayout";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRQ } from "./pages/FetchRQ";
import "./App.css"


// creating react router
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/trad",
                element: <FetchOld />,
            },
            {
                path: "/rq",
                element: <FetchRQ />,
            }
        ]
    }
])


const App = () => {

    const queryClient = new QueryClient();
    return(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    )
};

export default App;