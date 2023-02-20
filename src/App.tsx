import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import { ThemeProvider } from '@mui/material'
import { theme } from './contants/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
