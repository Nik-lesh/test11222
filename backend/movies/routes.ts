import axios from "axios";

const API_KEY = process.env.MOVIE;
const baseURL = "https://api.themoviedb.org/3";

// Fetch Popular Movies
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};

// Fetch Popular TV Shows
export const getPopularTVShows = async () => {
  try {
    const response = await axios.get(`${baseURL}/tv/popular`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching popular TV shows:", error);
  }
};

// Fetch Trending Movies
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

// Fetch Trending TV Shows
export const getTrendingTVShows = async () => {
  try {
    const response = await axios.get(`${baseURL}/trending/tv/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trending TV shows:", error);
  }
};

// Fetch Upcoming Movies
export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
  }
};

// Fetch Airing Today TV Shows
export const getAiringTodayTVShows = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today`,
      {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching airing today TV shows:", error);
  }
};

// Fetch Top Rated Movies
export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: 1,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
  }
};

// Fetch Top Rated TV Shows
export const getTopRatedTVShows = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated`,
      {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: 1,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching top-rated TV shows:", error);
  }
};

// Fetch Popular Movies by Language
export const getPopularMoviesByLanguage = async (language: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: API_KEY,
          language: language,
          page: 1,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching popular movies by language:", error);
  }
};

// Fetch Popular TV Shows by Language
export const getPopularTVShowsByLanguage = async (language: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular`,
      {
        params: {
          api_key: API_KEY,
          language: language,
          page: 1,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching popular TV shows by language:", error);
  }
};

// Search Movies
export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: "en-US",
        page: 1,
        include_adult: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching for movies:", error);
  }
};

// Search TV Shows
export const searchTVShows = async (query: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: API_KEY,
          query: query,
          language: "en-US",
          page: 1,
          include_adult: true,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching for movies:", error);
  }
};
// Function to get movies by genre
export const getMoviesByGenre = async (genreId: number) => {
  try {
    const response = await axios.get(`${baseURL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        language: "en-US",
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    throw error;
  }
};
export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(`${baseURL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
export const getMoviesByActor = async (actorId: number) => {
  try {
    const response = await axios.get(
      `${baseURL}/person/${actorId}/movie_credits`,
      {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies by actor:", error);
    throw error;
  }
};
