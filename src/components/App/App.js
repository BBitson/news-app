import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage";
import TopBar from "../TopBar/TopBar";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
    ]);

    return (
        <div className="App">
            <TopBar />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
