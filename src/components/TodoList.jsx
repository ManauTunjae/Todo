import Todo from "./Todo"
const TodoList = ({todolist, deleteTodo, checkTodo}) => {

return (
     <ul key={'hej'}>
        {todolist.map((todos) =>  
        <Todo todoItem={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>)}
     </ul>
    )
}
export default TodoList