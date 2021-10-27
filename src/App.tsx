import React, { useState, useEffect } from 'react'
import './App.css'
import axios, { AxiosResponse } from 'axios'
import List from './components/List'

export type firstState = {
  //definedProps: { //can also be used and passed to my state <firstState['definedProps']>
    response?: [] | undefined
  //}
}
 
const App = () => {

  const [statistics, setStatistics] = useState<firstState>({}) //square brackets for array
  const [status, setStatus] = useState<{error: boolean | null, code: number | null}>({ //square brackets for object or use inline type {error: boolean | null, code: number | null}
    error: null, //boolean
    code: null, //null
  })

  useEffect(() => {
    raStatistics()
  }, [])
  
  const raStatistics = (): void => {
    axios.get<firstState>(`https://covid-193.p.rapidapi.com/statistics`, { //hover on get expects a response and the type
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': 'a306763a32msh35bb7bc90c2cf25p191a9djsn144f1123219c'
      }
    })
    .then(res => {
      if (res.status < 300) {
        setStatistics(res.data)
        setStatus({
          error: false,
          code: res.status,
        })
        console.log('res', res)
      }
    })
    .catch(err => {
      if (err.response && err.response.status > 300) {
         setStatus({
          error: true,
          code: err.response.status,
        })
      }
      console.log('err', err.response)
    })
  }

  return (
    <div className="App">
      <h1>Covid 19 data</h1>
      <List
        definedPropsChild={statistics}
      />
    </div>
  )
}

export default App