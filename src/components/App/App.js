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


function App() {
  return (
    <div className="page">
      {/* <Header /> */}
      {/* <Auth formStyle="register" /> */}
      <Auth formStyle="login" />
      {/* <Movies /> */}
      {/* <SavedMovies /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <PageNotFound/> */}
      {/* <Preloader/> */}
    </div>
  );
}

export default App;
