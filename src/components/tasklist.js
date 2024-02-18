import React from "react";

export default function TaskList({list, handleDelete}) {
    return (
        <ul>
            {list.map(({title, id}) =>
                <li key={id}>
                    <button onClick={() => handleDelete(id)}><i className="fa-solid fa-circle-check"></i></button>
                    <h1>{title}</h1>
                </li>
            )}
        </ul>
    )
}