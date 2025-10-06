import { Flex, Button, Title, TextInput, Box } from '@mantine/core'

function Header() {
  return (
    <Flex
      mih={50}
      align="center"
      direction="row"
      w="100vw"
      px="lg"
      style={{ boxSizing: 'border-box' }}
    >
      <Flex
        gap="15rem"
        align="center"
        justify="center"
        style={{ flex: 1 }}
      >
        <Button>Create +</Button>
        <Title>QuickRate</Title>
        <TextInput placeholder='Search' />
      </Flex>
      <Box>
        <Button>Login</Button>
      </Box>
    </Flex>
  )
}

export default Header