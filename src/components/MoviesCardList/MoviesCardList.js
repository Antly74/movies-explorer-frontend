import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <MoviesCard />
      <MoviesCard isLiked={true}/>
      {/* <MoviesCard /> */}
      {/* <MoviesCard />
      <MoviesCard /> */}
      {/* <MoviesCard />
      <MoviesCard />
      <MoviesCard /> */}
      {/* <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard /> */}
    </div>
  );
}

export default MoviesCardList;
