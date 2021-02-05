import React from 'react';

export default class RestFrame extends Component {
    state = {
        method: '',
        url: '',
        body: ''
    }

    handleStateChange = async (key, value) => {
        console.log(`${key}: ${value}`)
        await this.setState({ [key]: value })
    }

    render() {
        return (
            <div>
                <RestForm
                />
            </div>
        )
    }



}