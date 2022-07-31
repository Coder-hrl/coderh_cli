import React, { useState } from 'react'
import { createRoot } from 'react-dom'

function App() {
  const [age, useAge] = useState(18)
  const add = useAge(age + 1)
  return (
    <>
      <button onClick={add}>+1</button>
      <h2>{age}</h2>
    </>
  )
}
createRoot(<App />, document.getElementById('app'))
