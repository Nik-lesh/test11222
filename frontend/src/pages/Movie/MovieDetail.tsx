import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetails } from "./assets/routes";
import { AppContainer } from "../../components/Container";
import {
  Badge,
  Box,
  Card,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  Loader,
  Paper,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";

const MovieDetail = () => {
  const location = useLocation();
  const { details } = location.state || {};
  const theme = useMantineTheme();

  const dividerColor =
    theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.dark[0];
  if (!details) {
    return <Loader />;
  }
  return (
    <AppContainer>
      <Card
        shadow="xl"
        padding="xs"
        style={{
          backgroundColor: theme.colorScheme === "dark" ? "#14181E" : "#E8D8CA",
        }}
      >
        <Grid>
          <Grid.Col pr="sm" pl="sm" pt="sm" pb="sm" span={4}>
            <Paper shadow="xl">
              <Image
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt={details.title}
                radius="md"
                style={{ width: "100%" }}
              />
            </Paper>
          </Grid.Col>

          <Grid.Col pl="xl" span={8}>
            <Text size="xl" weight={700}>
              {details.title}
            </Text>
            <Text size="sm" color="dimmed">
              Language: {details.original_language.toUpperCase()}
            </Text>
            <Text size="sm" color="dimmed">
              Budget: {details.budget}
            </Text>
            <Text size="sm" color="dimmed">
              Runtime: {details.runtime} minutes
            </Text>
            <Text size="sm" color="dimmed">
              Rating: {details.vote_average}/10
            </Text>{" "}
            <Text size="sm" color="dimmed">
              Total Collection: {details.revenue}
            </Text>
            <Text size="sm" color="dimmed">
              Release Date: {details.release_date}
            </Text>
            <Divider my="sm" color={dividerColor} />
            <Text size="md" weight={500}>
              Genres:
            </Text>
            <Box>
              {details.genres.map((genre: any) => (
                <Badge
                  key={genre.name}
                  color={theme.colorScheme === "dark" ? "blue" : "red"}
                  variant="light"
                  mr="xs"
                >
                  {genre.name}
                </Badge>
              ))}
            </Box>
            <Divider my="sm" color={dividerColor} />
            <Text size="md" weight={500}>
              Overview:{" "}
            </Text>
            <Text size="sm">{details.overview}</Text>
            <Divider my="sm" color={dividerColor} />
            <Text size="md" weight={500}>
              Production house:
            </Text>
            <Flex gap="md" align="center">
              {details.production_companies.map(
                (company: any, index: number) =>
                  company.logo_path && (
                    <Group key={index}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </Group>
                  )
              )}
            </Flex>
          </Grid.Col>
        </Grid>
        <Divider my="sm" color={dividerColor} />

        <Text size="md" weight={500}>
          Cast:
        </Text>
        <ScrollArea style={{ width: "100%", whiteSpace: "nowrap" }}>
          <Flex gap="md" style={{ overflowX: "auto", padding: "1rem" }}>
            {details.cast.map(
              (actor: any) =>
                actor.profile_path && (
                  <Card
                    key={actor.id}
                    radius="md"
                    shadow="xl"
                    padding="xs"
                    style={{
                      backgroundColor:
                        theme.colorScheme === "dark" ? "#14181E" : "#E8D8CA",
                      cursor: "pointer",
                      width: "120px",
                      height: "240px",
                    }}
                  >
                    <Card.Section>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        radius="md"
                      />
                    </Card.Section>
                    <Box style={{ padding: "0.5rem 0", textAlign: "center" }}>
                      <Text size="sm" color="dimmed">
                        {actor.name}
                      </Text>
                      <Text size="xs" color="dimmed">
                        {actor.character}
                      </Text>
                    </Box>
                  </Card>
                )
            )}
          </Flex>
        </ScrollArea>
      </Card>
    </AppContainer>
  );
};

export default MovieDetail;
