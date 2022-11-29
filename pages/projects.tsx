import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const ProjectCard = ({ children }) => {
  return (
    <Card
      borderRadius="lg"
      bg={useColorModeValue('teal', 'lemonYellow')}
      textColor={useColorModeValue('almostWhite', 'gray.900')}
      fontFamily="reef"
      fontSize="2xl"
    >
      <CardBody>{children}</CardBody>
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

      <SimpleGrid columns={3} spacing={10} align="center" mt={8}>
        <ProjectCard>Hello</ProjectCard>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
