import { Container, Info } from './styles';
import { FaStar } from 'react-icons/fa';
import { Movie } from '../../pages/trending';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface CardMovieProps {
  data: Movie;
}

export default function CardMovie({ data }: CardMovieProps) {
  return (
    <Link
      href={{
        pathname: '/details',
        query: { id: data.id },
      }}
    >
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt='movie'
        />

        <span>{data.title || data.name}</span>

        <Info>
          <p>{data.release_date || data.first_air_date}</p>
          <div>
            <FaStar fontSize={12} />
            <p>{data.vote_average.toFixed(1)}</p>
          </div>
        </Info>
      </Container>
    </Link>
  );
}
