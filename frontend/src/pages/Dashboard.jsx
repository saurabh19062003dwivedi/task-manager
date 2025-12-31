import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

/* COMPONENTS */
import Navbar from "../components/navbar/Navbar";
import TaskList from "../components/tasks/TaskList";
import PriorityBoard from "../components/tasks/PriorityBoard";


// import TaskCard from "../components/tasks/TaskCard";
// import TaskDetailsModal from "../components/modals/TaskDetailsModal";



import CreateTaskModal from "../components/modals/CreateTaskModal";
import EditTaskModal from "../components/modals/EditTaskModal";
import ViewTaskModal from "../components/modals/ViewTaskModal";
import LogoutModal from "../components/modals/LogoutModal";

export default function Dashboard() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  /* ================= STATES (SAME) ================= */
  const [activeTab, setActiveTab] = useState("tasks");
  const [filterStatus, setFilterStatus] = useState("all");
  const [tasks, setTasks] = useState([]);

  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPriority, setNewPriority] = useState("low");
  const [newStatus, setNewStatus] = useState("pending");
  const [newDueDate, setNewDueDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const userName = localStorage.getItem("userName");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  /* ================= HELPERS (SAME) ================= */
  const priorityColor = (p) => {
    if (p === "high") return "bg-red-600 text-white";
    if (p === "medium") return "bg-yellow-500 text-black";
    return "bg-green-600 text-white";
  };

  const statusColor = (s) => {
    if (s === "completed") return "bg-emerald-600 text-white";
    if (s === "in-progress") return "bg-blue-600 text-white";
    return "bg-orange-500 text-white";
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  /* ================= API (SAME) ================= */
  const loadTasks = async (page = 1) => {
    const res = await api.get(`/tasks?page=${page}`);
    setTasks(res.data);
    setCurrentPage(page);
  };

  useEffect(() => {
    loadTasks(1);
  }, [filterStatus]);

  const visibleTasks =
    filterStatus === "all"
      ? tasks
      : tasks.filter((t) => t.status === filterStatus);

  const createTask = async () => {
    await api.post("/tasks", {
      title: newTitle,
      description: newDescription,
      priority: newPriority,
      status: newStatus,
      dueDate: newDueDate,
    });

    setShowCreate(false);
    setNewTitle("");
    setNewDescription("");
    setNewPriority("low");
    setNewStatus("pending");
    setNewDueDate("");

    loadTasks(currentPage);
  };

  const saveEdit = async () => {
    await api.put(`/tasks/${selectedTask._id}`, selectedTask);
    setShowEdit(false);
    loadTasks(currentPage);
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    await api.delete(`/tasks/${id}`);
    loadTasks(currentPage);
  };

  /* ================= RENDER ================= */
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userName={userName}
        onLogout={() => setShowLogoutModal(true)}
      />


      {activeTab === "tasks" && (
        <TaskList
          tasks={visibleTasks}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          onCreate={() => setShowCreate(true)}
          onView={(t) => {
            setSelectedTask(t);
            setShowView(true);
          }}
          onEdit={(t) => {
            setSelectedTask(t);
            setShowEdit(true);
          }}
          onDelete={deleteTask}
          currentPage={currentPage}
          loadTasks={loadTasks}
          priorityColor={priorityColor}
          statusColor={statusColor}
        />
      )}

      {activeTab === "priority" && (
        <PriorityBoard
          tasks={tasks}
          loadTasks={loadTasks}
          currentPage={currentPage}
          statusColor={statusColor}
          darkMode={darkMode}
        />
      )}

      <CreateTaskModal
        open={showCreate}
        title={newTitle}
        description={newDescription}
        priority={newPriority}
        status={newStatus}
        dueDate={newDueDate}
        setTitle={setNewTitle}
        setDescription={setNewDescription}
        setPriority={setNewPriority}
        setStatus={setNewStatus}
        setDueDate={setNewDueDate}
        onClose={() => setShowCreate(false)}
        onCreate={createTask}
      />

      <EditTaskModal
        open={showEdit}
        task={selectedTask}
        setTask={setSelectedTask}
        onClose={() => setShowEdit(false)}
        onSave={saveEdit}
      />

      <ViewTaskModal
        open={showView}
        task={selectedTask}
        onClose={() => setShowView(false)}
      />

      <LogoutModal
        open={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={logoutHandler}
      />
      

      <button
  onClick={toggleTheme}
  className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full shadow-lg text-sm font-medium transition
    ${
      darkMode
        ? "bg-gray-700 text-white hover:bg-gray-600"
        : "bg-white text-gray-800 hover:bg-gray-100"
    }`}
>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
</button>

    </div>
  );
}
