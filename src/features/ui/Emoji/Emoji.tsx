import { Image, ImageProps } from "@chakra-ui/react";
import emojis from "../../../utils/emojis";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: emojis.meh, alt: "meh", boxSize: "25px" },
    4: { src: emojis.thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: emojis.bullsEye, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
}
export default Emoji;
