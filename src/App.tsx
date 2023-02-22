import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import { ThemeProvider } from '@mui/material'
import { theme } from './contants/theme'
import GlobalStyles from './GlobalStyles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
