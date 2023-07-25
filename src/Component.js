import { Component, Fragment } from "react";

class ClassTestSync extends Component {
    state = {
        counterOne: 0,
        counterTwo: 0,
        counterThree: 0,
    }

    setCounterOne = () => {
        this.setState({ counterOne: this.state.counterOne + 1 });
        console.log('counterOne: ', this.state.counterOne);
    }
    setCounterTwo = () => {
        setTimeout(() => {
            this.setState({ counterTwo: this.state.counterTwo + 1 });
            console.log('counterTwo: ', this.state.counterTwo);
        }, 0)
    }
    setCounterThree = () => {
        this.setState({ counterThree: this.state.counterThree + 1 });
        console.log('counterThree: ', this.state.counterThree);
    }



    render() {
        return (
            <Fragment>
                <button onClick={this.setCounterOne}>Set Counter 1</button>
                <button onClick={this.setCounterTwo}>Set Counter 2</button>
                <button onClick={this.setCounterThree}>Set Counter 3</button>
            </Fragment>
        );
    }
}

export default ClassTestSync;
