import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import NotFound from './pages/NotFound'
import './index.css'

// On page refresh, always redirect to home page
const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
const isReload = navEntries.length > 0 && navEntries[0].type === 'reload'

if (isReload && window.location.pathname !== '/') {
  window.location.replace('/')
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  )
}

