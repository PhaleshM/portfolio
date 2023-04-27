import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Skils({ color }) {
  const skills=["ReactJS","Django","DjangoRestFramework","DSA","Python","C++","Javscript","SQL","GIT","MySQL","Google Colab","TensorFlow","Keras","Pandas"]
  // // const options=[]
  const options=skills.map((val)=>{
  	let arr={};
    arr.value=val;
    return arr
  })
  const [selected, setSelected] = useState("All");

  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <>
      <Container maxW={"3xl"} id="skills">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Skills</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup style={{ flexWrap: "wrap" ,justifyContent:"center"}} variant="outline">
              {options.map((option) => (
                <Button style={{marginTop:"10px"}}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onMouseOver={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
        </Stack>
      </Container>
    </>
  );
}
