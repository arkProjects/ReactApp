import React from 'react'

class Count extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.addHandle = this.addHandle.bind(this)
    }

    addHandle(id) {
        this.setState(prev => {
                return {
                    count: id ? prev.count + 1 : prev.count - 1
                }
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Hi, You Count is {this.state.count}</h1>
                <button onClick={() => this.addHandle(true)}> Add</button>
                <button onClick={() => this.addHandle(false)}> Subtract</button>
            </div>
        )
    }
}

export default Count;
