import React, { useState, useEffect } from 'react';

const RestyHistory = ({ tempHistory }) => {
    const [history, setHistory] = useState();

    useEffect(() => {
        let fullHistory = JSON.parse(localStorage.getItem('history'));
        console.log(fullHistory)
        console.log(tempHistory)
        if (fullHistory && tempHistory.url) fullHistory.push(tempHistory)

        localStorage.setItem('history', JSON.stringify(fullHistory))

        setHistory(fullHistory)

    }, [tempHistory])

    return (
        <div>
            <h1>HISTORY</h1>
            {
                history ?
                    history.map((search, searchIndex) => {
                        return <div key={searchIndex}>
                            <hr />
                            <p>{search.infoObject.method}</p>
                            <p>{search.url}</p>
                            {search.infoObject.body ?
                                <p>{search.infoObject.body}</p>
                                :
                                <></>
                            }

                        </div>
                    })
                    :
                    <></>
            }
        </div >
    )
}

export default RestyHistory;