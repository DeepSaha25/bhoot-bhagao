import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

const App = lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-amber-50" />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
