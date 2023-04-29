import Game from "../../../models/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../../../services/imageUrl";
import { Link } from "react-router-dom";
import { PlatformIconList } from "..";
import { CriticScore, Emoji } from "../../ui";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}
export default GameCard;
