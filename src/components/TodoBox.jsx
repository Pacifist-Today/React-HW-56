import React from "react";
import Item from "./Item";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: '',
            tasks: []
        }
    }

    changeHandler = ({target}) => {
        const {value} = target
        this.setState({taskText: value})
    }

    removeHandler = ({target}) => {
        const targetId = target.id
        const data = [...this.state.tasks]
        const filteredData = data.filter(value => value.id !== targetId)
        this.setState({tasks: filteredData})
    }

    submitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (this.state.taskText.length === 0) return

        const localArr = [...this.state.tasks]

        let data = {
            id: generateUniqueID(),
            name: this.state.taskText
        }

        localArr.push(data)
        this.setState({taskText: ''})
        this.setState({tasks: localArr})
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.submitHandler}>
                        <div className="me-3">
                            <input
                                name="tasks"
                                value={this.state.taskText}
                                type="text"
                                required=""
                                className="form-control"
                                placeholder="I am going..."
                                onChange={this.changeHandler}/>
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                {this.state.tasks
                    .sort((a, b) => a > b ? 1 : -1)
                    .map((value, index) => {
                    return <Item key = {index} task = {value} onRemove = {this.removeHandler} />
                })}
            </div>
        )
    }
}

export default TodoBox