import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRouteElements from './useRouteElements'
import { useContext, useEffect } from 'react'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/app.context'
import ErrorBoundary from './pages/ErrorBoundary'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const routeElements = useRouteElements()
  const { reset } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  return (
    <div>
      <HelmetProvider>
        <ErrorBoundary>
          {routeElements}
          <ToastContainer />
        </ErrorBoundary>
      </HelmetProvider>
    </div>
  )
}

export default App
