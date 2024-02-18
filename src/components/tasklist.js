import React from "react";

export default function TaskList({list}) {
    return (
        <ul>
            {list.map(({title, description}) =>
                <li>
                    <h1>{title}</h1>
                    <h1>{description ? description : ''}</h1>
                </li>
            )}
        </ul>
    )
}