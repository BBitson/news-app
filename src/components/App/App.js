import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage";
import TopBar from "../TopBar/TopBar";
import TickerPage from "./../TickerPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <TopBar />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "ticker/:ticker",
                    element: <TickerPage />,
                },
            ],
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
