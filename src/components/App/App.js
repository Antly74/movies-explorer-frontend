import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { auth } from '../../utils/Auth';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({loggedIn: true});

  // при подключении компонената
  useEffect(() => {
    // Если есть LoggedIn, то пробуем достать с сервера данные пользователя
    if (localStorage.getItem('loggedIn')) {
      auth.getUserInfo()
        .then((data) => {
          setCurrentUser(curr => {return {...curr, loggedIn: true, name: data.name, email: data.email, _id: data._id}});
        })
        .catch(() => {
          navigate('/');
        });
    } else {
      setCurrentUser(curr => {return {loggedIn: false}});
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/signout') {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('filteredMovies');
      localStorage.removeItem('filterString');

      auth.logout()
        .catch((err) => console.log(err))
        .finally(() => navigate('/')); // неважно с ошибкой или нет, переходим на домашнюю
      setCurrentUser(curr => {return {...curr, loggedIn: false, email: ''}});
    }
  }, [location]);

  function handleLogin() {
    localStorage.setItem('loggedIn', 'yes');
    setCurrentUser(curr => {return {...curr, loggedIn: true}});
    navigate('/movies');
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/"
            element={
              <>
                <Header />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route index element={<Main />} />
            <Route element={<ProtectedRoute />}>
              <Route path="movies" element={<Movies />} />
              <Route path="saved-movies" element={<SavedMovies />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          <Route path="/signin" element={<Auth formStyle="login" onSubmit={handleLogin}/>} />
          <Route path="/signup" element={<Auth formStyle="register" onSubmit={handleLogin} />} />
          <Route path="/signout" element={<></>} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
