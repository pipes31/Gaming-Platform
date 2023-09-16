import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformService from "../services/platformService";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
