import {
  Badge,
  Box,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

interface MovieProps {
  title: string;
  posterPath: string;
  genres: string[];
  rating: number;
  voteAverage: number;
  language: string;
  releaseDate: string;
}

export const MovieCard: React.FC<MovieProps> = ({
  title,
  posterPath,
  genres,
  rating,
  voteAverage,
  language,
  releaseDate,
}) => {
  const theme = useMantineTheme();
  return (
    <Card
      shadow="xl"
      padding="xs"
      style={{
        backgroundColor: theme.colorScheme === "dark" ? "#14181E" : "#E8D8CA",
      }}
    >
      <Card.Section>
        <Image
          pl="xs"
          pb="xs"
          pt="xs"
          pr="xs"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
        />
      </Card.Section>

      <Box mt="md">
        <Text weight={500}>{title}</Text>
        <Group spacing="xs" mt="xs">
          {genres.map((genre) => (
            <Badge key={genre} color="red" variant="light">
              {genre}
            </Badge>
          ))}
        </Group>
        <Text size="sm" color="dimmed" mt="xs">
          Rating: {rating}/10
        </Text>
        <Text size="sm" color="dimmed" mt="xs">
          Vote Average: {voteAverage}
        </Text>
        <Text size="sm" color="dimmed" mt="xs">
          Language: {language.toUpperCase()}
        </Text>
        <Text size="sm" color="dimmed" mt="xs">
          Release Date: {releaseDate}
        </Text>
      </Box>
    </Card>
  );
};
