import React, { useState } from "react";
import {
  AppShell,
  Header,
  ColorSchemeProvider,
  ColorScheme,
  ActionIcon,
  MantineProvider,
  Footer,
} from "@mantine/core";
import LOGO2 from "../assets/LOGO2.png";
import LOGO1 from "../assets/LOGO1.png";
import { Sun, MoonStars } from "phosphor-react";

type Props = {
  children: React.ReactNode;
};

export const AppShellContainer: React.FC<Props> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const dark = colorScheme === "dark";

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="xs"
          header={
            <Header
              height={60}
              pl={50}
              pr={50}
              p="md"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: colorScheme === "dark" ? "#182B31" : "#806350",
              }}
            >
              <img
                src={colorScheme === "dark" ? LOGO1 : LOGO2}
                height={40}
                width={120}
                alt="logo"
                className="App-logo"
              />

              <ActionIcon
                variant="outline"
                color={dark ? "gray" : "red"}
                onClick={() => toggleColorScheme()}
                title="theme"
              >
                {dark ? <Sun size="1.1rem" /> : <MoonStars size="1.1rem" />}
              </ActionIcon>
            </Header>
          }
          footer={
            <Footer
              height={50}
              p="xs"
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: dark ? "#182B31" : "#806350",
                zIndex: 1000, // Ensure footer is above other content
              }}
            >
              <span style={{ color: dark ? "white" : "black" }}>
                © 2024. All rights reserved.
              </span>
            </Footer>
          }
          styles={{
            main: {
              paddingBottom: 50, // Ensure content is not hidden behind footer
              minHeight: "100vh", // Full viewport height
              backgroundColor: colorScheme === "dark" ? "#0A0E14" : "#F2E2D4",
            },
          }}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
