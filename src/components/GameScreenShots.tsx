import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((img) => (
          <Image padding={1} key={img.id} src={img.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShots;
