import React, { useState, useEffect } from 'react';
import styles from './RestyResponse.css';

const RestyResponse = ({ responseObject }) => {

    return (
        <div>
            <h2>Response</h2>
            <div className={styles.response}>
                {responseObject ?
                    <div>
                        <p data-testid='responseDisplay'
                        >{JSON.stringify(responseObject)}</p>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default RestyResponse;