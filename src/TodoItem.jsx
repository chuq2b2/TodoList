import { EditTask } from "./EditTask"

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, onSaveEdit }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    return (
            <div className="card">
            <div className="card-content">
                {isEditing ? (
                    <EditTask taskId={id} currentTitle={title} onSave={onSaveEdit} />
                ) : (
                        <>
                            <h2>{title}</h2>
                            <button onClick={handleEditClick}>Edit</button>
                        </>
                )}
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