import React from "react";
import { AppShell, Badge, Header } from "@mantine/core";
import Logo from "../assets/Logo.svg";
type Props = {
  children: React.ReactNode;
};

export const AppShellContainer: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding="xs"
      header={
        <Header height={40} p="xs">
          <img
            src={Logo}
            height={30}
            width={30}
            alt="logo"
            className="App-logo"
          />
          <Badge />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
