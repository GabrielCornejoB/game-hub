import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.03)",
      }}
    >
      {children}
    </Box>
  );
}
export default GameCardContainer;
