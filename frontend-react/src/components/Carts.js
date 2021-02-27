import React, { Component } from "react";

class Carts extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: ""};
    }

    callAPI() {
        fetch("http://localhost:9000/carts")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res}))
        .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className = "App">
                <header className = "App-header">
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        )
    }
}

export default Carts;