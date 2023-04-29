import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import {
  GameGrid,
  GameHeading,
  GenreList,
  PlatformSelector,
  SortSelector,
} from "../features/home";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: '"main"',
        lg: '"nav nav" "aside main"', // Wider than 1024px
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
        <Box paddingLeft="10px">
          <GameHeading />
          <Flex paddingBottom="10px">
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default HomePage;
