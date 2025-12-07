import { HashRouter, Routes, Route } from 'react-router-dom';
// ... imports

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="App">
          <Header />
          {/* ... */}

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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
