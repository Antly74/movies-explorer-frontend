import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <main className="page-not-found">
      <h1 className="page-not-found__header">404</h1>
      <h2 className="page-not-found__desc">Страница не найдена</h2>
      <button className="page-not-found__back link link_style_blue" onClick={handleClick}>Назад</button>
    </main>
  );
}

export default PageNotFound;
