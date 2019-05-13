import React, { useRef, useEffect } from 'react'
import mainSpinner from './mainSpinner'

function App() {
  const refChart = useRef(null)
  const refQuestion = useRef(null)

  useEffect(() => {
    mainSpinner(refChart.current, refQuestion.current)
  }, [])

  return (
    <>
      <div id="chart" ref={refChart} />
      <div id="question">
        <h1 ref={refQuestion}> </h1>
      </div>
    </>
  )
}

export default App
