import React, { useState } from 'react';
import './index.css'; 

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = (id) => {
    const filteredTasks = task.filter (task => task.id !== id)
    setTasks(filteredTasks)

  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      {task.name}
      <button onClick={handleComplete (task.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default TaskItem;
