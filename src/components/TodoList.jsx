
function TodoList({todos}) {
    console.log(todos)
  return (
    <>
    {todos && todos.map((todo) => {
        return (
          <li key={todo.id}>
            <h3>Title: {todo.title}</h3>
            <p>completed: {todo.completed ? "true" : "false"}</p>
          </li>
        );
      })}
    </>
  )
}

export default TodoList