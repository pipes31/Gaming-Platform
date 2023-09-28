import { Grid, GridItem, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <GridItem>
          <DefinitionItem term="MetaScore">
            <CriticScore score={game.metacritic}></CriticScore>
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <DefinitionItem term="Platforms">
            {game.parent_platforms.map(({ platform }) => (
              <Text>{platform.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <DefinitionItem term="Genre">
            {game.genres.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <DefinitionItem term="Publisher">
            {game.publishers.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetailPage;
