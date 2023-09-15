import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../services/genreService";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={2} color="#77ac39">
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data?.results.map((genres) => (
          <ListItem key={genres.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genres.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genres)}
                fontSize="lg"
                fontWeight={genres.id === selectedGenreId ? "bold" : "normal"}
                color={genres.id === selectedGenreId ? "#91c653" : "normal"}
                _hover={{ color: "gray.500" }}
                variant="link"
              >
                {genres.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
