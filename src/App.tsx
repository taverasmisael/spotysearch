import type { Component } from 'solid-js'
import AppShell from './components/Shell'
import { SearchPage } from './components/Search'

const App: Component = () => {
  return (
    <AppShell>
      <SearchPage />
    </AppShell>
  )
}

export default App
;``
