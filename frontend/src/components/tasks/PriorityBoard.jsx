import api from "../../services/api";

export default function PriorityBoard({
  tasks,
  loadTasks,
  currentPage,
  statusColor,
}) {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {[
          {
            level: "high",
            title: "🔴 High Priority",
            text: "text-red-500",
            moveDown: "medium",
          },
          {
            level: "medium",
            title: "🟡 Medium Priority",
            text: "text-yellow-400",
            moveUp: "high",
            moveDown: "low",
          },
          {
            level: "low",
            title: "🟢 Low Priority",
            text: "text-green-400",
            moveUp: "medium",
          },
        ].map((group) => (
          <div
            key={group.level}
            className="
              rounded-xl p-4 shadow
              bg-white text-gray-900
              dark:bg-slate-900 dark:text-gray-100
              border border-gray-200 dark:border-white/10
            "
          >
            {/* COLUMN HEADER */}
            <h2 className={`text-lg font-bold mb-4 ${group.text}`}>
              {group.title}
            </h2>

            {/* EMPTY STATE */}
            {tasks.filter((t) => t.priority === group.level).length === 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No tasks available
              </p>
            )}

            {/* TASK LIST */}
            <div className="space-y-3">
              {tasks
                .filter((t) => t.priority === group.level)
                .map((t) => (
                  <div
                    key={t._id}
                    className="
                      p-3 rounded-lg flex justify-between items-start transition
                      bg-gray-50 text-gray-900 hover:bg-gray-100
                      dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700
                    "
                  >
                    {/* TASK INFO */}
                    <div>
                      <p className="font-medium">{t.title}</p>
                      <p className="text-xs opacity-70">
                        {t.description || "No description"}
                      </p>

                      <span
                        className={`inline-block mt-1 px-2 py-0.5 text-xs rounded
                          ${statusColor(t.status)}`}
                      >
                        {t.status}
                      </span>
                    </div>

                    {/* MOVE PRIORITY ICONS */}
                    <div className="flex flex-col gap-1">
                      {group.moveUp && (
                        <button
                          title={`Move to ${group.moveUp} priority`}
                          onClick={async () => {
                            await api.put(`/tasks/${t._id}`, {
                              ...t,
                              priority: group.moveUp,
                            });
                            loadTasks(currentPage);
                          }}
                          className="text-lg hover:scale-110 transition"
                        >
                          🔼
                        </button>
                      )}

                      {group.moveDown && (
                        <button
                          title={`Move to ${group.moveDown} priority`}
                          onClick={async () => {
                            await api.put(`/tasks/${t._id}`, {
                              ...t,
                              priority: group.moveDown,
                            });
                            loadTasks(currentPage);
                          }}
                          className="text-lg hover:scale-110 transition"
                        >
                          🔽
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
