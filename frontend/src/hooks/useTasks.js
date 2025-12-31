import { useEffect, useState } from "react";
import api from "../services/api";

export default function useTasks(currentPage, setCurrentPage) {
  const [tasks, setTasks] = useState([]);

  /* ================= LOAD TASKS ================= */
  const loadTasks = async (page = 1) => {
    try {
      const res = await api.get(`/tasks?page=${page}`);
      setTasks(res.data);
      setCurrentPage(page);
    } catch (error) {
      console.error("Fetch tasks failed", error);
    }
  };

  /* ================= CREATE TASK ================= */
  const createTask = async (taskData) => {
    try {
      await api.post("/tasks", taskData);
      await loadTasks(currentPage);
    } catch (error) {
      console.error("Create task failed", error);
      throw error;
    }
  };

  /* ================= UPDATE TASK ================= */
  const updateTask = async (taskId, updatedData) => {
    try {
      await api.put(`/tasks/${taskId}`, updatedData);
      await loadTasks(currentPage);
    } catch (error) {
      console.error("Update task failed", error);
      throw error;
    }
  };

  /* ================= DELETE TASK ================= */
  const deleteTask = async (taskId) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await api.delete(`/tasks/${taskId}`);
      await loadTasks(currentPage);
    } catch (error) {
      console.error("Delete task failed", error);
      throw error;
    }
  };

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    loadTasks(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    tasks,
    loadTasks,
    createTask,
    updateTask,
    deleteTask,
  };
}
