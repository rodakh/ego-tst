import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import GlobalStyles from './GlobalStyles'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
