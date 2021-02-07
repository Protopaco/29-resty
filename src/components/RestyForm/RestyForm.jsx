import React, { useState, useEffect } from 'react';
import styles from './RestyForm.css'

const RestyForm = ({ handleSubmitClick }) => {
    const [urlInput, setUrlInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    const [methodType, setMethodType] = useState('GET')

    const handleClick = (e) => {
        e.preventDefault()

        let infoObject = { 'method': methodType }
        if (methodType === "PUT" || methodType === "POST") infoObject.body = bodyInput;

        const stateObject = {
            'url': urlInput,
            infoObject
        }
        handleSubmitClick(stateObject)
    }

    return (
        <div >
            <form onSubmit={(e) => handleClick(e)}
                className={styles.formFrame}>
                <label
                    htmlFor="url">
                    URL
                </label>
                <input
                    className={styles.urlInput}
                    id="url"
                    data-testid='urlInput'
                    onChange={({ target }) => setUrlInput(target.value)}
                    required
                />
                <div className={styles.methodButtons}>

                    <input
                        className={styles.radioButton}
                        type="radio"
                        id="GET"
                        data-testid='getButton'
                        name="method"
                        value="GET"
                        onChange={({ target }) => setMethodType(target.value)}
                        defaultChecked
                    />
                    <label
                        className={styles.radioLabel}
                        htmlFor="GET">
                        GET
                    </label>
                    <input
                        className={styles.radioButton}
                        type="radio"
                        id="POST"
                        data-testid='postButton'
                        name="method"
                        value="POST"
                        onChange={({ target }) => setMethodType(target.value)}
                    />
                    <label
                        className={styles.radioLabel}

                        htmlFor="POST">
                        POST
                    </label>
                    <input
                        className={styles.radioButton}
                        type="radio"
                        id="PUT"
                        data-testid='putButton'
                        name="method"
                        value="PUT"
                        onChange={({ target }) => setMethodType(target.value)}
                    />
                    <label
                        className={styles.radioLabel}
                        htmlFor="PUT">
                        PUT
                    </label>
                    <input
                        className={styles.radioButton}
                        type="radio"
                        id="DELETE"
                        data-testid='deleteButton'
                        name="method"
                        value="DELETE"
                        onChange={({ target }) => setMethodType(target.value)}
                    />
                    <label
                        className={styles.radioLabel}
                        htmlFor="DELETE">
                        DELETE
                </label>
                </div>

                <label
                    className={styles.radioLabel}
                    htmlFor="body">
                    BODY
                </label>
                <textarea
                    id="body"
                    data-testid='bodyInput'
                    onChange={({ target }) => setBodyInput(target.value)}
                />
                <button
                    data-testid="submitButton"
                >
                    SUBMIT
                </button>
            </form >
        </div >
    )

}

export default RestyForm;