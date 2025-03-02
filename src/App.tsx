import './App.css'
import Layout from './components/common/Layout/Layout'
import Switcher from './components/features/Switcher/Switcher'
import Todo from './components/features/Todo/Todo'
import TodoForm from './components/features/TodoForm/TodoForm'

function App() {

  return (
    <>
      <Layout>
        <Switcher />
        <Todo />
        <TodoForm />
      </Layout>
    </>
  )
}

export default App
