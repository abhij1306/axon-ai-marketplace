import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Learning from './components/Learning';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.scss';
import './styles/App.scss';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
