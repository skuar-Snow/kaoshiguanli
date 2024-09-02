import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { HashRouter as Router } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
