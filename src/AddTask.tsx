import React from "react";

type AddTaskProps = {
  onAddTask: (taskName: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
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
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
