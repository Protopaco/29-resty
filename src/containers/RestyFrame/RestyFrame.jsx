import React, { Component } from 'react';
import RestyForm from '../../components/RestyForm/RestyForm.jsx';
import RestyResponse from '../../components/RestyResponse/RestyResponse.jsx';
import RestyHistory from '../../components/RestyHistory/RestyHistory.jsx'
import useFetch from '../../utils/fetch/fetch.js';
import styles from './RestyFrame.css'

export default class RestyFrame extends Component {
    state = {
        responseObject: '',
        tempHistory: {}
    }


    handleSubmitClick = async (stateObject) => {
        const responseObject = await useFetch(stateObject)

        await this.setState({
            responseObject,
            tempHistory: stateObject
        })

    }

    render() {
        return (
            <div className={styles.frame}
            >
                <RestyForm
                    handleSubmitClick={this.handleSubmitClick}
                />
                <div className={styles.lowerFrame}>
                    <RestyHistory
                        tempHistory={this.state.tempHistory}
                        className={styles.history}
                    />
                    <RestyResponse
                        responseObject={this.state.responseObject}
                    />

                </div>
            </div>
        )
    }



}
