import { Observer } from 'mobx-react'

import React, { useState } from 'react'
import { LocalState } from './storage/mobx'
import { Home } from './pages/home'

function App() {
  const [state] = useState(() => new LocalState())

  return (
    <>
      <Observer>
        {() => <Home num={state.num} incNum={state.handleIncNum} />}
      </Observer>
    </>
  )
}

export default App
