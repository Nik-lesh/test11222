import React, { useState } from "react";
import {
  AppShell,
  Header,
  ColorSchemeProvider,
  ColorScheme,
  ActionIcon,
  MantineProvider,
} from "@mantine/core";
import LOGO2 from "../assets/LOGO2.png";
import LOGO1 from "../assets/LOGO1.png";
import { Sun, MoonStars } from "phosphor-react";

type Props = {
  children: React.ReactNode;
};

export const AppShellContainer: React.FC<Props> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
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
                color={dark ? "white" : "red"}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? <Sun size="1.1rem" /> : <MoonStars size="1.1rem" />}
              </ActionIcon>
            </Header>
          }
          styles={{
            main: {
              backgroundColor: colorScheme === "dark" ? "#0A0E14" : "#EDD9CC",
            },
          }}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
