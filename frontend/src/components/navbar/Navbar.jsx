export default function Navbar({
  activeTab,
  setActiveTab,
  userName,
  onLogout,
}) {
  return (
    <div className="sticky top-0 z-50 shadow bg-white px-6 py-3 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-blue-600">
        Task Management
      </h1>

      <div className="flex gap-8">
        <button
          onClick={() => setActiveTab("tasks")}
          className={`pb-1 bold font-bold ${
            activeTab === "tasks"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Task List
        </button>

        <button
          onClick={() => setActiveTab("priority")}
          className={`pb-1 font-bold ${
            activeTab === "priority"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
        >
          Priority
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
            {userName ? userName.charAt(0).toUpperCase() : "U"}
          </div>

          <span className="text-sm font-bold text-gray-700">
            {userName || "User"}
          </span>
        </div>

        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
