import React from "react";

type AddTaskProps = {
  onAddTask: (taskName: string) => void;
  darkMode: boolean;
};

export default function AddTask({ onAddTask, darkMode }: AddTaskProps) {
  const [taskName, setTaskName] = React.useState("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskName.trim()) return; // ignore empty tasks

    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleAddTask} className="flex space-x-2 mb-6">
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        id="task-input"
        aria-label="Add task"
        className={`flex-1 px-3 py-2 sm:px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? "border-gray-600 placeholder-gray-400 bg-gray-700 text-white" : "border-gray-300 placeholder-gray-500 bg-white text-black"}`}
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="px-3 py-2 sm:px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}
