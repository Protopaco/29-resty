import React, { useState, useEffect } from 'react';

const RestyForm = ({ handleSubmitClick }) => {
    const [urlInput, setUrlInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');
    const [methodType, setMethodType] = useState('GET')

    const handleClick = (e) => {
        e.preventDefault()

        let infoObject = { 'method': methodType }
        if (methodType != 'GET') infoObject[body] = bodyInput;
        console.log(infoObject.body)
        const stateObject = {
            'url': urlInput,
            infoObject
        }
        handleSubmitClick(stateObject)
    }

    const handleMethodChange = (e) => {
        e.preventDefault();
        setMethodType(e.target.value)
    }

    useEffect(() => {
        console.log('hello!')

    }, [methodType])


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
                    onChange={(e) => handleMethodChange(e)}
                    checked
                />
                <br />
                <label
                    htmlFor="POST">
                    POST
                </label>
                <input
                    type="radio"
                    id="POST"
                    name="method"
                    value="POST"
                    onChange={(e) => handleMethodChange(e)}
                />
                <br />
                <label
                    htmlFor="PUT">
                    PUT
                </label>
                <input
                    type="radio"
                    id="PUT"
                    name="method"
                    value="PUT"
                    onChange={(e) => handleMethodChange(e)}
                />
                <br />
                <label
                    htmlFor="DELETE">
                    DELETE
                </label>
                <input
                    type="radio"
                    id="DELETE"
                    name="method"
                    value="DELETE"
                    onChange={(e) => handleMethodChange(e)}
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