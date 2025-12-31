function TaskDetailsModal({ task, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{task.title}</h2>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        <div className="space-y-3">
          <p><span className="font-medium">Description:</span> {task.description}</p>

          <p>
            <span className="font-medium">Priority:</span>{" "}
            <span className={
              task.priority === "High"
                ? "text-red-600"
                : task.priority === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }>
              {task.priority}
            </span>
          </p>

          <p><span className="font-medium">Status:</span> {task.status}</p>

          <div>
            <p className="font-medium mb-1">Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${task.progress}%` }}
              />
            </div>
            <p className="text-sm mt-1">{task.progress}% completed</p>
          </div>

          <p className="text-sm text-gray-400">
            Created on: {task.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;
