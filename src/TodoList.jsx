import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length === 0 && "Start by adding Todo tasks"}
            {todos.map(todo => {
                return (
                    <TodoItem id={todo.id} completed={todo.completed} title={todo.title}
                    toggleTodo={toggleTodo} deleteTodo={deleteTodo}    key={todo.id} />
                )
            })}
        </ul>
    )
}