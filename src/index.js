import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Home from "./pages/Home.jsx";
import Apartment from "./pages/Apartment.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/About.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/Root.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <Root>
                <Home />
            </Root>
    },
    {
        path: '/apartment/:id',
        element:
            <Root>
                <Apartment />
            </Root>
    },
    {
        path: '/about',
        element:
            <Root>
                <About />
            </Root>
    },
    {
        path: '*',
        element:
            <Root>
                <PageNotFound />
            </Root>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);