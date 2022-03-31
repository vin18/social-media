import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StartPage from './components/StartPage';

const App = () => {
  return (
    <div className="bg-yellow-50">
      <Router>
        <Navbar />
        <div
          className="container mx-auto my-5 px-8 md:px-12 lg:px-18 "
          style={{ minHeight: '80vh' }}
        >
          <Routes>
            <Route path="/" element={<StartPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
