import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [age, useAge] = useState(18)
  const add = () => useAge(age + 1)
  return (
    <>
      <button onClick={add}>+1</button>
      <h2>{age}</h2>
      <h3>我是你爹.</h3>
    </>
  )
}
createRoot(document.getElementById('root')).render(<App />)
