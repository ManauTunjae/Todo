import Todo from "./Todo"
const TodoList = ({todolist, deleteTodo}) => {

return (
     <ul key={'hej'}>
        {todolist.map((todos) =>  
        <Todo todoItem={todos} deleteTodo={deleteTodo}/>)}
     </ul>
    )
}
export default TodoList