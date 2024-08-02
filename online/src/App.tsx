import React from "react";
import { AppShellContainer } from "./components/Header";
import { Text } from "@mantine/core";

function App() {
  return (
    <>
      {" "}
      <AppShellContainer>
        <Text>hello</Text>
      </AppShellContainer>
      <div className="App">hello</div>
    </>
  );
}

export default App;
