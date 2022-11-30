import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

const ProjectCard = ({ children }) => {
  return (
    <Card
      bg={useColorModeValue('teal', 'almostWhite')}
      textColor={useColorModeValue('almostWhite', 'gray.900')}
      fontFamily="reef"
      fontSize="2xl"
      maxW="container.md"
    >
      <CardHeader>{children}</CardHeader>
    </Card>
  )
}

const Projects = () => {
  return (
    <Container>
      <Box p={2} display="flex" justifyContent="center" mt={12}>
        <Heading
          fontSize="6xl"
          color={useColorModeValue('blue.500', 'lemonYellow')}
        >
          Projects
        </Heading>
      </Box>

      <SimpleGrid
        display={{ base: 'inline-block', md: 'flex' }}
        justifyContent="center"
        columns={3}
        spacing={10}
        mb={6}
        mt={10}
      >
        <ProjectCard>Hello</ProjectCard>
        <ProjectCard>Hello</ProjectCard>
        <ProjectCard>hello</ProjectCard>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
