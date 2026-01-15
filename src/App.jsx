import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import NavBar from './layout/NavBar.jsx'
import Main from './layout/Main.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
