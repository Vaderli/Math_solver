import { useState } from 'react'
import './App.css'
import StartPage from './pages/StartPage'
import TestPage from './pages/TestPage'

function App() {
  const [page, setPage] = useState('StartPage')
  
  const onStart = () => {
    setPage("TestPage");
  }

  const onFinish = () => {
    setPage("StartPage");
  }

  return (
    <>
      {(page === "StartPage")? <StartPage onStart={onStart}/> : <TestPage onFinish = {onFinish}/>}
    </>
    
  )
}

export default App
