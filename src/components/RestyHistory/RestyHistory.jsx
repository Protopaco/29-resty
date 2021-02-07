import React, { useState, useEffect } from 'react';
import styles from './RestyHistory.css'

const RestyHistory = ({ tempHistory }) => {
    const [history, setHistory] = useState();

    useEffect(() => {
        let fullHistory = JSON.parse(localStorage.getItem('history'));
        if (!fullHistory) fullHistory = [];
        if (fullHistory && tempHistory.url) fullHistory.push(tempHistory)

        localStorage.setItem('history', JSON.stringify(fullHistory))

        setHistory(fullHistory)
    }, [tempHistory])

    return (
        <div>
            <h2>HISTORY</h2>
            <div className={styles.history}>
                {
                    history ?
                        history.map((search, searchIndex) => {
                            return <div key={searchIndex}>
                                <p>{search.infoObject.method}</p>
                                <p>{search.url}</p>
                                {search.infoObject.body ?
                                    <div className={styles.body}>
                                        <p>BODY:</p>
                                        <p>{search.infoObject.body}</p>
                                    </div>
                                    :
                                    <></>
                                }
                                <hr />
                            </div>
                        })
                        :
                        <></>
                }
            </div >
        </div>
    )
}

export default RestyHistory;