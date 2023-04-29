import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import {
  GameAttributes,
  GameScreenshots,
  GameTrailer,
} from "../features/detail";
import { ExpandableText } from "../features/ui";
import useGame from "../features/detail/useGame";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
}
export default GameDetailPage;
