import React, { Component } from "react";

export default class Task1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            list: null,
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/list")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    list: result,
                });
            })
    }

    render() {
        const { list, isLoaded } = this.state;
        if (!isLoaded) {
            return <div className={`row col border`}>Loading...</div>;
        }
        return (
            <div className={`row col`}>
                {list.map((item) => (
                    <div key={item.id} className={`row col col-3 border`}>
                        id - {item.id}
                        <br />
                        name - {item.name}
                        <br />
                        note - {item.note}
                    </div>
                ))}
            </div>
        );
    }
}
