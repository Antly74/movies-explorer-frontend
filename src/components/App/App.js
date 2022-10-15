import './App.css';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { Outlet, Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useEffect, useState } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState({loggedIn: false});

  // при подключении компонената
  useEffect(() => {

    // Если есть LoggedIn, то пробуем достать с сервера данные пользователя
    if (localStorage.getItem('loggedIn')) {
      setCurrentUser(curr => {return {loggedIn: true}});
      // auth.getUserInfo()
      //   .then((data) => {
      //     setCurrentUser(curr => {return {...curr, loggedIn: true, email: data.email, _id: data._id}});
      //   })
      //   .catch((err) => {
      //     // console.log(`токен кривой: ${err} `);
      //     history.push('/signin');
      //   });
    }
  }, []);

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
            <Route path="movies" element={<Movies />} />
            <Route path="saved-movies" element={<SavedMovies />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/signin" element={<Auth formStyle="login" />} />
          <Route path="/signup" element={<Auth formStyle="register" />} />
          <Route path="/signout" element={<PageNotFound />} />
          {/* <Preloader/> */}
          {/* <InfoTooltip isOk={true} message="Все получилось!" /> */}
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
