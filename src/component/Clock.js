import React, { Component } from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        //actualizazacion del estado local del componente
        this.setState({ date: new Date() });
    }

    render() {
        return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5">
                    <h1>Reloj del tiempo</h1>
                    <h1>It is: { this.state.date.toLocaleTimeString() }</h1>
                </div>
            </div>
        </div>
        );
    }
}

export default Clock;