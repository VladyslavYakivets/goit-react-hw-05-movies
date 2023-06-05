import { apiCast } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastImg, CastList, ListItem } from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState([]);
  const imgURL = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const responce = await apiCast(movieId);
        setDataCast(responce);
      } catch (error) {}
    };
    fetchFilm();
  }, [movieId]);
  return (
    <CastList>
      {dataCast.length > 1 ? (
        dataCast.map(({ name, profile_path, id }) => {
          return (
            <ListItem key={id}>
              <CastImg
                src={profile_path ? `${imgURL}${profile_path}` : `Actor`}
                alt="actor"
              />
              <p>{name}</p>
            </ListItem>
          );
        })
      ) : (
        <h3>Sorry,no info about cast</h3>
      )}
    </CastList>
  );
};

export default Cast;
