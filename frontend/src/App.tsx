import React from "react";
import { AppShellContainer } from "./components/Header";

import Search from "./pages/Movie/Movies";
function App() {
  return (
    <>
      {" "}
      <AppShellContainer>
        <Search />
      </AppShellContainer>
      <div className="App">hello</div>
    </>
  );
}

export default App;
