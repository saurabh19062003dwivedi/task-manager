/* ================= PRIORITY COLOR ================= */
export const priorityColor = (priority) => {
  if (priority === "high") {
    return "bg-red-600 text-white";
  }

  if (priority === "medium") {
    return "bg-yellow-500 text-black";
  }

  return "bg-green-600 text-white";
};

/* ================= STATUS COLOR ================= */
export const statusColor = (status) => {
  if (status === "completed") {
    return "bg-emerald-600 text-white";
  }

  if (status === "in-progress") {
    return "bg-blue-600 text-white";
  }

  return "bg-orange-500 text-white";
};
