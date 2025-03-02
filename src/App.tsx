// import { useState } from 'react'
import './App.css'
import Layout from './components/common/Layout/Layout'
import Switcher from './components/features/Switcher/Switcher'
import Todo from './components/features/Todo/Todo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Switcher />
        <Todo />
      </Layout>
    </>
  )
}

export default App
