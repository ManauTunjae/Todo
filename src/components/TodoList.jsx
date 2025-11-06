import Todo from "./Todo"
const TodoList = ({todolist}) => {

return (
     <ul key={'hej'}>
        {todolist.map((todos) =>  
        <Todo todoItem={todos}/>)}
     </ul>
    )
}
export default TodoList