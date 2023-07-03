import React from "react";

function Todos() {
    // initial state
    // state = {
    //     inputValue: "",
    //     editTodo: {},
    //     todosList: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    // }

    const [inputValue, setInputValue] = React.useState("");
    const [editTodo, setEditTodo] = React.useState({});
    const [todosList, setTodosList] = React.useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

    // input on change
    const handleChange = (e) => {
        // setState({
        //     inputValue: e.target.value
        // })
        setInputValue(e.target.value)
    }
    // create new todo function
    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue) {
            // clone old todo list in to a variable
            const todos = [...todosList];
            // add new todo in cloned variable
            todos.push({
                id: Date.now(),
                value: inputValue,
                isDone: false,
                // isDeleted:false
            })
            // change oldt todo to new todo
            setInputValue("")
            setTodosList(todos)
            // save todos in local storage
            localStorage.setItem("todos", JSON.stringify(todos))
        } else {
            alert("please add text in input field")
        }
    }
    // delete todo
    const deleteTodo = (deleteItem) => {
        // show alert modal 
        // if confirm delete
        // else cancel
        console.log(deleteItem);
        let todos = [...todosList];
        todos = todos.filter((todo) => {
            return todo.id !== deleteItem.id
        })

        setTodosList(todos)
        // save todos in local storage
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    // delete all to do 
    // const deleteAll = () => {
    //     setTodosList([])
    //     // save todos in local storage
    //     localStorage.setItem("todos", JSON.stringify([]))
    // }
    // mark to do as done or undone
    const handleTodoDone = (doneTodo) => {
        let todos = [...todosList];
        todos = todos.map((todo) => {
            if (todo.id === doneTodo.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodosList(todos)
        // save todos in local storage
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    // on edit click
    const editTodoClick = (todo) => {
        setEditTodo(todo)
    }
    // on edit submit
    const editTodoSubmit = (editTodo) => {
        let todos = [...todosList];
        todos = todos.map((todo) => {
            if (todo.id === editTodo.id) {
                todo.value = editTodo.value
            }
            return todo
        })

        setTodosList(todos)
        // save todos in local storage
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    return (
        <>
            {/* below form is for creating todo */}
            <form onSubmit={addTodo}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control mr-3"
                        placeholder="Add todo"
                        onChange={handleChange}
                        value={inputValue}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-success"
                            type="submit"
                        >Add Todo</button>
                    </div>
                </div>
            </form>
            {/* below code is for todo list */}
            <table className="table">
                <tbody>
                    {todosList.map((todo, index) => (
                        <tr key={todo.id}>
                            <td>{index + 1}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    defaultChecked={todo.isDone}
                                    onClick={() => handleTodoDone(todo)}
                                />
                            </td>
                            <td>{todo.value}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteTodo(todo)}
                                >Delete</button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm"
                                    data-bs-toggle='modal'
                                    data-bs-target='#exampleModal'
                                    type='button'
                                    onClick={() => editTodoClick(todo)}
                                >Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* below code is for bootstrap modal */}
            <div className='modal fade' id='exampleModal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>
                                Update Todo Value
                            </h5>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    editTodoSubmit(editTodo);
                                }}>
                                <div className='mb-3'>
                                    <label htmlFor='recipient-name' className='col-form-label'>
                                        Value:
                                    </label>
                                    {editTodo?.value && (
                                        <input
                                            type='text'
                                            className='form-control'
                                            value={editTodo.value}
                                            onChange={e =>
                                                setEditTodo({
                                                    ...editTodo,
                                                    value: e.target.value,
                                                }
                                                )
                                            }
                                        />
                                    )}
                                </div>
                                <div className='modal-footer'>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        data-bs-dismiss='modal'>
                                        Close
                                    </button>
                 <button
                    type='submit'
                    className='btn btn-primary'
                     data-bs-dismiss='modal'>
                         Update
                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Todos;