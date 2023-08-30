import {
  HStack,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <SkeletonCircle />
        <SkeletonText width="75%" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
