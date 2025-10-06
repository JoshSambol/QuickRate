import { Container, Text, Title, SegmentedControl, Grid } from '@mantine/core'
import CardComponent from '../components/card'

function Discover() {
  return (
    <Container pt="5rem" size="xl">
      <Title>Discover</Title>
      <Text>Discover and rate websites, projects, and more</Text>
      <SegmentedControl
        data={['All', 'Websites', 'Projects', 'More']}
        defaultValue='All'
        my="md"
      />
      <Grid gutter="xl">
        {[...Array(4)].map((_, idx) => (
          <Grid.Col
            span={{ base: 12, sm: 6, md: 4, lg: 3 }}
            key={idx}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <CardComponent />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}

export default Discover