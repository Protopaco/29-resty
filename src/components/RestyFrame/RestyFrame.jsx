import React, { Component } from 'react';
import RestyForm from '../RestyForm/RestyForm.jsx';
import RestyResponse from '../RestyResponse/RestyResponse.jsx';
import useFetch from '../../utils/fetch/fetch.js';

export default class RestyFrame extends Component {
    state = {
        history: [],
        responseObject: ''
    }


    handleSubmitClick = async (stateObject) => {

        let tempHistory = this.state.history
        tempHistory.push(stateObject)

        const responseObject = await useFetch(stateObject)
        console.log(responseObject)
        await this.setState({
            responseObject,
            history: tempHistory
        })

        console.log('GHGHGHGHGHGHGHGHGHGHGHGH')
        console.log(this.state.responseObject)
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

            </div>
        )
    }



}
