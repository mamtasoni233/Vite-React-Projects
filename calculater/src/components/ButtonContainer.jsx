// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './ButtonContainer.module.css'

export default function ButtonContainer() {
    const btnNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '7', '*', '7', '8', '/', '=', '9', '0', '.']
    return (
        <>
            <div id="button" className={` ${styles.btnContainer}`} >
                {btnNames.map((item, index) => {
                    return (
                        <button type='button' id="clear" className={`btn btn-secondary mx-2 ${styles.btn}`} onClick={() => { }} key={index}>{item}</button>
                    );
                })}

            </div>
        </>
    )
}
