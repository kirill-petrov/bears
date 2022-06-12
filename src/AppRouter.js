import React from 'react';
import { Routes, Route } from "react-router-dom"
import { privateRoutes, publicRoutes } from './router';

const AppRouter = () => {

    const user = false

    return (
        user
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element={<route.element />}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.element />}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    )
};

export default AppRouter;