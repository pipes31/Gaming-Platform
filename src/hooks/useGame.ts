import { useQuery } from "@tanstack/react-query";
import gamesService from "../services/gamesService";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => gamesService.get(slug),
  });

export default useGame;
