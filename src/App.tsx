import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import type { Task } from "./types";
import TaskListItem from "./TaskItemList";
import TaskListHeader from "./TaskListHeader";
import { Sun, Moon } from "lucide-react";

function App() {
  // acting db for tasks
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [darkMode, setDarkMode] = React.useState(true);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false }, // Date.now() is just a placeholder -> real db handles this automatically
    ]);
  };

  const onToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  const onDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-indigo-50 to-purple-50"} flex items-center justify-center p-4`}
    >
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-lg p-4 sm:p-8 max-w-md w-full relative`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`absolute top-4 right-4 w-8 h-8 ${darkMode ? "text-yellow-400 hover:text-yellow-300" : "text-gray-600 hover:text-gray-800"} focus:outline-none transition-colors flex items-center justify-center cursor-pointer`}
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <h1
          className={`text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 ${darkMode ? "text-white" : "text-black"}`}
        >
          Tasks
        </h1>
        <AddTask onAddTask={onAddTask} darkMode={darkMode} />
        <TaskList
          header={<TaskListHeader count={tasks.length} darkMode={darkMode} />}
        >
          {tasks.map((task) => (
            <TaskListItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
              darkMode={darkMode}
            />
          ))}
        </TaskList>
      </div>
    </div>
  );
}

export default App;
