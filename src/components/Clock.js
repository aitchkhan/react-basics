import React, { Component } from 'react';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            isToggleOn: true
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID());
    }

    handleClick = () => {
        console.log("hey")
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    tick() {
        this.setState({
            date: new Date()
        });
    };
 
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.handleClick}>Click !{this.state.isToggleOn}</button>
            </div>
        );
    }
}

export default Clock;