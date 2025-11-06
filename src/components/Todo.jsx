const Todo = ({todoItem, deleteTodo, checkTodo}) => {
    return (
        <li key={todoItem.id}>
            {/* Om todo list är utförd, kommer den bli grön med klass namn grön. */}
            <p onClick={() => checkTodo(todoItem.id)} className={todoItem.done === true ? 'green' : 'red' }>{todoItem.title} </p>
            {/* Om todo list ej utförd, då skrivs beskrivning ut. */}
            {!todoItem.done && <p> {todoItem.content} </p>}
            <button onClick={() => deleteTodo(todoItem.id)}>Delete Todo</button>
        </li>
    )
} 
export default Todo