import Genre from "./Genre";
import Platform from "./Platform";
import Publishers from "./Publishers";

export default interface Game {
  background_image: string;
  description_raw: string;
  genres: Genre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  publishers: Publishers[];
  slug: string;
}
