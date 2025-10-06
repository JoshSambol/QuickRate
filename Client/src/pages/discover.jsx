import { Container, Text, Title, SegmentedControl } from '@mantine/core'

function Discover() {
  return (
    <Container pt="5rem">
      <Title>Discover</Title>
      <Text>Discover and rate websites, projects, and more</Text>
      <SegmentedControl
        data={['All', 'Websites', 'Projects', 'More']}
        defaultValue='All'
      />
    </Container>
  )
}

export default Discover