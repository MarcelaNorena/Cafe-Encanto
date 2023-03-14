import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../MainLayout'



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

            </Route>
        </Routes>
    )
}

export default Router