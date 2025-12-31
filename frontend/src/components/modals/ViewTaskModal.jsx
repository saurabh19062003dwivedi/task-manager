 export default function ViewTaskModal({
  open,
  task,
  onClose,
}) {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[440px] rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#020617]
                      p-6 shadow-2xl border border-white/10">

        {/* Header */}
        <h2 className="text-xl font-semibold text-white mb-6">
          Task Details
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">
            Title
          </label>
          <div className="mt-1 p-3 rounded-lg bg-white/5 text-white border border-white/10">
            {task.title}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">
            Description
          </label>
          <div className="mt-1 p-3 rounded-lg bg-white/5 text-white border border-white/10 min-h-[80px]">
            {task.description || "—"}
          </div>
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">
            Priority
          </label>
          <div className="mt-1 p-3 rounded-lg bg-white/5 text-white border border-white/10 capitalize">
            {task.priority}
          </div>
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">
            Status
          </label>
          <div className="mt-1 p-3 rounded-lg bg-white/5 text-white border border-white/10 capitalize">
            {task.status}
          </div>
        </div>

        {/* Due Date */}
        <div className="mb-6">
          <label className="text-sm text-gray-400">
            Due Date
          </label>
          <div className="mt-1 p-3 rounded-lg bg-white/5 text-white border border-white/10">
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "—"}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
