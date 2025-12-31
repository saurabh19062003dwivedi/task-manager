export default function CreateTaskModal({
  open,
  title,
  description,
  priority,
  status,
  dueDate,
  setTitle,
  setDescription,
  setPriority,
  setStatus,
  setDueDate,
  onClose,
  onCreate,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[420px] rounded-xl p-6 shadow-xl bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">

        <h2 className="text-xl font-semibold mb-5">
          Create Task
        </h2>

        <input
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-slate-800 dark:border-slate-700
                     dark:text-gray-100 dark:placeholder-gray-500"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-slate-800 dark:border-slate-700
                     dark:text-gray-100 dark:placeholder-gray-500"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Priority
        </label>
        <select
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900
                     dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Status
        </label>
        <select
          className="w-full p-2.5 rounded-md border mb-3
                     bg-white text-gray-900
                     dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
          Due Date
        </label>
        <input
          type="date"
          className="w-full p-2.5 rounded-md border mb-5
                     bg-white text-gray-900
                     dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border dark:border-slate-700"
          >
            Cancel
          </button>

          <button
            onClick={onCreate}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Create
          </button>
        </div>

      </div>
    </div>
  );
}
