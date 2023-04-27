import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  Button
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

 
export default function Contact({ color }) {
  const profile = ProfileArray();
  const cvurl="https://drive.google.com/file/d/1Vgm2tmlgkaptPrE_KHjpG6C-vefXHGFv/view?usp=sharing";
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:phaleshm@gmail.com`, "_blank", "noreferrer,noopener");
  };
  const download=(url)=>{
    const aTag=document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',"Phalesh_CV");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  }

  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Button
              style={{width: "max-content",
                alignSelf: "center"}}
              colorScheme={color}
              bg={`${color}.400`}
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
              onClick={()=>download(cvurl)}
            >Download CV
            </Button>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
              {profile.email}
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

