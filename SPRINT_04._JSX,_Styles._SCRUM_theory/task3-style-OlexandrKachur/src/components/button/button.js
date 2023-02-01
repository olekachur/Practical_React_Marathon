import React from 'react';

const style = {
    color: "rgb(18, 255, 18)",
    border: "0px",
    fontSize: "33pt",
    backgroundColor: "transparent",
    fontFamily: "Courier",
}

export default function Button(element){
    return <button style={style} data-testid="element-button">Wake up Neo...</button>;
}