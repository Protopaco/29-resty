import React, { useState } from 'react';

const RestyForm = ({ handleSubmitClick }) => {
    const [urlInput, setUrlInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    const [methodType, setMethodType] = useState('GET')

    const handleClick = (e) => {
        e.preventDefault()
        let infoObject = { 'method': methodType }
        if (methodType != 'GET') infoObject[body] = bodyInput;

        const stateObject = {
            'url': urlInput,
            infoObject
        }
        handleSubmitClick(stateObject)
    }

    return (
        <div >
            <form onSubmit={(e) => handleClick(e)}>
                <label
                    htmlFor="url">
                    URL
                </label>

                <input
                    id="url"
                    onChange={({ target }) => setUrlInput(target.value)}
                    required
                />
                <br />
                <label
                    htmlFor="GET">
                    GET
                </label>
                <input
                    type="radio"
                    id="GET"
                    name="method"
                    value="GET"
                    onChange={({ target }) => setMethodType(target.value)}
                    checked
                />
                <label
                    htmlFor="POST">
                    POST
                </label>
                <input
                    type="radio"
                    id="POST"
                    name="method"
                    value="POST"
                    onChange={({ target }) => setMethodType(target.value)}
                />
                <label
                    htmlFor="PUT">
                    PUT
                </label>
                <input
                    type="radio"
                    id="PUT"
                    name="method"
                    value="PUT"
                    onChange={({ target }) => setMethodType(target.value)}
                />
                <label
                    htmlFor="DELETE">
                    DELETE
                </label>
                <input
                    type="radio"
                    id="DELETE"
                    name="method"
                    value="DELETE"
                    onChange={({ target }) => setMethodType(target.value)}
                />
                <br />
                <label
                    htmlFor="body">
                    body
                </label>
                <input
                    type="text"
                    id="body"
                    onChange={({ target }) => setBodyInput(target.value)}
                />
                <button>
                    SUBMIT
                </button>
            </form >
        </div >
    )

}

export default RestyForm;