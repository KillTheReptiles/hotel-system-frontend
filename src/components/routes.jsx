import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/home';

function AppRoutes() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
