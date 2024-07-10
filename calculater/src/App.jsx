import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'

function App() {
  return (
    <div id='calculater' className={` ${styles.calculater}`}>
      <Display />
      <ButtonContainer />


    </div>
  )
}

export default App
