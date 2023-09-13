import { useQuery } from "@tanstack/react-query";

import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "./useGames";

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const fetchPlatforms = () =>
  apiClient
    .get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then((res) => res.data);

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
