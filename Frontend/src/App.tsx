import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SettingsRout from './router/SettingsRout';
import AuthRout from './router/AuthRout';
import Collection from './pages/Collection';
import { useAuth } from './context/AuthContext';
import { Toaster } from 'sonner';

function App() {

  const { userData } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>

        //! General routs
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collection />} />

        //! Authentication
          <Route path='/auth' element={!userData ? <Navigate to={"/auth/login"} /> : <Navigate to={"/collections"} />} />
          <Route path='/auth/*' element={!userData ? <AuthRout /> : <Navigate to={"/collections"} />} />

        //! Settings
          <Route path='/settings' element={userData ? <Navigate to={"/settings/general"} /> : <Navigate to={"/auth/login"} />} />
          <Route path='/settings/*' element={userData ? <SettingsRout /> : <Navigate to={"/auth/login"} />} />

        </Routes>
      </BrowserRouter>
      <Toaster expand={false} position='bottom-right' closeButton/>
    </>
  );
}
export default App;