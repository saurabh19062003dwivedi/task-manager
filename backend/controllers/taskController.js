const Task = require("../models/Task");


// CREATE TASK
// exports.createTask = async (req, res) => {
//   try {
//     const task = await Task.create({
//       ...req.body,
//       createdBy: req.user._id,
//     });

//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description || "",
      priority: req.body.priority || "medium",
      status: req.body.status || "pending",
      dueDate: req.body.dueDate,
      assignedTo: req.user._id,   // 🔥 THIS WAS MISSING
      createdBy: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL TASKS (Pagination)
exports.getTasks = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const tasks = await Task.find({
      assignedTo: req.user._id,
    })
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE TASK
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
