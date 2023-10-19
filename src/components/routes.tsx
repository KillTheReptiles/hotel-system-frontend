import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import SideNav from './SideNav/sidenav';
import { NavBar } from './NavBar/navbar';

function AppRoutes() {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <div className="grow flex flex-col ">
        <div>
          <NavBar />
        </div>
        <div className="m-4 p-4 bg-white grow rounded-xl shadow">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default AppRoutes;
