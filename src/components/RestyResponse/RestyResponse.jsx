import React, { useState, useEffect } from 'react';

const RestyResponse = ({ responseObject }) => {

    return (
        <div>
            {responseObject ?
                <div>
                    <h1>Response</h1>
                    <p>{JSON.stringify(responseObject)}</p>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default RestyResponse;