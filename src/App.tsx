
import { useTranslation } from 'react-i18next';
import './App.css'
import AppRouter from '../src/config/router/appRouter';
import './config/theme/useTheme.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback='...loading'>
      <AppRouter />
    </Suspense>

  )
}

export default App
