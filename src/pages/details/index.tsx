import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { API_KEY } from '../../config/key';
import { Container, Footer, Info } from './styles';

interface MovieDetails {
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  name: string;
  first_air_date: string;
  overview: string;
  runtime: number;
  status: string;
}

export default function Details() {
  const router = useRouter();
  const [details, setDetails] = useState<MovieDetails>({} as MovieDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovieDetails() {
      if (router.query.id) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=${API_KEY}&language=en-US`
        );

        setDetails(response.data);
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [router]);

  function goBack() {
    router.push('/trending');
  }

  if (loading) {
    return <h1 style={{ color: 'white' }}>Loading...</h1>;
  }

  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        alt='movie'
      />
      <Info>
        <div>
          <h1>{details.title || details.name}</h1>
          <div>
            <FaStar fontSize={26} />
            <span>{details.vote_average.toFixed(1)}</span>
          </div>
        </div>
        <span className='overview'>{details.overview}</span>
        <Footer>
          <span>{details.release_date}</span>
          <span>{details.runtime} min</span>
        </Footer>
        <span className='status'>Status: {details.status}</span>

        <button onClick={goBack}>Back</button>
      </Info>
    </Container>
  );
}
