import React from 'react';

function Title(props){
    return (
        <h1 aria-label={props.text[2]}>
            <span aria-label="hidden">{props.text[0]}</span>
            <span aria-label="hidden">{props.text[1]}</span>
        </h1>
    )
}

export default Title;