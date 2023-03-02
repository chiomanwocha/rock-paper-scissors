import { Box, Text } from "@chakra-ui/react";

const AppComp = () => {
  const options = ["rock", "paper", "scissors", "lizard", "spock"];
  return (
    <Box
      border="5px solid"
      borderColor="brand.headerOutline"
      rounded="lg"
      display="flex"
      justifyContent="space-between"
      maxWidth="50vw"
      padding="4"
      margin="5vh auto"
    >
      <Box
        textColor="white"
        textTransform="uppercase"
        fontWeight="extrabold"
        fontSize="3xl"
        lineHeight="0.8"
        letterSpacing="1px"
      >
        {options.map((option) => (
          <Text key={option}>{option}</Text>
        ))}
      </Box>
      <Box
        bg="white"
        textColor="white"
        padding="10px"
        textTransform="uppercase"
        paddingX="10"
        rounded="md"
      >
        <Text bg="transparent" color="brand.scoreText" fontWeight="bold">
          score
        </Text>
        <Text bg="transparent" color="brand.darkText" fontSize="5xl" fontWeight="bolder">
          12
        </Text>
      </Box>
    </Box>
  );
};

export default AppComp;
