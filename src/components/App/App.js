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
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/movies"
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route path="/saved-movies"
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route path="/profile"
          element={
            <Profile />
          }
        />

        <Route path="/signin"
          element={
            <>
              <Auth formStyle="login" />
              <InfoTooltip isOk={true} message="Все получилось!" /> {/* для демонстрации */}
            </>
          }
        />
        <Route path="/signup"
          element={
            <Auth formStyle="register" />
          }
        />

        <Route path="/signout"
          element={
            <PageNotFound />
          }
        />
        {/* <Preloader/> */}
      </Routes>
    </div>
  );
}

export default App;
