import './App.css';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      {/* <PageNotFound/> */}
      {/* <Preloader/> */}
    </div>
  );
}

export default App;
