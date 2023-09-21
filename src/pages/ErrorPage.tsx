import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <Box padding={5}>
        <Heading>Ooops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Does Not Exist"
            : "An Unexpected Error  occurred!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
