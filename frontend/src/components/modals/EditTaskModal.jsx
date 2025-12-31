 
export default function EditTaskModal({
  open,
  task,
  setTask,
  onClose,
  onSave,
}) {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[420px] rounded-xl p-6 shadow-xl bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">

        <h2 className="text-xl font-semibold mb-5">
          Edit Task
        </h2>

        {/* TITLE */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Title
        </label>
        <input
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-slate-800 dark:border-slate-700
                     dark:text-gray-100 dark:placeholder-gray-500"
          value={task.title}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value })
          }
        />

        {/* DESCRIPTION */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Description
        </label>
        <textarea
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-slate-800 dark:border-slate-700
                     dark:text-gray-100 dark:placeholder-gray-500"
          value={task.description}
          onChange={(e) =>
            setTask({ ...task, description: e.target.value })
          }
        />

        {/* PRIORITY */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Priority
        </label>
        <select
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900
                     dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700"
          value={task.priority}
          onChange={(e) =>
            setTask({ ...task, priority: e.target.value })
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* STATUS */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Status
        </label>
        <select
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900
                     dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700"
          value={task.status}
          onChange={(e) =>
            setTask({ ...task, status: e.target.value })
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        {/* DUE DATE */}
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Due Date
        </label>
        <input
          type="date"
          className="w-full p-2.5 rounded-md border mb-5
                     bg-white text-gray-900
                     dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700"
          value={task.dueDate?.slice(0, 10) || ""}
          onChange={(e) =>
            setTask({ ...task, dueDate: e.target.value })
          }
        />

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border dark:border-slate-700"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
