import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../MainLayout'
import Menu from '../../components/Menu'
import Categoria from '../../components/NuestroCafe'


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Menu />} />
                <Route path='/nuestro-cafe' element={<Categoria />} />
            </Route>
        </Routes>
    )
}

export default Router