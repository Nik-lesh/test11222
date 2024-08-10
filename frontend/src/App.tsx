import React from "react";
import { AppShellContainer } from "./components/Header";
// import { AppShellComponents } from "./components/Components";
import { Movies } from "./pages/Movie";
import TrendingMovies from "./pages/Movie/RenderMovies";
import RenderMovies from "./pages/Movie/RenderMovies";
import { MantineProvider } from "@mantine/core";


function App() {
  return (
    <>
      {" "}
      <MantineProvider>
        <AppShellContainer>
          <RenderMovies />
        </AppShellContainer>
        <div className="App">hello</div>
      </MantineProvider>
    </>
  );
}

export default App;
