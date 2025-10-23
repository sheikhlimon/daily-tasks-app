import React from "react";

type Priority = "p1" | "p2" | "p3";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  // acting db for tasks
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: "Learn React", isCompleted: false },
  ]);

  const [taskName, setTaskName] = React.useState("");

  const onAddTask = () => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false }, // Date.now() is just a placeholder -> real db handles this automatically
    ]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <label htmlFor="task-input">Add Task: </label>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        id="task-input"
      />
      <button onClick={onAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
