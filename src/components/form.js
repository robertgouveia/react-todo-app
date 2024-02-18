import React from "react";

export default function form({submit, change, task}) {
    return (
        <form onSubmit={submit}>
            <input
                type="text"
                name="title"
                onChange={change}
                value={task.title || ''}
                placeholder="Type your Task: "
            />
            <button type="submit">Add Task</button>
        </form>
    )
}