import { Card, Text, Title, Image, Group, Badge, Button } from '@mantine/core'

function CardComponent() {
  return (
    
    <Card shadow="sm" padding="lg" radius="md" withBorder m=".5rem">
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>QuickRate</Text>
        <Badge color="pink">Website</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Please take a look at the UI/UX of this app and tell me what you think!
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Rate now
      </Button>
    </Card>
  )
}

export default CardComponent