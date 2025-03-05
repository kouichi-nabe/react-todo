import './App.css'
import Layout from './components/common/Layout/Layout'
import BodyContent from './components/features/BodyContent/BodyContent'
import Reset from './components/features/Reset/Reset'
import TodoForm from './components/features/TodoForm/TodoForm'

function App() {

  return (
    <>
      <Layout>
        <BodyContent />
        <TodoForm />
        <Reset />
      </Layout>
    </>
  )
}

export default App
