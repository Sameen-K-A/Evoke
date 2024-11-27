import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SettingsRout from './router/SettingsRout';
import AuthRout from './router/AuthRout';
import Collection from './pages/Collection';
import { useAuth } from './context/AuthContext';

function App() {

  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        //! General routs
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collection />} />

        //! Authentication
        <Route path='/auth' element={!isAuth ? <Navigate to={"/auth/login"} /> : <Navigate to={"/"} />} />
        <Route path='/auth/*' element={!isAuth ? <AuthRout /> : <Navigate to={"/"} />} />

        //! Settings
        <Route path='/settings' element={isAuth ? <Navigate to={"/settings/general"} /> : <Navigate to={"/auth/login"} />} />
        <Route path='/settings/*' element={isAuth ? <SettingsRout /> : <Navigate to={"/auth/login"} />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;