import './App.css'
import Layout from './components/common/Layout/Layout'
import BodyContent from './components/features/BodyContent/BodyContent'
import TodoForm from './components/features/TodoForm/TodoForm'

function App() {

  return (
    <>
      <Layout>
        <BodyContent />
        <TodoForm />
      </Layout>
    </>
  )
}

export default App
