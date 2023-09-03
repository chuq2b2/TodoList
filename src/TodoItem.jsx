export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
            <div className="card">
                <div className="card-content">
                    <li>
                        <h2>{title}</h2>
                    </li>
                </div>
                <div className="card-actions">
                    
                        <input type="checkbox" checked={completed}
                            onChange={e => toggleTodo(id, e.target.checked)}
                            id="checkbox" />
                        <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
                
                </div>
            </div>
    )
}