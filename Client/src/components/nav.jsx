import { NavLink } from '@mantine/core'

function Nav() {
  return (
    <>
    <NavLink
      label="Discover"
      href="/discover"
      padding="20rem"
    />
    <NavLink
      label="Create"
      href="/create"
      padding="20rem"
    />
    </>
  )
}

export default Nav