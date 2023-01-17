import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import ProvideLayout from './contexts/useLayout';
import LoadingEllipsis from './components/loadingEllipsis';
const Routes = lazy(() => import('./routes'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingEllipsis />}>
      <ProvideLayout>
        <Routes />
      </ProvideLayout>
    </Suspense>
  </React.StrictMode>,
)
