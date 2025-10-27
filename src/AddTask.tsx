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
    <form onSubmit={handleAddTask}>
      <label htmlFor="task-input">Add Task: </label>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        id="task-input"
      />
      <button>Add</button>
    </form>
  );
}
