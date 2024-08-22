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

interface RestaurantProps {
  imageUrl: string;
  title: string;
  description?: string;
  rating?: number;
}

export const RestrauntCard: React.FC<RestaurantProps> = ({
  imageUrl,
  title,
  description,
  rating,
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
        <Image pl="xs" pb="xs" pt="xs" pr="xs" src={imageUrl} alt={title} />
      </Card.Section>

      <Box mt="md">
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
        </Group>

        {description && (
          <Text size="sm" mt="md">
            {description}
          </Text>
        )}

        {rating && (
          <Text size="sm" mt="md">
            Reviews: {rating}
          </Text>
        )}
      </Box>
    </Card>
  );
};
