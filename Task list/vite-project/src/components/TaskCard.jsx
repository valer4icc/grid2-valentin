export default function TaskCard({ task, onEdit, onDelete }) {
  const progress =
    task.status === "todo" ? 0 :
    task.status === "progress" ? 50 : 100;
 
  return (
    <div className={`task ${task.priority}`}>
      <h3>{task.text}</h3>
 
      <div>Priority: {task.priority}</div>
      <div>Status: {task.status}</div>
      <div>Progress: {progress}%</div>
 
      <div className="icons">
        <button onClick={onEdit}>✏️</button>
        <button onClick={onDelete}>🗑️</button>
      </div>
    </div>
  );
}