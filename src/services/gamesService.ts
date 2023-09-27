import APIClient from "./api-client";
import { Platform } from "./platformService";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default new APIClient<Game>("/games");
