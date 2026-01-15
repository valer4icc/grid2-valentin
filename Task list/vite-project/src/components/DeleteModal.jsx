export default function DeleteModal({ task, onCancel, onDelete }) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>Delete "{task.text}" ?</h3>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}