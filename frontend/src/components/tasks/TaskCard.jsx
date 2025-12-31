import { priorityColor, statusColor } from "../../utils/taskHelpers";

export default function TaskCard({ task, onView, onEdit, onDelete }) {
  return (
    <div
      onClick={() => onView(task)}
      className="p-5 rounded-xl shadow-sm transition flex justify-between items-center cursor-pointer
                 bg-white border border-gray-200 hover:shadow-md"
    >
      {/* LEFT: TASK INFO */}
      <div>
        <h3 className="font-semibold">{task.title}</h3>

        <p className="text-xs text-gray-500">
          {task.description || "No description"}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Due Date:{" "}
          <span className="font-medium">
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "—"}
          </span>
        </p>

        {/* BADGES */}
        <div className="flex items-center gap-3 mt-2">
          <span
            className={`px-3 py-1 text-xs rounded font-medium ${priorityColor(
              task.priority
            )}`}
          >
            {task.priority}
          </span>

          <span
            className={`px-3 py-1 text-xs rounded font-medium ${statusColor(
              task.status
            )}`}
          >
            {task.status}
          </span>
        </div>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="flex items-center gap-3">
        {/* EDIT */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(task);
          }}
          title="Edit Task"
          className="p-2 rounded-lg bg-blue-500/10 text-blue-500
                     hover:bg-blue-500/20 transition"
        >
          ✏️
        </button>

        {/* DELETE */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task._id);
          }}
          title="Delete Task"
          className="p-2 rounded-lg bg-red-500/10 text-red-500
                     hover:bg-red-500/20 transition"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
