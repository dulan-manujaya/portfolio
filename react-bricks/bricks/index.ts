import { types } from "react-bricks/frontend";
import website from "react-bricks-ui/website";
import blog from "react-bricks-ui/blog";
import HeroUnit from "./MyHeroUnit";
import Heading from "./Heading";

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit,
  Heading, // Example custom brick
  // Put here your other bricks...
];

export default bricks;
