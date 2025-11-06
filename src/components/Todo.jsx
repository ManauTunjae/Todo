const Todo = ({todoItem}) => {
    return (
        <li key={todoItem.id}>
            {/* Om todo list är utförd, kommer den bli grön med klass namn grön. */}
            <p className={todoItem.done === true ? 'green' : 'red' }>{todoItem.title} </p>
            {/* Om todo list ej utförd, då skrivs beskrivning ut. */}
            {!todoItem.done && <p> {todoItem.content} </p>}
        </li>
    )
} 
export default Todo