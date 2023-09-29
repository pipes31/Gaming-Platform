import useTrailers from "../hooks/useTrailers";
//Props interface to get the game Id for GameTrailer Component
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  //Desestructuring data obtain from useTrailers Hook
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return null;

  //throw an error if something goes wrong while retrieving
  if (error) throw error;

  //getting the first trailer from the result
  const firstTrailer = data?.results[0];
  //returning the video trailer if the trailer is found otherwise return null
  return firstTrailer ? (
    <video src={firstTrailer.data.max} poster={firstTrailer.preview} controls />
  ) : null;
};

export default GameTrailer;
