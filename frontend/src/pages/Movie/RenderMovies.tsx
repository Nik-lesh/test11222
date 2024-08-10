import React, { useState } from "react";
import {
  SimpleGrid,
  SegmentedControl,
  Box,
  Group,
  Select,
  useMantineTheme,
} from "@mantine/core";
import Masonry from "react-masonry-css";

import {
  getTrendingMovies,
  getAiringTodayTVShows,
  getMoviesByGenre,
  getPopularMovies,
  getPopularMoviesByLanguage,
  getPopularTVShows,
  getPopularTVShowsByLanguage,

  getTopRatedMovies,
  getTopRatedTVShows,
  getTrendingTVShows,
  getUpcomingMovies,
  getTvByGenre,
} from "./assets/routes";
import { MovieCard } from "./assets/CardView";
import { movieGenres } from "./assets/genre";
import useFetchData from "./assets/Hook";
import { AppContainer } from "../../components/Container";
import Search from "./search";
import "./movies.css"
const RenderMovies = () => {
  const [fetchmovies, setFetchMovies] = useState(() => getTrendingMovies);
  const { data: movies, loading } = useFetchData(fetchmovies);
  const [selectedCategory, setSelectedCategory] = useState("movies");
  const theme = useMantineTheme();
  const themeColor = theme.colorScheme === "dark" ? "#0A0E14" : "#F2E2D4";

  const handleMoviesOrTv = (value: string) => {
    setSelectedCategory(value);
    console.log("Selected Category:", value);
    switch (value) {
      case "movies":
        console.log("Setting fetch function to getTrendingMovies");
        setFetchMovies(() => getTrendingMovies);
        break;
      case "tv":
        setFetchMovies(() => getTrendingTVShows);
        console.log("Setting fetch");
        break;
      default:
        break;
    }
  };
  const languageMappingsMovies: Record<string, string> = {
    english: "en",
    spanish: "es",
    chinese: "zh",
    korean: "ko",
  };

  const languageMappingsTV: Record<string, string> = {
    english: "en",
    spanish: "es",
    chinese: "zh",
    korean: "ko",
  };

  const handleByOTT = (value: string) => {
    const languageCode =
      selectedCategory === "movies"
        ? languageMappingsMovies[value]
        : languageMappingsTV[value];

    if (languageCode) {
      const fetchFunction =
        selectedCategory === "movies"
          ? () => getPopularMoviesByLanguage(languageCode)
          : () => getPopularTVShowsByLanguage(languageCode);

      setFetchMovies(() => fetchFunction);
    }
  };

  const genreMappingsMovies: Record<string, number> = {
    action: 28,
    adventure: 12,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    fantasy: 14,
    history: 36,
    horror: 27,
    music: 10402,
    mystery: 9648,
    romance: 10749,
    scienceFiction: 878,
    tvMovie: 10770,
    thriller: 53,
    war: 10752,
    western: 37,
  };

  const genreMappingsTV: Record<string, number> = {
    actionAndAdventure: 10759,
    animation: 16,
    comedy: 35,
    crime: 80,
    documentary: 99,
    drama: 18,
    family: 10751,
    kids: 10762,
    mystery: 9648,
    news: 10763,
    reality: 10764,
    sciFiAndFantasy: 10765,
    soap: 10766,
    talk: 10767,
    warAndPolitics: 10768,
    western: 37,
  };

  const handleGenre = (value: string) => {
    const genreId =
      selectedCategory === "movies"
        ? genreMappingsMovies[value]
        : genreMappingsTV[value];

    if (genreId !== undefined) {
      const fetchFunction =
        selectedCategory === "movies"
          ? () => getMoviesByGenre(genreId)
          : () => getTvByGenre(genreId);

      setFetchMovies(() => fetchFunction);
    }
  };

  const fetchFunctionsMovies: Record<string, () => Promise<any>> = {
    trending: getTrendingMovies,
    popular: getPopularMovies,
    topRated: getTopRatedMovies,
    newRelease: getUpcomingMovies,
  };

  const fetchFunctionsTV: Record<string, () => Promise<any>> = {
    trending: getTrendingTVShows,
    popular: getPopularTVShows,
    topRated: getTopRatedTVShows,
    newRelease: getAiringTodayTVShows,
  };

  const handleSelectChangeMovies = (value: string) => {
    const fetchFunction =
      selectedCategory === "movies"
        ? fetchFunctionsMovies[value]
        : fetchFunctionsTV[value];

    if (fetchFunction) {
      setFetchMovies(() => fetchFunction);
    }
  };

  const segmentControl = [
    { value: "movies", label: "Movies" },
    { value: "tv", label: "TVShows" },
  ];

  const sortOptions1 = [
    {
      value: "trending",
      label: "Trending",
    },
    { value: "popular", label: "Most Popular" },
    { value: "topRated", label: "Top Rated" },
    { value: "newRelease", label: "New Release" },
  ];

  const tvGenresOptions = [
    { value: "actionAndAdventure", label: "Action & Adventure" },
    { value: "animation", label: "Animation" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "documentary", label: "Documentary" },
    { value: "drama", label: "Drama" },
    { value: "family", label: "Family" },
    { value: "kids", label: "Kids" },
    { value: "mystery", label: "Mystery" },
    { value: "news", label: "News" },
    { value: "reality", label: "Reality" },
    { value: "sciFiAndFantasy", label: "Sci-Fi & Fantasy" },
    { value: "soap", label: "Soap" },
    { value: "talk", label: "Talk" },
    { value: "warAndPolitics", label: "War & Politics" },
    { value: "western", label: "Western" },
  ];
  const movieGenresOptions = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "animation", label: "Animation" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "documentary", label: "Documentary" },
    { value: "drama", label: "Drama" },
    { value: "family", label: "Family" },
    { value: "fantasy", label: "Fantasy" },
    { value: "history", label: "History" },
    { value: "horror", label: "Horror" },
    { value: "music", label: "Music" },
    { value: "mystery", label: "Mystery" },
    { value: "romance", label: "Romance" },
    { value: "scienceFiction", label: "Science Fiction" },
    { value: "tvMovie", label: "TV Movie" },
    { value: "thriller", label: "Thriller" },
    { value: "war", label: "War" },
    { value: "western", label: "Western" },
  ];

  const sortOptions2 =
    selectedCategory === "movies" ? movieGenresOptions : tvGenresOptions;

  const sortOptions3 = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "chinese", label: "Chinese" },
    { value: "korean", label: "Korean" },
  ];

  return (
    <>
      <AppContainer>
        <Box my={12}>
          <Group position="apart">
            <SegmentedControl
              radius={16}
              size="xs"
              fullWidth
              data={segmentControl}
              onChange={handleMoviesOrTv}
              style={{
                width: 400,
                backgroundColor:
                  theme.colorScheme === "dark" ? "#0A0E14" : "#C7B7A3",
                color: "#F2E2D4",
              }}
            />

            <Search />
          </Group>
        </Box>
        <Box>
          <Group pb="xl" position="apart">
            <Select
              radius={16}
              size="xs"
              label="Choose one"
              placeholder="Select one"
              onChange={handleSelectChangeMovies}
              data={sortOptions1}
              sx={{
                width: 400,
                backgroundColor: themeColor,

                borderColor: themeColor, // Optional: change border color
                color: theme.colorScheme === "dark" ? "#FFFFFF" : "#000000", // Optional: text color
              }}
            />

            <Select
              radius={16}
              size="xs"
              label="Select genre"
              placeholder="Select one"
              onChange={handleGenre}
              data={sortOptions2}
              style={{
                width: 400,
                backgroundColor:
                  theme.colorScheme === "dark" ? "#0A0E14" : "#F2E2D4",
              }}
            />

            <Select
              radius={16}
              size="xs"
              label="Choose language"
              placeholder="Choose language"
              onChange={handleByOTT}
              data={sortOptions3}
              style={{
                width: 400,

                backgroundColor:
                  theme.colorScheme === "dark" ? "#0A0E14" : "#F2E2D4",
              }}
            />
          </Group>
        </Box>
        <>
          <div className="masonry-grid">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className={`masonry-item ${
                  Math.random() > 0.5 ? "full-width" : ""
                }`}
              >
                <MovieCard
                  title={movie.title}
                  posterPath={movie.poster_path}
                  genres={movie.genre_ids.map((id: number) => movieGenres(id))}
                  rating={movie.vote_average}
                  voteAverage={movie.vote_count}
                  language={movie.original_language}
                  releaseDate={movie.release_date || "unknown"}
                />
              </div>
            ))}
          </div>
        </>
      </AppContainer>
    </>
  );
};

export default RenderMovies;
