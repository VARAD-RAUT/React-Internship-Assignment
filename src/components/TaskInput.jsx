import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      text: task,
      priority: priority,
    };

    dispatch(addTask(newTask));
    setTask(""); // Clear input field
  };

  return (
    <div className="form-group">
      <div className="form-row">
        <div className="form-control">
          <label className="form-label">Enter a task</label>
          <input
            type="text"
            placeholder="Enter your task here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="form-label">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">🔥 High</option>
            <option value="Medium">⚡ Medium</option>
            <option value="Low">🟢 Low</option>
          </select>
        </div>
        <div className="form-control">
          <button onClick={handleAddTask} className="btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
