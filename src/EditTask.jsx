import React, { useState } from 'react';

function EditTask({ taskId, currentTitle, onSave }) {
    const [newTitle, setNewTitle] = useState(currentTitle);

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleSave = () => {
        onSave(taskId, newTitle);
    };

    return (
        <div>
            <input type="text" value={newTitle} onChange={handleTitleChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default EditTask;
