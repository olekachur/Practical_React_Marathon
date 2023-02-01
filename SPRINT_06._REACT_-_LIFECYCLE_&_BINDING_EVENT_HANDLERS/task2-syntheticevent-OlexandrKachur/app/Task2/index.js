import React, { Component } from "react";

export default class Task2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id: 1,
                    text: "hidden text 1"
                },
                {
                    id: 2,
                    text: "hidden text 2"
                },
                {
                    id: 3,
                    text: "hidden text 3"
                },
            ],
            text: ''
        };
    }

    showText = (event) => {
        this.setState({
            text: event,
        })
    }

    hideText = () => {
        this.setState({
            text: '',
        })
    }

    render() {
        const { list, text } = this.state;
        return (
            <>
                <ul>
                    {list.map((item) => (
                        <li
                            className="element" key={item.id}
                            onMouseEnter={() => (this.showText(item.text))}
                            onMouseLeave={this.hideText}
                        >
                            id - {item.id}
                        </li>)
                    )}
                </ul>
                <p>text</p>
                <div data-testid="text">{text}</div>
            </>
        )
    }
}
