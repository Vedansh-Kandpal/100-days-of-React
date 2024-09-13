import React from 'react'

function ListItem(props) {
    return (
        <li>
            <input type="checkbox" className="task-checkbox" />
            <span>{props.item}</span>
            <button
                className="delete-btn"
                onClick={e => {
                    props.deleteItem(
                        props.index
                    )
                }}
            >
                Delete
            </button>
        </li>
    )
}

export default ListItem