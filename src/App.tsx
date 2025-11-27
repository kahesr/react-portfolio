import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { ToastContainer } from './hooks/useToastContainer';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Works } from './pages/Works';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
