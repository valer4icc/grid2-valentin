import { useState, useEffect } from "react";
 
export default function TaskModal({ onClose, onSave, editTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("todo");
 
  useEffect(() => {
    if (editTask) {
      setText(editTask.text);
      setPriority(editTask.priority);
      setStatus(editTask.status);
    }
  }, [editTask]);
 
  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
 
    const newTask = {
      id: editTask ? editTask.id : Date.now(),
      text,
      priority,
      status
    };
 
    onSave(newTask);
  }
 
  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>{editTask ? "Edit Task" : "Add Task"}</h2>
 
        <input
          placeholder="Task..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
 
        <div className="priority">
          {["low", "medium", "high"].map(p => (
            <button
              key={p}
              className={priority === p ? "active" : ""}
              onClick={() => setPriority(p)}
            >
              {p}
            </button>
          ))}
        </div>
 
        <div className="status">
          {["todo", "progress", "done"].map(s => (
            <button
              key={s}
              className={status === s ? "active" : ""}
              onClick={() => setStatus(s)}
            >
              {s}
            </button>
          ))}
        </div>
 
        <button
          className="save-btn"
          disabled={!text.trim()}
          onClick={handleSubmit}
        >
          {editTask ? "Edit" : "Add"}
        </button>
 
        <button className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}