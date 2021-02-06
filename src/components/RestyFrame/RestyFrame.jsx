import React, { Component } from 'react';
import RestyForm from '../RestyForm/RestyForm.jsx';
import RestyResponse from '../RestyResponse/RestyResponse.jsx';
import RestyHistory from '../RestyHistory/RestyHistory.jsx'
import useFetch from '../../utils/fetch/fetch.js';

export default class RestyFrame extends Component {
    state = {
        responseObject: '',
        tempHistory: []
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
            <div>
                <RestyForm
                    handleSubmitClick={this.handleSubmitClick}
                />
                <RestyResponse
                    responseObject={this.state.responseObject}
                />
                <RestyHistory tempHistory={this.state.tempHistory} />

            </div>
        )
    }



}
