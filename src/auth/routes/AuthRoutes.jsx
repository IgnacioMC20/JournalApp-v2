import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'


export const AuthRoutes = () => (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Cualquier otra ruta que no este, redirecciona a la ruta que digamos */}
        <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
)
