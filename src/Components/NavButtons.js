import React from 'react'

export default function NavButtons(props) {
    return (
        <span className="nav-btns">
            <button onClick={props.gotoNextPage()}>Prev</button>
            <button onClick={props.gotoNextPage()}>Next</button>
        </span>
    )
}
