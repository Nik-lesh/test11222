import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AppShellContainer } from "./components/Header";
import * as ROUTES from "./routes/routes";

import RenderMovies from "./pages/Movie/RenderMovies";
import { MantineProvider } from "@mantine/core";
import RestaurantList from "./pages/restraunts";
import MovieDetails from "./pages/Movie/MovieDetail";

function App() {
  return (
    <>
      <MantineProvider theme={{ loader: "bars" }}>
        <Router>
          <AppShellContainer>
            <Routes>
              <Route path={ROUTES.MOVIES} element={<RenderMovies />} />
              <Route path={ROUTES.MOVIE_DETAIL} element={<MovieDetails />} />

              <Route
                path={ROUTES.RESTRAUNTS}
                element={<RestaurantList />}
              ></Route>
            </Routes>
          </AppShellContainer>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
