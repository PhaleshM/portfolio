import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
// import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  // const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
          As a Backend developer, my enthusiasm lies in crafting inventive solutions that add significant value to end-users. My journey commenced with Python, laying a robust foundation in programming concepts and web development. I subsequently broadened my expertise to encompass Django, ReactJS, and C++, as well as data structures and algorithms.<br></br><br>
          </br>My recent foray into Machine Learning, marked by project creation and successful participation in the <span style={{ color: "teal", fontWeight: "bold", fontStyle: "italic" }}>Amazon ML Summer School 2023</span>, reflects my evolving interests and dedication to continuous learning.
          </Text>
        </Stack>
      </Container>
    </>
  );
}

