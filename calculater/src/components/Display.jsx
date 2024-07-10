import styles from './Display.module.css'
function Display() {
    return (
        <>
            <input type="text" name="display" id="display" className={` ${styles.display}`} />
        </>
    )
}

export default Display