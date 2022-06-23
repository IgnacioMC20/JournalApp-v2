import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';

export const JournalApp = () => (
    <BrowserRouter>
        <AppTheme>
            <AppRouter />
        </AppTheme>
    </BrowserRouter>
)
