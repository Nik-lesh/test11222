import React, { useState } from "react";
import axios from "axios";
import {
  TextInput,
  Button,
  Container,
  Paper,
  Title,
  Text,
  Image,
} from "@mantine/core";

const API_KEY = "efb0980b8b42689d1f254943fc972f43";
const BASE_URL = "https://api.themoviedb.org/3";
console.log("KEY:", API_KEY);

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;

    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      setResults(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data from TMDb", error);
    }
  };

  return (
    <Container>
      <Title align="center" mt="xl">
        Movie Search
      </Title>
      <Paper withBorder shadow="md" p="lg" mt="lg">
        <form onSubmit={handleSearch}>
          <TextInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
            required
          />
          <Button type="submit" fullWidth mt="md">
            Search
          </Button>
        </form>
      </Paper>
      <div>
        {results.map((movie) => (
          <Paper key={movie.id} withBorder shadow="md" p="lg" mt="lg">
            <Title order={3}>{movie.title}</Title>
            <Text>{movie.overview}</Text>
            {movie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                radius="md"
                mt="md"
              />
            )}
          </Paper>
        ))}
      </div>
    </Container>
  );
};

export default Search;
