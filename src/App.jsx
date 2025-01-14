import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './Pages/Contexts/AuthContext';  
import HomePage from './Pages/LandingPage/HomePage';
import Login from './Pages/AuthenticationPage/Login';
import Registration from './Pages/AuthenticationPage/Registration';
import { Toaster } from 'sonner';
import LogoImage from "/src/assets/images/2fa8fddc3b07465da808456a6a979854-free.png";
import VerifyEmails from './Components/VerifyEmails';
import VerifyEmail from './Components/VerifyEmail';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/DashboardsOutlets/Settings';
import Overview from './Pages/DashboardsOutlets/Overview';
import Vote from './Pages/DashboardsOutlets/Vote';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => link.addEventListener('click', handleScroll));

    return () => {
      anchorLinks.forEach(link => link.removeEventListener('click', handleScroll));
    };
  }, []);

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <AuthProvider>
      <Toaster richColors />
      <div>
        {!isDashboardRoute && (
          <nav className="flex items-center justify-between h-14 3xl:h-28">
            <div className="sm:ml-10 3xl:ml-16 2xl:ml-12">
              <img src={LogoImage} alt="Logo" className="h-12 w-20 rounded-md ml-2 3xl:w-44 3xl:h-24 3xl:mr-2" />
            </div>

            <div className="sm:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
                &#9776; {/* Consider using an icon library like react-icons */}
              </button>
            </div>

            <ul className="hidden sm:flex items-end justify-center gap-12 2xl:mr-32 sm:mr-10 3xl:text-4xl 3xl:mr-32">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>

            <ul
              className={`sm:hidden absolute top-16 left-0 w-full bg-white p-4 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out z-50`}
            >
              <li><Link className="block py-2" to="#homepage" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link className="block py-2" to="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link className="block py-2" to="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li><Link className="block py-2" to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
              <li><Link className="block py-2" to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
            </ul>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/verify-email' element={<VerifyEmails />} />
          <Route path='/verify-email/:token' element={<VerifyEmail />} />

          <Route path="/:contestId/vote" element={<Vote />} />  

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
