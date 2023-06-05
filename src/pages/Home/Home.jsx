import { useState, useEffect } from 'react';
import { FilmList } from 'components/FilmList/FilmList';
import api from 'Api';
const Home = () => {
  const [searchFilm, setSearchFilm] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const responce = await api();
        setSearchFilm(responce);
      } catch (error) {
        console.log(`Error ${error.status}`);
      }
    };
    fetchFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {searchFilm.length > 0 && <FilmList searchFilm={searchFilm} />}
    </>
  );
};

export default Home;
