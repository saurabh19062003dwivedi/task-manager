// import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  filterStatus,
  setFilterStatus,
  onCreate,
  onView,
  onEdit,
  onDelete,
  currentPage,
  loadTasks,
  priorityColor,
  statusColor,
}) {
  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* ACTION BAR */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Create Task
        </button>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 rounded-md border
                     bg-white text-gray-800
                     dark:bg-slate-900 dark:text-gray-100 dark:border-slate-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* TASK LIST */}
      <div className="space-y-4">
        {tasks.map((t) => (
          <div
            key={t._id}
            onClick={() => onView(t)}
            className={`p-5 rounded-xl shadow-sm transition flex justify-between
              items-center cursor-pointer
              bg-white border border-gray-200
              dark:bg-slate-800 dark:border-slate-700
            `}
          >
            {/* LEFT */}
            <div>
              <h3 className="font-semibold dark:text-gray-100">
                {t.title}
              </h3>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t.description}
              </p>

              <p className="text-xs text-gray-400 dark:text-gray-500">
                Due Date:{" "}
                <span className="font-medium">
                  {t.dueDate
                    ? new Date(t.dueDate).toLocaleDateString()
                    : "—"}
                </span>
              </p>

              <div className="flex items-center gap-3 mt-2">
                <span
                  className={`px-3 py-1 text-xs rounded-es-sm font-medium
                    ${priorityColor(t.priority)}`}
                >
                  {t.priority}
                </span>

                <span
                  className={`px-3 py-1 text-xs rounded-es-sm font-medium
                    ${statusColor(t.status)}`}
                >
                  {t.status}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(t);
                }}
                className="p-2 rounded-lg
                           bg-blue-500/10 text-blue-400
                           hover:bg-blue-500/20"
              >
                ✏️
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(t._id);
                }}
                className="p-2 rounded-lg
                           bg-red-500/10 text-red-400
                           hover:bg-red-500/20"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => loadTasks(currentPage - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50
                     dark:border-slate-600 dark:text-gray-200"
        >
          Previous
        </button>

        <span className="text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage}
        </span>

        <button
          onClick={() => loadTasks(currentPage + 1)}
          className="px-4 py-2 border rounded
                     dark:border-slate-600 dark:text-gray-200"
        >
          Next
        </button>
      </div>

    </div>
  );
}
