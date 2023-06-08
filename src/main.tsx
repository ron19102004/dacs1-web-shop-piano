import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/module.routes'
import './global.scss'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store.redux'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
