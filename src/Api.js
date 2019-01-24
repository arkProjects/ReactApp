import React from 'react';


class ApiCalls extends React.Component {


    constructor() {
        super()
        this.state = {
            character: {},
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState({character: data, isLoading: false})
            })
    }
    render() {

        let text = this.state.isLoading ? "Loading...." : this.state.character.name;

        return (
            <h1>{text}</h1>
        )

    }

}

export default ApiCalls;
