import axios from 'axios';
import { useEffect, useState } from 'react';
import CardMovie from '../../components/CardMovie';
import NavBar from '../../components/Navbar';
import { CardList } from '../../styles/trending';
import { API_KEY } from '../../config/key';
import Search from '../../components/Search';
import SelectOption from '../../components/SelectOption/Search';

type Option = 'day' | 'week';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  name: string;
  first_air_date: string;
}

export default function MoviesCatalog() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [option, setOption] = useState<Option>('week');
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllMoviesTrendings() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/${option}?api_key=${API_KEY}`
      );

      //this logic below was made because some objects do not have the name property -->
      //to prevent undefined error in moviesFiltered, where the search field is searched
      const newData = response.data.results.map((item) => {
        if (item.hasOwnProperty('name')) {
          return {
            ...item,
            name: item.name.toLowerCase(),
          };
        }

        const originalName =
          item.hasOwnProperty('original_name') &&
          item.original_name.toLowerCase();
        const title = item.hasOwnProperty('title') && item.title.toLowerCase();

        return {
          ...item,
          name: originalName || title,
        };
      });

      setMovies(newData);
      setIsLoading(false);
    }

    getAllMoviesTrendings();
  }, [option]);

  const moviesFiltered = movies.filter((movie) =>
    movie.name.includes(search.toLocaleLowerCase())
  );

  if (isLoading) {
    return <h1 color='white'>Loading...</h1>;
  }

  return (
    <>
      <NavBar>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />

        <SelectOption
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
      </NavBar>

      <CardList>
        <ul>
          {moviesFiltered.map((item) => (
            <li key={item.id}>
              <CardMovie data={item} />
            </li>
          ))}
        </ul>
      </CardList>
    </>
  );
}
