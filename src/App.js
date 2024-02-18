//imports
import './styles/App.css';
import React, {useState} from "react";
import Form from './components/form';
import TaskList from "./components/tasklist";

//application
export default function App() {
    const [taskList, setTaskList] = useState([])
    const [task, setTask] = useState({})

    //submission
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!task.title) return
        setTaskList((prevTaskList) => ([task, ...prevTaskList]))
        setTask({})
    }
    //updating input
    const handleChange = ({target}) => {
        const {name, value} = target
        setTask((prevTask) => ({...prevTask, [name]: value}))
    }

    //JSX
    return (
        <div>
            <h1>Todo List App</h1>
            <Form submit={handleSubmit} change={handleChange} task={task} />
            <TaskList list={taskList} />
        </div>
    )
}
