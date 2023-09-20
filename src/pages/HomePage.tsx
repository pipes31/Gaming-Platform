import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <HStack spacing={5} paddingLeft={3} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
      <ReactQueryDevtools initialIsOpen={false} />
    </Grid>
  );
};

export default HomePage;
