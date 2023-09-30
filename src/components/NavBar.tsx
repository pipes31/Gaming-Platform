import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo-Pro.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.15s ease-in",
          }}
        />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
