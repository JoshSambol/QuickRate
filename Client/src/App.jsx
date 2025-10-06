import { useState} from 'react'
import { AppShell } from '@mantine/core'
import Header from './components/header'
import './App.css'
import Nav from './components/nav'
import Discover from './pages/Discover'

function App() {

  return (
    <>
    <AppShell>
      <AppShell.Header><Header /></AppShell.Header>
      <AppShell.Navbar style={{ width: 200, minWidth: 200, maxWidth: 200 }}>
          
          <Nav />
      </AppShell.Navbar>
      <AppShell.Main >
        <Discover />
      </AppShell.Main>
      <AppShell.Footer></AppShell.Footer>
    </AppShell></>
  )
}

export default App
