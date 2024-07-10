import styles from './App.module.css'

function App() {
  return (
    <div id='calculater' className={` ${styles.calculater}`}>
      <input type="text" name="display" id="display" className={` ${styles.display}`} />
      <div id="button" className={` ${styles.btnContainer}`} >
        <button id="clear" onClick={() => { }}>C</button>
        <button id="clear" onClick={() => { }}>C</button>
        <button id="clear" onClick={() => { }}>C</button>
      </div>
    </div>
  )
}

export default App
