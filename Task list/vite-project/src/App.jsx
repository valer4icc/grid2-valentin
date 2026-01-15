import { useState } from "react";
import TaskModal from "./components/TaskModal";
import DeleteModal from "./components/DeleteModal";
import TaskCard from "./components/TaskCard";
import "./styles.css";
 
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(null);
  const [editTask, setEditTask] = useState(null);
 
  function handleSave(task) {
    if (editTask) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      setTasks([task, ...tasks]);
    }
    setModalOpen(false);
    setEditTask(null);
  }
 
  function handleDeleteConfirm() {
    setTasks(tasks.filter(t => t.id !== deleteModal.id));
    setDeleteModal(null);
  }
 
  return (
    <div className="app">
      <h1>Tasklist App</h1>
 
      <button className="add-btn" onClick={() => setModalOpen(true)}>
        + Add Task
      </button>
 
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => {
              setEditTask(task);
              setModalOpen(true);
            }}
            onDelete={() => setDeleteModal(task)}
          />
        ))}
      </div>
 
      {modalOpen && (
        <TaskModal
          onClose={() => {
            setModalOpen(false);
            setEditTask(null);
          }}
          onSave={handleSave}
          editTask={editTask}
        />
      )}
 
      {deleteModal && (
        <DeleteModal
          task={deleteModal}
          onCancel={() => setDeleteModal(null)}
          onDelete={handleDeleteConfirm}
        />
      )}
    </div>
  );
}